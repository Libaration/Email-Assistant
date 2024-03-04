import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./extendTheme";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { checkForUpdates } from "./lib/checkForUpdates";

checkForUpdates().then((data) => {
  const currentVersion = process.env.REACT_APP_VERSION;
  if (data.tag_name !== `v${currentVersion}`) {
    const downloadLink = data.html_url;
    const confirmUpdate = window.confirm(
      `There is a new version of Email Assistant available: ${data.tag_name}. 
      Do you want to download it?`
    );
    if (confirmUpdate) {
      window.open(downloadLink, "_blank");
    }
  }
});
ReactDOM.render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
