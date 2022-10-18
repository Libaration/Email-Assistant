import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Box, Flex, Button, Textarea } from "@chakra-ui/react";
import * as api from "../apiCalls.js";
import { renderToStaticMarkup } from "react-dom/server";
import {
  homeToHTML,
  beginningHTML,
  endingHTML,
} from "../components/HTMLConvert";
import { store } from "react-notifications-component";
import Newsletter from "../components/Newsletter/Newsletter.jsx";
import { HeaderLogo } from "../components/Newsletter/HeaderLogo.jsx";
import { HeaderNav } from "../components/Newsletter/HeaderNav.jsx";
import { UpcomingRow } from "../components/Newsletter/UpcomingRow.jsx";
import DateSection from "../components/Newsletter/DateSection.jsx";
import NewsletterAuction from "../components/Newsletter/NewsletterAuction.jsx";
import { Footer } from "../components/Newsletter/Footer.jsx";
export default function Email() {
  const textareaRef = useRef();
  const [html, setHTML] = useState("");
  const MotionBox = motion(Box);
  const renderRecent = async () => {
    setHTML("");
    const response = await api.fetchRecent();
    let homeHTML;
    await response.map((home) => {
      const { image_tag, end_time, title, auction_id } = home;
      const winning_bid = home.lots.lots[0].winning_bid_amount;
      const starting_bid = home.lots.lots[0].starting_bid;
      const deposit = home.lots.lots[0].dynamic_fields.find(
        (field) => field.dynamic_field_id === "661"
      ).data.value;
      const image = home.highlights[0].cached_assets[0].url;
      const { auction_lot_id } = home.lots.lots[0];
      const url = `https://www.ashlandauction.com/auctions/${auction_id}/lot/${auction_lot_id}`;
      homeHTML = `${homeHTML || ""} ${homeToHTML({
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
    document.execCommand("copy");
    store.addNotification({
      title: "Success",
      message: "HTML has been successfully copied to your clipboard",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  const renderNewsletter = async () => {
    setHTML("");
    const response = await api.fetchNewsletter();
    let dateWithAuctions;
    for (const [key, value] of Object.entries(response)) {
      dateWithAuctions = `${dateWithAuctions || ""} ${DateSection(key)}`;
      const homes = value.map((home, index) => {
        home.index = index;
        return NewsletterAuction(home);
      });
      dateWithAuctions = `${dateWithAuctions || ""} ${homes.join("")}`;
    }

    const newsLetterLayout = () => (
      <Newsletter>
        <div dangerouslySetInnerHTML={{ __html: HeaderLogo }} />
        <div dangerouslySetInnerHTML={{ __html: HeaderNav }} />
        <div dangerouslySetInnerHTML={{ __html: UpcomingRow }} />
        <div dangerouslySetInnerHTML={{ __html: dateWithAuctions }} />
        <div dangerouslySetInnerHTML={{ __html: Footer }} />
      </Newsletter>
    );
    setHTML("");
    setHTML(renderToStaticMarkup(newsLetterLayout()));
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

        <Button
          size="lg"
          colorScheme="yellow"
          onClick={renderNewsletter}
          mt={5}
        >
          Generate Newsletter
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
        resize={"none"}
        sx={{
          border: "none;",
          overflow: "auto;",
          outline: "none;",

          "-webkit-box-shadow": "none;",
          "-moz-box-shadow": "none;",
          "box-shadow": "none;",

          resize: "none;",
        }}
      />
    </MotionBox>
  );
}
