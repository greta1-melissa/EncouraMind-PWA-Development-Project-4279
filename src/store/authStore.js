import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import supabase from '../lib/supabase';

// Fallback demo users for development
const DEMO_USERS = [
  {id: 1, name: 'Admin User', email: 'admin@example.com', password: 'admin', role: 'admin'},
  {id: 2, name: 'Demo User', email: 'user@example.com', password: 'password', role: 'user'}
];

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      
      login: async (credentials) => {
        set({ isLoading: true });
        try {
          // First try Supabase authentication
          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          });
          
          if (error) {
            // Fall back to demo login if Supabase fails
            console.log("Supabase login failed, trying demo login");
            const user = DEMO_USERS.find(
              u => u.email === credentials.email && u.password === credentials.password
            );
            
            if (user) {
              const { password, ...userWithoutPassword } = user;
              set({ user: userWithoutPassword, isAuthenticated: true, isLoading: false });
              return { success: true };
            }
            
            throw new Error(error.message || 'Invalid credentials');
          }
          
          // Get user profile
          const { data: profile } = await supabase
            .from('profiles_enc01')
            .select('*')
            .eq('id', data.user.id)
            .single();
          
          const userData = {
            id: data.user.id,
            email: data.user.email,
            name: profile?.name || data.user.email.split('@')[0],
            role: profile?.role || 'user',
            bio: profile?.bio || ''
          };
          
          set({ user: userData, isAuthenticated: true, isLoading: false });
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: error.message };
        }
      },
      
      register: async (userData) => {
        set({ isLoading: true });
        try {
          // Register with Supabase
          const { data, error } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password,
            options: {
              data: {
                name: userData.name,
              }
            }
          });
          
          if (error) throw error;
          
          // Create a profile record
          if (data.user) {
            const { error: profileError } = await supabase
              .from('profiles_enc01')
              .insert([
                {
                  id: data.user.id,
                  name: userData.name,
                  email: userData.email,
                  role: 'user'
                }
              ]);
            
            if (profileError) throw profileError;
          }
          
          const newUser = {
            id: data.user.id,
            name: userData.name,
            email: userData.email,
            role: 'user'
          };
          
          set({ user: newUser, isAuthenticated: true, isLoading: false });
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: error.message };
        }
      },
      
      logout: async () => {
        try {
          await supabase.auth.signOut();
        } catch (error) {
          console.error('Error signing out:', error);
        }
        set({ user: null, isAuthenticated: false });
      },
      
      updateProfile: async (userData) => {
        try {
          const currentUser = get().user;
          
          if (!currentUser?.id) {
            throw new Error('No authenticated user found');
          }
          
          // Update profile in Supabase
          const { error } = await supabase
            .from('profiles_enc01')
            .update({
              name: userData.name,
              bio: userData.bio,
              updated_at: new Date()
            })
            .eq('id', currentUser.id);
          
          if (error) throw error;
          
          const updatedUser = { ...currentUser, ...userData };
          set({ user: updatedUser });
          return { success: true };
        } catch (error) {
          return { success: false, error: error.message };
        }
      },
      
      // Check current session on app load
      checkSession: async () => {
        try {
          const { data, error } = await supabase.auth.getSession();
          
          if (error || !data.session) {
            return { success: false };
          }
          
          const { data: profile } = await supabase
            .from('profiles_enc01')
            .select('*')
            .eq('id', data.session.user.id)
            .single();
          
          const userData = {
            id: data.session.user.id,
            email: data.session.user.email,
            name: profile?.name || data.session.user.email.split('@')[0],
            role: profile?.role || 'user',
            bio: profile?.bio || ''
          };
          
          set({ user: userData, isAuthenticated: true });
          return { success: true };
        } catch (error) {
          return { success: false, error: error.message };
        }
      }
    }),
    { name: 'auth-storage' }
  )
);