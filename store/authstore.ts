import { create } from "zustand";

interface AuthState {
  user: any | null;
  setAuth: (params: { user: any }) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setAuth: ({ user }) => set({ user }),
  clearAuth: () => set({ user: null }),
}));

export default useAuthStore;
