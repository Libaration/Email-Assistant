import React, { useState } from 'react';
import {
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { withRouter } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
function Search(props) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const submitSearch = () => {
    if (query === '' || !query.trim()) {
      setQuery('');
      window.ipcRenderer.send('show-dialog', {
        msg: 'Address can not be blank',
      });
    } else {
      props.setSearch(query);
      setQuery('');
      if (props.history.location.pathname !== '/search') {
        props.history.push('/search');
      }
    }
  };
  return (
    <Flex alignItems="center" mt={8} ml={28} mr={5} zIndex={1}>
      <InputGroup>
        <InputLeftElement pointerEvents="false" children={<BsSearch />} />
        <Input
          placeholder="Search by address"
          bg="gray.800"
          w="md"
          variant="filled"
          value={query}
          onChange={handleChange}
          sx={{ '-webkit-app-region': 'no-drag' }}
        />
      </InputGroup>
      <Button onClick={submitSearch}>Search</Button>
    </Flex>
  );
}
export default withRouter(Search);
