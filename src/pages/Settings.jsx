import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Settings() {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div>this is settings page</div>
    </MotionBox>
  );
}
