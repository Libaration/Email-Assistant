import { Flex, Box } from '@chakra-ui/react';
import SideBar from './components/SideBar.jsx';
import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Email from './pages/Email.jsx';
import Settings from './pages/Settings.jsx';
import Search from './components/Search.jsx';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  const [page, setPage] = useState();
  return (
    <>
      <Flex w="100%" h="35px" sx={{ '-webkit-app-region': 'drag' }}>
        <Box
          bg="#203d85"
          minWidth="76px"
          maxWidth="76px"
          borderRight="1px solid"
          borderColor="gray.800"
        />
        <Search />
      </Flex>
      {/*there's probably a better way to the above. i hope when i come back to this i'll have found it out*/}
      <Flex w="100%">
        <SideBar setPage={setPage} />
        <Flex ml={6} mr={5} mt={8} w="100%">
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
