import { Box, Text, Flex, Button, useColorModeValue, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSalesforce } from "../hooks/useSalesforce";
import salesforce from "../assets/icons/salesforce.svg";
import { useCallback } from 'react';

export default function Reschedule() {
  const outlined = useColorModeValue("solid", "outline");
  const MotionBox = motion(Box);
  const { url, isLoggedIn } = useSalesforce();
  const handleClick = useCallback(() => {
    window.electronAPI.oauthRedirect(url);
  }, [url]);
  const loginToSalesforce = () => {
    return (
      <Flex m={8} justify={"center"} wrap={"wrap"} h={"100%"}>
        <Flex w={"100%"} justify={"center"}>
          <MotionBox
            height="100%"
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={salesforce} w={300} h={300}
              onClick={handleClick}
            />
          </MotionBox>
        </Flex>
        <Flex w={"100%"} justify={"center"} mt="8"><Text>
          This feature requires you to be logged into Salesforce. Your login will be used to authenticate and retrieve data from Salesforce.
        </Text>
        </Flex>
        <Flex w={"100%"} justify={"center"}><Button colorScheme="yellow" size="lg" variant={outlined} onClick={handleClick}>Login to Salesforce to Continue</Button>
        </Flex>
        <Button onClick={() => window.electronAPI.kioskMode()}>KIOSK</Button>
      </Flex >
    )
  };
  const mainContent = () => {
    return (
      <Flex>
        <Text>Logged in</Text>
      </Flex>
    )
  }
  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
    >
      {isLoggedIn ? (mainContent()) : (loginToSalesforce())}

    </MotionBox>
  );
}
