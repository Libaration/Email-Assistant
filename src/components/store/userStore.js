import { create } from "zustand";

export const useUserStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  setRefreshToken: (refreshToken) => set({ refreshToken }),
  logout: () => set({ user: null, accessToken: null }),
}));
