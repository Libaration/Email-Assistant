import React from 'react';
import { Flex, Box, Heading, Image, Link } from '@chakra-ui/react';

export default function Auction(props) {
  return (
    <Flex
      p={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Link
        href={`https://www.ashlandauction.com/auctions/${props.auction_id}`}
      > */}
      <Heading size="s" p={2}>
        {props.title}
      </Heading>
      <Image src={props.image} w="370px" height="380px" objectFit="cover" />
      {/* </Link> */}
    </Flex>
  );
}
