import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, List, ListItem, Spinner, Flex, Heading } from '@chakra-ui/react';
import { searchAddress } from '../apiCalls.js';
import { v4 as uuidv4 } from 'uuid';
import Auction from '../components/Auction';
export default function Search(props) {
  const [results, setResults] = useState([]);
  const fetchResults = async () => {
    setResults([]);
    const response = await searchAddress(props.query);
    setResults(await response);
  };
  const renderResults = () => {
    return results.map((home) => {
      console.log(home.preview);
      return (
        <Auction
          key={uuidv4()}
          title={home.title}
          auction_id={home.auction_id}
          image={home.highlights[0].cached_assets[0].url}
          preview={home.preview}
        />
      );
    });
  };
  useEffect(() => {
    if (props.query) {
      fetchResults();
    }
  }, [props.query]);
  const MotionBox = motion(Box);
  return (
    <MotionBox
      pl={5}
      pr={5}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
    >
      <Flex textAlign="center" justifyContent="center">
        <Heading>{props.query}</Heading>
      </Flex>
      <Flex wrap="wrap">
        {results.length > 0 ? renderResults() : <Spinner />}
      </Flex>
    </MotionBox>
  );
}
