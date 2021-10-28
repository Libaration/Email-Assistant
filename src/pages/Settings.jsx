import React from 'react';
import { Box, Flex, Button, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Settings() {
  const { toggleColorMode } = useColorMode();
  const MotionBox = motion(Box);
  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
    >
      <Flex mr={8} ml={8}>
        <Button size="lg" colorScheme="yellow" onClick={toggleColorMode}>
          Toggle Dark Mode
        </Button>
      </Flex>
    </MotionBox>
  );
}
