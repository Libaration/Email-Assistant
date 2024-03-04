import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSalesforce } from "../hooks/useSalesforce";

export default function Reschedule() {

  const MotionBox = motion(Box);
  const { url, isLoggedIn } = useSalesforce();
  console.log(url);
  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
    >
      {isLoggedIn ? (
        <Flex>
          <Button onClick={() => { }}>Reschedule</Button>
        </Flex>
      ) : (
        <Flex>
          <Button onClick={() => {
            window.electronAPI.send('oauthRedirect', { url });
          }}>Login to Salesforce to Continue</Button>
        </Flex>
      )}

    </MotionBox>
  );
}
