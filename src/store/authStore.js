import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const DEMO_USERS = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin',
    role: 'admin'
  },
  {
    id: 2,
    name: 'Demo User',
    email: 'user@example.com',
    password: 'password',
    role: 'user'
  }
];

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials) => {
        set({ isLoading: true });
        try {
          // Demo login logic
          const user = DEMO_USERS.find(
            u => u.email === credentials.email && u.password === credentials.password
          );
          
          if (user) {
            const { password, ...userWithoutPassword } = user;
            set({ 
              user: userWithoutPassword, 
              isAuthenticated: true,
              isLoading: false 
            });
            return { success: true };
          }
          throw new Error('Invalid credentials');
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: error.message };
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);