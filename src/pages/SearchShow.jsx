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
    props.setSearching(false);
  };
  const renderResults = () => {
    return results.map((home) => {
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
      w='100%'
    >
      <div className='flex text-center justify-center mt-6'>
        <Heading>
          {props.query}
          {props.isSearching}
        </Heading>
      </div>

      <Flex wrap='wrap' justify='center'>
        {props.isSearching ? (
          <Flex justifyContent='center' alignItems='center' w='100%'>
            <Spinner color='yellow.500' size='xl' />
          </Flex>
        ) : (
          renderResults()
        )}
      </Flex>
    </MotionBox>
  );
}
