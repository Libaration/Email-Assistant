import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createSearchParams, Navigate, Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='flex items-center mt-6 ml-20 mr-5 dark'>
      <div className='relative'>
        <Input type='text' placeholder='Search by address' value={query} onChange={handleChange} />
      </div>
      <Button className='ml-4'>
        <Link to={`/search?query=${query}`} onClick={() => setQuery('')}>
          Search
        </Link>
      </Button>
    </div>
  );
}

export default Search;
