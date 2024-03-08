import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png';
import calendar from '../assets/icons/calendar.png';
import email from '../assets/icons/email.png';
import home from '../assets/icons/home.png';
import search from '../assets/icons/search.png';
import settings from '../assets/icons/settings.png';
import { useDownloadProgress } from '../hooks/useDownloadProgress';

export default function SideBar() {
  const { progress, isDownloading } = useDownloadProgress();
  const MotionBox = motion.div;

  const menuItem = (src) => {
    return (
      <MotionBox
        mt={5}
        mb={8}
        ml={1}
        whileHover={{ scale: 1.2, cursor: 'pointer' }}
      >
        <img
          src={src}
          alt="menu-item"
          className="invert-[.80] hover:invert size-16 object-scale-down"
        />
      </MotionBox>
    );
  };

  return (
    <div
      className={`max-w-[72px] min-w[72px] bg-brand border-r-1 border-gray-800 flex flex-col fixed z-10 h-screen ${
        isDownloading ? 'grayscale' : ''
      }`}
      style={{ pointerEvents: isDownloading ? 'none' : 'auto' }}
    >
      <img src={logo} alt="logo" className="p-3 pr-1" />
      <ul className="pl-5 pr-5 h-full">
        <li>
          <Link to="/" disabled={isDownloading}>
            {menuItem(home)}
          </Link>
        </li>
        <li>
          <Link to="/email" disabled={isDownloading}>
            {menuItem(email)}
          </Link>
        </li>
        <li>
          <Link to="/reschedule" disabled={isDownloading}>
            {menuItem(calendar)}
          </Link>
        </li>
        <li>
          <Link to="/search" disabled={isDownloading}>
            {menuItem(search)}
          </Link>
        </li>
        <li>
          <Link to="/settings" disabled={isDownloading}>
            {menuItem(settings)}
          </Link>
        </li>
      </ul>
    </div>
  );
}
