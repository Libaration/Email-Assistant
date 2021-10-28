import React from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Flex } from '@chakra-ui/react';
import sidebanner from '../assets/sidebanner.jpg';
export default function Home() {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
    >
      <Flex justify="center">
        <Image src="https://auctioneersoftware.s3.amazonaws.com/ash/2020/4/TFh9VK50QCogGjSh4m7RCVCJ.png" />
      </Flex>

      <Flex>
        <Box flex={1}>123</Box>
        <Flex flex={1} justifyContent="center" alignItems="center">
          <Image
            src={sidebanner}
            borderRadius="50%"
            objectFit="cover"
            width="300px"
            height="300px"
          />
        </Flex>
      </Flex>
    </MotionBox>
  );
}
