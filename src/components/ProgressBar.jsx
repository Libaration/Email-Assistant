import React from 'react';
import { useDownloadProgress } from '../hooks/useDownloadProgress';
export const ProgressBar = () => {
  const { progress, isDownloading } = useDownloadProgress();

  return (
    <>
      <div className="relative top-0 w-full h-1 z-50 bg-yellow-300 mb-18"></div>
      <div className="flex justify-center text-center">
        <span className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {progress}%
        </span>
      </div>
    </>
  );
};
