import { Flex, Box } from '@chakra-ui/react';
import SideBar from './components/SideBar.jsx';
import { useState } from 'react';
function App() {
  const [page, setPage] = useState();
  return (
    <>
      <Box w="100vw" h="35px" sx={{ '-webkit-app-region': 'drag' }}>
        <Box
          h="100%"
          bg="#203d85"
          w="76px"
          borderRight="1px solid"
          borderColor="gray.800"
        />
      </Box>
      {/*there's probably a better way to the above. i hope when i come back to this i'll have found it out*/}
      <Flex>
        <SideBar setPage={setPage} />
        <Box w="100%" h="100%" pl={5}>
          CONTENT
        </Box>
      </Flex>
    </>
  );
}

export default App;
