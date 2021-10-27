import logo from './logo.svg';
import { Flex, Box } from '@chakra-ui/react';
import SideBar from './components/SideBar.jsx';
function App() {
  return (
    <>
      <Box w="100vw" h="35px" sx={{ '-webkit-app-region': 'drag' }}>
        <Box h="100%" bg="#203d85" w="75px" />
      </Box>
      {/*there's probably a better way to the above. i hope when i come back to this i'll have found it out*/}
      <Flex>
        <SideBar />
        <Box w="100%" h="100%">
          CONTENT
        </Box>
      </Flex>
    </>
  );
}

export default App;
