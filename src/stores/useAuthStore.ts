import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    token: null,
    setToken: (token) =>
      set({
        token,
      }),
  })),
);

export default useAuthStore;
