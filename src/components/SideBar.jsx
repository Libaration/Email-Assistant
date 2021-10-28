import React from 'react';
import { Image, Flex, List, ListItem, Box } from '@chakra-ui/react';
import home from '../assets/icons/home.png';
import email from '../assets/icons/email.png';
import settings from '../assets/icons/settings.png';
import logo from '../assets/icons/logo.png';
import { motion } from 'framer-motion';
export default function SideBar(props) {
  const MotionBox = motion(Box);
  const menuItem = (src) => {
    return (
      <MotionBox
        mt={5}
        mb={5}
        whileHover={{ scale: 1.2, filter: 'invert(1)', cursor: 'pointer' }}
        sx={{ filter: 'invert(80%)' }}
      >
        <Image src={src} />
      </MotionBox>
    );
  };
  return (
    <Flex
      minWidth="76px"
      maxWidth="76px"
      bg="#203d85"
      mr={2}
      h="100vh"
      borderRight="1px solid"
      borderColor="gray.800"
      flexDirection="column"
    >
      <Image src={logo} p={3} pr={1} />
      <List pl={5} pr={5} h="100%">
        <ListItem>{menuItem(home)}</ListItem>
        <ListItem>{menuItem(email)}</ListItem>
        <ListItem>{menuItem(settings)}</ListItem>
      </List>
    </Flex>
  );
}
