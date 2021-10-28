import {
  Flex,
  Box,
  InputLeftElement,
  InputGroup,
  Input,
} from '@chakra-ui/react';
import SideBar from './components/SideBar.jsx';
import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Email from './pages/Email.jsx';
import Settings from './pages/Settings.jsx';
import { BsSearch } from 'react-icons/bs';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  const [page, setPage] = useState();
  return (
    <>
      <Flex w="100%" h="35px" sx={{ '-webkit-app-region': 'drag' }}>
        <Box
          h="100%"
          bg="#203d85"
          minWidth="76px"
          maxWidth="76px"
          borderRight="1px solid"
          borderColor="gray.800"
        />
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
      </Flex>
      {/*there's probably a better way to the above. i hope when i come back to this i'll have found it out*/}
      <Flex w="100%" h="100%">
        <SideBar setPage={setPage} />
        <Flex ml={6} mr={5} mt={8}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/email">
                <Email />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
