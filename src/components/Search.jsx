import React from 'react';
import { Flex, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

export default function Search() {
  return (
    <Flex w="100%" alignItems="center" mt={8} ml={5} mr={5} zIndex={1}>
      <InputGroup>
        <InputLeftElement pointerEvents="false" children={<BsSearch />} />
        <Input
          placeholder="Search by address"
          bg="gray.800"
          w="md"
          variant="filled"
        />
      </InputGroup>
    </Flex>
  );
}
