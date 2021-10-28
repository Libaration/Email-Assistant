import React, { useState, useEffect } from 'react';
import {
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
export default function Search(props) {
  const [query, setQuery] = useState();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Flex alignItems="center" mt={8} ml={5} mr={5} zIndex={1}>
      <InputGroup>
        <InputLeftElement pointerEvents="false" children={<BsSearch />} />
        <Input
          placeholder="Search by address"
          bg="gray.800"
          w="md"
          variant="filled"
          value={query}
          onChange={handleChange}
        />
      </InputGroup>
      <Button
        onClick={() => {
          props.setSearch(query);
        }}
      >
        Search
      </Button>
    </Flex>
  );
}
