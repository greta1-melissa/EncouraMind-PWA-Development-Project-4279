import { create } from 'zustand';
import { persist } from 'zustand/middleware';

console.log('🏪 Creating theme store...');

const useThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () => set((state) => {
        console.log('🌙 Toggle theme:', !state.isDarkMode);
        return { isDarkMode: !state.isDarkMode };
      }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

export { useThemeStore };