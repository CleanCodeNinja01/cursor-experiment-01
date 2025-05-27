import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useStore = create<ThemeState>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
