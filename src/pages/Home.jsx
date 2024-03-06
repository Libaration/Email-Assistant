import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import sidebanner from '../assets/sidebanner.png';
export default function Home() {
  const MotionBox = motion(Box);
  const draggable = {
    WebkitAppRegion: 'drag',
  };
  const unDraggable = {
    WebkitAppRegion: 'no-drag',
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
      overflow="hidden"
      display="flex"
      flexWrap="wrap"
      p={5}
    >
      <Flex grow={1} justifyContent="center" mb={5} style={draggable}>
        <Image
          src="https://auctioneersoftware.s3.amazonaws.com/ash/2020/4/TFh9VK50QCogGjSh4m7RCVCJ.png"
          w="150px"
          objectFit="contain"
          sx={{
            filter: 'drop-shadow(1px 1px 50px rgba(240, 232, 0, 1));',
          }}
        />
      </Flex>
      <Flex sx={{ 'flex-basis': '100%', height: '0px' }} style={draggable} />
      <Box flex={1}>
        <Heading>Welcome.</Heading>
        <Text pt={5} fontSize="sm" style={unDraggable}>
          This is a collection of tools for Ashland Auction Group. It is a work
          in progress and will be updated as needed.
        </Text>
      </Box>
      <MotionBox
        height="100%"
        whileHover={{
          x: -300,
          transition: { duration: 1 },
        }}
        d="flex"
        flex={1}
        justifyContent="center"
        alignItems="center"
        position="relative"
        left="500px"
        style={draggable}
      >
        <Image
          src={sidebanner}
          objectFit="cover"
          height="800px"
          m={-180}
          sx={{
            filter: 'drop-shadow(1px 1px 50px rgba(32, 61, 133, 0.1));',
          }}
        />
      </MotionBox>
    </MotionBox>
  );
}
