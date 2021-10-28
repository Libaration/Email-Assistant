import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

export default function Search(props) {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div>this is search page{props.query}</div>
    </MotionBox>
  );
}
