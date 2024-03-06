import React from 'react';
import { Flex, Progress } from '@chakra-ui/react';

export const ProgressBar = () => {
  return (
    <Flex>
      <h1>ProgressBar</h1>
      <Progress colorScheme="green" height="32px" hasStripe value={50} />
    </Flex>
  );
};
