import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as api from "../apiCalls.js";
import { renderToStaticMarkup } from "react-dom/server";
import {
  homeToHTML,
  beginningHTML,
  endingHTML,
} from "../components/HTMLConvert";
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
  const MotionBox = motion.div;

  const copyToClipboard = () => {
    textareaRef.current.select();
    navigator.clipboard
      .writeText(html)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard", error);
      });
  };

  const renderRecent = async () => {
    setHTML("");
    const response = await api.fetchRecent();
    let homeHTML;
    await response.map((home) => {
      const { image_tag, end_time, title, auction_id } = home;
      const winning_bid = home.lots.lots[0].winning_bid_amount;
      const starting_bid = home.lots.lots[0].starting_bid;
      const deposit = home.lots.lots[0].dynamic_fields.find(
        (field) => field.dynamic_field_id === "661",
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
    copyToClipboard();
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

    setHTML(renderToStaticMarkup(newsLetterLayout()));
    copyToClipboard();
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full mt-4">
          <Button onClick={renderRecent}>Generate HTML</Button>
        </div>
        <div className="w-full mt-4">
          <Button onClick={renderNewsletter}>Generate Newsletter</Button>
        </div>
        <div
          className="flex flex-col w-auto"
          style={{ WebkitAppRegion: "no-drag" }}
          dangerouslySetInnerHTML={{ __html: `${html}` }}
        />
      </div>

      <input
        type="text"
        ref={textareaRef}
        value={html}
        style={{
          display: "none",
          width: "1px",
          height: "1px",
          border: "none",
          overflow: "auto",
          outline: "none",
          WebkitBoxShadow: "none",
          MozBoxShadow: "none",
          boxShadow: "none",
          resize: "none",
        }}
      />
    </MotionBox>
  );
}
