import { create } from 'zustand';

export const useUpdateStore = create((set) => ({
  updateAvailable: false,
  setUpdateAvailable: (updateAvailable) => set({ updateAvailable }),
  checkedForUpdate: false,
  toggleCheckedForUpdate: () => set((state) => ({ checkedForUpdate: !state.checkedForUpdate })),
  downloadProgress: 0,
  setDownloadProgress: (downloadProgress) => set({ downloadProgress }),
  isDownloading: false,
  setIsDownloading: (isDownloading) => set({ isDownloading }),
}));
