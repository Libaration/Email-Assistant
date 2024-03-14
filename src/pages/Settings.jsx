import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Settings() {
  const MotionBox = motion.div;
  const numberRef = useRef();
  const maxDaysRef = useRef();

  const handleSave = () => {
    localStorage.setItem('maxAuctions', numberRef.current.value);
    localStorage.setItem('maxDays', maxDaysRef.current.value);
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      className='w-full'
    >
      <div className='flex ml-8 mr-8 mt-8'>
        <Input
          type='number'
          defaultValue={Number.parseInt(localStorage.getItem('maxAuctions')) || 10}
          min={1}
          max={50}
          className='w-16 h-10 border rounded-md p-2 mr-2'
          ref={numberRef}
        />
        <p className='mt-2 ml-5 text-sm'>Auctions per Email template generation</p>
      </div>
      <div className='flex ml-8 mr-8 mt-8'>
        <Input
          type='number'
          defaultValue={Number.parseInt(localStorage.getItem('maxDays')) || 3}
          min={1}
          max={50}
          className='w-16 h-10 border rounded-md p-2 mr-2'
          ref={maxDaysRef}
        />
        <p className='mt-2 ml-5 text-sm'>Newsletter range (days) excluding today (Today will always be included)</p>
      </div>

      <div className='flex flex-1 justify-end relative mr-5'>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </MotionBox>
  );
}
