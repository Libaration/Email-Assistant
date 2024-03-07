import { useEffect } from 'react';
import { useUpdateStore } from '../components/store/updateStore';

export const useDownloadProgress = () => {
  const updateStore = useUpdateStore();

  useEffect(() => {
    const handleDownloadProgress = (event, progress) => {
      updateStore.setDownloadProgress(progress * 100);
    };

    if (window.electronAPI) {
      const removeListener = window.electronAPI.downloadProgress(
        handleDownloadProgress
      );
      return () => {
        removeListener();
      };
    }
  }, [updateStore]);

  const progress = useUpdateStore((state) => state.downloadProgress);
  const isDownloading = progress > 0 && progress < 100;
  return { progress, isDownloading };
};
