import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

  const MotionBox = motion.div;

  return (
    <MotionBox
      className='pl-5 pr-5 w-full'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex justify-center mt-6'>
        <h2 className='text-lg'>
          {props.query}
          {props.isSearching}
        </h2>
      </div>

      <div className='flex justify-center flex-wrap'>
        {props.isSearching ? (
          <div className='flex justify-center items-center w-full'>
            ...Loading
          </div>
        ) : (
          renderResults()
        )}
      </div>
    </MotionBox>
  );
}
