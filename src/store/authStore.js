import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import supabase from '../lib/supabase'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials) => {
        set({ isLoading: true })
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          })

          if (error) throw error

          const { data: profile } = await supabase
            .from('profiles_enc01')
            .select('*')
            .eq('id', data.user.id)
            .single()

          const userData = {
            id: data.user.id,
            email: data.user.email,
            name: profile?.name || data.user.email.split('@')[0],
            role: profile?.role || 'user',
            bio: profile?.bio || ''
          }

          set({ user: userData, isAuthenticated: true, isLoading: false })
          return { success: true }
        } catch (error) {
          set({ isLoading: false })
          return { success: false, error: error.message }
        }
      },

      register: async (userData) => {
        set({ isLoading: true })
        try {
          const { data, error } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password,
          })

          if (error) throw error

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
              ])

            if (profileError) throw profileError
          }

          set({ 
            user: {
              id: data.user.id,
              name: userData.name,
              email: userData.email,
              role: 'user'
            }, 
            isAuthenticated: true, 
            isLoading: false 
          })
          return { success: true }
        } catch (error) {
          set({ isLoading: false })
          return { success: false, error: error.message }
        }
      },

      logout: async () => {
        await supabase.auth.signOut()
        set({ user: null, isAuthenticated: false })
      },

      checkSession: async () => {
        try {
          const { data: { session }, error } = await supabase.auth.getSession()
          
          if (error || !session) {
            return { success: false }
          }

          const { data: profile } = await supabase
            .from('profiles_enc01')
            .select('*')
            .eq('id', session.user.id)
            .single()

          const userData = {
            id: session.user.id,
            email: session.user.email,
            name: profile?.name || session.user.email.split('@')[0],
            role: profile?.role || 'user',
            bio: profile?.bio || ''
          }

          set({ user: userData, isAuthenticated: true })
          return { success: true }
        } catch (error) {
          return { success: false, error: error.message }
        }
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)