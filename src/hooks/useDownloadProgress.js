import { useEffect } from 'react';
import { useUpdateStore } from '../components/store/updateStore';
export const useDownloadProgress = () => {
  useEffect(() => {
    const handleDownloadProgress = (event, progress) => {
      useUpdateStore.getState().setDownloadProgress(progress.percent * 100);
    };
    if (window.electronAPI) {
      const removeListener = window.electronAPI.downloadProgress(
        handleDownloadProgress
      );
      return () => {
        removeListener();
      };
    }
  }, []);
  const progress = useUpdateStore((state) => state.downloadProgress);
  const isDownloading = progress > 0 && progress < 100;
  return { progress, isDownloading };
};
