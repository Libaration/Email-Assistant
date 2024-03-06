import { Flex, Box } from '@chakra-ui/react';
import SideBar from './components/SideBar.jsx';
import { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Email from './pages/Email.jsx';
import Settings from './pages/Settings.jsx';
import Search from './components/Search.jsx';
import SearchShow from './pages/SearchShow';
import Reschedule from './pages/Reschedule';
import { AnimatePresence } from 'framer-motion';
import { ReactNotifications } from 'react-notifications-component';
import useKeySequence from './hooks/useKeySequence';
import 'react-notifications-component/dist/theme.css';

function App() {
  useKeySequence();
  const location = useLocation();
  const [page, setPage] = useState();
  const [search, setSearch] = useState('');
  const [isSearching, setSearching] = useState(false);

  return (
    <>
      <ReactNotifications />
      <Flex h="35px" sx={{ '-webkit-app-region': 'drag' }}>
        <Box
          bg="#203d85"
          minWidth="76px"
          maxWidth="76px"
          borderRight="1px solid"
          borderColor="gray.800"
          position="fixed"
          paddingBottom="35px"
        />
        <Search setSearch={setSearch} setSearching={setSearching} />
      </Flex>
      {/*there's probably a better way to the above. i hope when i come back to this i'll have found it out*/}
      {/* UPDATE: what was i even meaning by this? */}
      <Flex>
        <SideBar setPage={setPage} />
        <Flex flex={1} ml="76px" mt={10}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/email">
                <Email />
              </Route>
              <Route path="/reschedule">
                <Reschedule />
              </Route>
              <Route path="/search">
                <SearchShow
                  query={search}
                  isSearching={isSearching}
                  setSearching={setSearching}
                />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route exact path="/">
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
