import { motion } from 'framer-motion';
import React from 'react';
import logo from '../assets/icons/logo.png';
import { useDownloadProgress } from '../hooks/useDownloadProgress';
export const ProgressBar = () => {
  const { progress, isDownloading } = useDownloadProgress();

  return (
    <>
      <div className='relative top-0 w-full h-1 z-50 bg-yellow-300 mb-18'></div>
      <div className='flex flex-col items-center justify-center pt-5 pb-5'>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: [0, 360] }}
            exit={{ scale: 0, rotate: 0 }}
            transition={{ duration: 2, ease: 'linear', yoyo: Infinity }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              transformOrigin: 'center center',
            }}
          >
            <img src={logo} alt='logo' className='w-16 h-auto' />
          </motion.div>
        </motion.div>
      </div>
      <div className='flex justify-center text-center'>
        <span className='text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          {progress}%
        </span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-lg font-bold text-gray-900 dark:text-white'>{isDownloading && 'Downloading...'}</p>
      </div>
    </>
  );
};
