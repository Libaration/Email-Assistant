import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Button } from '@chakra-ui/react';

export default function Email() {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
    >
      <Flex mr={8} ml={8} justifyContent="center">
        <Button size="lg" colorScheme="yellow">
          Generate HTML
        </Button>
      </Flex>
    </MotionBox>
  );
}
