import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Auction from '../components/Auction';
import { searchAddress } from '../apiCalls.js';
import { v4 as uuidv4 } from 'uuid';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get('query') || '';
  useEffect(() => {
    if (query) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  const fetchResults = async () => {
    setResults([]);
    const response = await searchAddress(query);
    const uniqueLine1Values = Array.from(new Set(response.map((item) => item?.auction_location?.line_1)));
    const uniqueObjects = uniqueLine1Values.map((line1Value) => {
      const matchedObject = response.find((item) => item?.auction_location?.line_1 === line1Value);
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
        <h2 className='text-2xl font-bold'>{query && `"${query}"`}</h2>
      </div>

      <div className='flex justify-center flex-wrap mt-4'>
        <Suspense fallback='Loading...'>{results.length > 0 ? renderResults() : <div>No results found.</div>}</Suspense>
      </div>
    </MotionBox>
  );
}
