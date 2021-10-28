import React from 'react';
import { Flex, Box, Heading, Image } from '@chakra-ui/react';

export default function Auction(props) {
  return (
    <Flex
      p={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="s" p={2}>
        {props.title}
      </Heading>
      <Image src={props.image} w="380px" height="380px" objectFit="cover" />
    </Flex>
  );
}
