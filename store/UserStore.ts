import { create } from "zustand";

interface UserState {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  accessToken: undefined,
  refreshToken: undefined,
  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
  clearTokens: () => set({ accessToken: undefined, refreshToken: undefined }),
}));
