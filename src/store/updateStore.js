const { create } = require('zustand');

const useUpdateStore = create((set) => ({
  updateAvailable: false,
  setUpdateAvailable: (updateAvailable) => set({ updateAvailable }),
  checkedForUpdate: false,
  toggleCheckedForUpdate: () =>
    set((state) => ({ checkedForUpdate: !state.checkedForUpdate })),
  downloadProgress: 0,
  setDownloadProgress: (downloadProgress) => set({ downloadProgress }),
  isDownloading: false,
  setIsDownloading: (isDownloading) => set({ isDownloading }),
}));

module.exports = { useUpdateStore };

//********************************************************************************/
//* I understand it might look stuoid to randomly switch from es6 imports to
//* commonjs require here, but, this is the only way I could get the code to import
//* within the electron main.js file. Luckily, it seems to work just fine.
//* It just looks a little weird.
//********************************************************************************/
