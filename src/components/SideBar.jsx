import React from 'react';
import { Image, Flex, List, ListItem, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
        mb={8}
        ml={1}
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
      borderRight="1px solid"
      borderColor="gray.800"
      flexDirection="column"
      zIndex={1}
      position="fixed"
      sx={{ height: 'calc(100vh - (35px))' }}
    >
      <Image src={logo} p={3} pr={1} />
      <List pl={5} pr={5} h="100%">
        <ListItem>
          <Link to="/">{menuItem(home)}</Link>
        </ListItem>
        <ListItem>
          <Link to="/email">{menuItem(email)}</Link>
        </ListItem>
        <ListItem>
          <Link to="settings">{menuItem(settings)}</Link>
        </ListItem>
      </List>
    </Flex>
  );
}
