import { motion } from 'framer-motion';
import React from 'react';
import sidebanner from '../assets/sidebanner.png';
import { useQuery } from '@apollo/client';
import { queries } from '../queries';
import { spectrumClient } from '../hooks/useApollo';

import './Home.style.css';

export default function Home() {
  const MotionBox = motion.div;
  const draggable = {
    WebkitAppRegion: 'no-drag',
  };
  const unDraggable = {
    WebkitAppRegion: 'no-drag',
  };

  // delete this when done testing
  const { data, loading, error } = useQuery(queries.GET_AUCTION_LOT, {
    variables: {
      auction_lot_id: '12224',
      is_view: true,
    },
    client: spectrumClient,
  });
  console.log(data, loading, error);

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      className='w-full overflow-hidden flex flex-wrap p-5'
    >
      <div className='flex grow justify-center mb-5 mt-8' style={draggable}>
        <img
          src='https://auctioneersoftware.s3.amazonaws.com/ash/2020/4/TFh9VK50QCogGjSh4m7RCVCJ.png'
          className='w-[150px] object-contain drop-shadow-[1px_1px_50px_rgba(240,232,0,1)] z-50'
          alt='logo'
        />
      </div>
      <div className='flex basis-full h-0' style={draggable} />
      <div className='flex-1'>
        <h1 className='font-extrabold text-[38px] bg-gradient-to-r from-[#6a90b8] to-[#ffffff] bg-clip-text text-transparent'>
          Welcome.
        </h1>
        <p className='pt-5' style={unDraggable}>
          This is a collection of tools for Ashland Auction Group. It is a work in progress and will be updated as
          needed.
        </p>
      </div>
      <MotionBox
        className='h-full pb-5'
        whileHover={{
          x: -300,
          transition: { duration: 1 },
        }}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          left: '450px',
          ...draggable,
        }}
      >
        <img
          src={sidebanner}
          className='object-cover h-[800px] m-[-180px] drop-shadow-[1px_1px_50px_rgba(32,61,133,0.1)]'
          alt='sidebanner'
        />
      </MotionBox>
    </MotionBox>
  );
}
