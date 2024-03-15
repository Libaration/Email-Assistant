import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { searchAddress } from '../apiCalls.js';
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'react-router-dom';
import Auction from '../components/Auction';

export default function Search() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get('query') || '';
  console.log('query is ', query);

 const fetchResults = async () => {
  setResults([]);
  const response = await searchAddress(query);
  console.log('response is ', response);
  const uniqueLine1Values = Array.from(new Set(response.map(item => item?.auction_location?.line_1)));
  const uniqueObjects = uniqueLine1Values.map(line1Value => {
    const matchedObject = response.find(item => item?.auction_location?.line_1 === line1Value);
    return matchedObject;
  });

  setResults(uniqueObjects);
};

  const renderResults = () => {
    return results.map((home) => {
      return (
        <Auction
          key={uuidv4()}
          title={home.title}
          auction_id={home.auction_id}
          image={home.highlights[0].cached_assets[0].url}
          preview={home.preview_plain}
        />
      );
    });
  };

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query]);

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
        <h2 className='text-lg'>{query}</h2>
      </div>

      <div className='flex justify-center flex-wrap'>{renderResults()}</div>
    </MotionBox>
  );
}
