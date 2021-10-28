import React, { useRef } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorMode,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { store } from 'react-notifications-component';

export default function Settings() {
  const { toggleColorMode } = useColorMode();
  const MotionBox = motion(Box);
  const numberRef = useRef();
  const handleSave = () => {
    localStorage.setItem('maxAuctions', numberRef.current.value);
    store.addNotification({
      title: 'Success',
      message: 'Settings succesfully saved to localStorage',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };
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
      <Flex ml={8} mr={8} mt={8}>
        <NumberInput
          defaultValue={parseInt(localStorage.getItem('maxAuctions')) || 10}
          min={1}
          max={50}
          size="sm"
        >
          <NumberInputField ref={numberRef} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text mt={2} ml={5} fontSize="sm">
          Loops per HTML generation
        </Text>
      </Flex>
      <Flex
        flex={1}
        justifyContent="right"
        position="relative"
        pt="34em"
        mr={5}
      >
        <Button colorScheme="blue" size="lg" onClick={handleSave}>
          Save
        </Button>
      </Flex>
    </MotionBox>
  );
}
