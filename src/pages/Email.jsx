import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Button, Textarea } from '@chakra-ui/react';
import { fetchRecent } from '../apiCalls.js';
import {
  homeToHTML,
  beginningHTML,
  endingHTML,
} from '../components/HTMLConvert';

export default function Email() {
  const textareaRef = useRef();
  const [auctions, setAuctions] = useState();
  const [html, setHTML] = useState('');
  const MotionBox = motion(Box);
  const renderRecent = async () => {
    await setHTML('');
    const response = await fetchRecent();
    let homeHTML;
    await response.map((home) => {
      const { image_tag, end_time, title, auction_id } = home;
      const winning_bid = home.lots.lots[0].winning_bid_amount;
      const starting_bid = home.lots.lots[0].starting_bid;
      const deposit = home.lots.lots[0].dynamic_fields.find(
        (field) => field.dynamic_field_id === '661'
      ).data.value;
      const image = home.highlights[0].cached_assets[0].url;
      const { auction_lot_id } = home.lots.lots[0];
      const url = `https://www.ashlandauction.com/auctions/${auction_id}/lot/${auction_lot_id}`;
      homeHTML = `${homeHTML || ''} ${homeToHTML({
        image_tag,
        end_time,
        title,
        auction_id,
        winning_bid,
        starting_bid,
        deposit,
        image,
        url,
      })}`;
    });
    setHTML(`${beginningHTML}${homeHTML}${endingHTML}`);
    textareaRef.current.select();
    document.execCommand('copy');
  };
  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      w="100%"
    >
      <Flex mr={8} ml={8} justifyContent="center" flexDirection="column">
        <Button size="lg" colorScheme="yellow" onClick={renderRecent}>
          Generate HTML
        </Button>
        <Flex
          flexDirection="column"
          dangerouslySetInnerHTML={{ __html: `${html}` }}
        />
      </Flex>
      <Textarea
        ref={textareaRef}
        value={html}
        display="hidden"
        w="1px"
        h="1px"
        resize={'none'}
      />
    </MotionBox>
  );
}
