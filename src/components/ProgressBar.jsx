import React from 'react';
import { useDownloadProgress } from '../hooks/useDownloadProgress';
import { useUpdateStore } from '../components/store/updateStore';
export const ProgressBar = () => {
  const { progress, isDownloading } = useDownloadProgress();

  return (
    <div className="fixed top-0 w-full z-50">
      <span className="text-sm text-center">{progress}</span>
      <div
        className={`h-1 bg-brand w-full ${isDownloading ? 'block' : 'hidden'}`}
        id="progress-bar"
      ></div>
      <div className="h-1 bg-gray-300 w-full" id="progress-bar"></div>

      <h1 className="text-3xl">DOWNLOAD</h1>
      <div className="h-1 bg-brand w-0" id="progress-bar"></div>
    </div>
  );
};
