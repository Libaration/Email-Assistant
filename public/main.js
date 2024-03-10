const {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  session,
  shell,
} = require("electron");
const path = require("path");
const { download } = require("electron-dl");
const isDev = require("electron-is-dev");
const url = require("url");
let win;
let auth;
let progressWindow;
const useTest = false;
const apiBase = useTest
  ? "https://ashlandauction--test.sandbox.my.salesforce.com"
  : "https://ashlandauction.my.salesforce.com";

const createWindow = async () => {
  win = new BrowserWindow({
    kiosk: false,
    width: 1350,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextBridge: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    backgroundColor: "#171923",
    show: false,
    titleBarStyle: "hiddenInset",
    minWidth: 1200,
    title: "Email Assistant - Ashland Auction",
  });
  auth = new BrowserWindow({
    backgroundThrottling: true,
    modal: true,
    parent: win,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextBridge: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    backgroundColor: "#171923",
    show: false,
    titleBarStyle: "hiddenInset",
    minWidth: 800,
    minimizable: false,
    maximizable: false,
    resizable: false,
    closable: false,

    title: "Email Assistant - Ashland Auction",
  });

  progressWindow = new BrowserWindow({
    frame: false,
    width: 300,
    height: 200,
    alwaysOnTop: true,
    visualEffectState: "followWindow",
    titlebarStyle: "hidden",
    show: false,
    fullscreenable: false,
    isMovable: false,
    closable: false,
    resizable: false,
    customButtonsOnHover: true,
    vibrancy: "hud",
    transparent: true,
    opacity: 0.8,
    webPreferences: {
      nodeIntegration: true,
      contextBridge: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    const url = new URL(
      `file://${path.join(__dirname, "../build/index.html")}`,
    );
    win.loadURL(url.toString());
  }

  win.once("ready-to-show", () => {
    win.show();
  });
};

app.on("window-all-closed", () => app.quit());

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.whenReady().then(() => {
  //* This is because CORS is enabled on the Salesforce API and we need to bypass it in development.
  //* Cors is mad annoying and I hate it. `Access-Control-Allow-Origin` is the bane of my existence.
  //* It's just a pain and FOR WHAT?! FOR WHY?!
  //* END CORS RANT
  //* i'm not sorry for the rant because it's true

  if (isDev) {
    const filter = {
      urls: [
        "https://ashlandauction.my.salesforce.com/services/data/v57.0/graphql*",
      ],
    };

    session.defaultSession.webRequest.onBeforeSendHeaders(
      filter,
      (details, callback) => {
        details.requestHeaders["Origin"] = "http://localhost:3000";
        details.requestHeaders["Authorization"] =
          `Bearer ${process.env.REACT_APP_MOCK_TOKEN}`;
        details.requestHeaders["Content-Type"] = "application/json";
        callback({ requestHeaders: details.requestHeaders });
      },
    );

    session.defaultSession.webRequest.onHeadersReceived(
      filter,
      (details, callback) => {
        details.responseHeaders["Access-Control-Allow-Origin"] = [
          "http://localhost:3000",
        ];
        details.responseHeaders["Access-Control-Allow-Headers"] = [
          "Authorization",
        ];
        details.responseHeaders["Access-Control-Allow-Headers"] = [
          "Authorization",
          "Content-Type",
        ];
        callback({ responseHeaders: details.responseHeaders });
      },
    );
  }

  ipcMain.on("kioskMode", () => {
    win.kiosk = !win.kiosk;

    const videoPath = isDev
      ? "http://localhost:3000/egg.html"
      : `file://${path.join(__dirname, "../build/egg.html")}`;
    win.loadURL(videoPath);
  });

  ipcMain.on("showDialog", (event, message) => {
    dialog.showErrorBox("Error", message);
  });

  ipcMain.on("updateApp", (event, downloadInfo) => {
    if (progressWindow.isVisible()) {
      return;
    }
    const downloadLink = downloadInfo.assets[0].browser_download_url;
    const releaseNotes = downloadInfo.html_url;
    dialog
      .showMessageBox({
        type: "info",
        title: "Update Available",
        message: `A new version of Email Assistant is available: ${downloadInfo.tag_name} \n Do you want to download it?`,
        detail: `Changelog: \n ${downloadInfo.body}`,
        buttons: ["Download", "Cancel"],
      })
      .then((response) => {
        if (response.response === 0) {
          console.log("Downloading update:", downloadLink);
          downloadUpdate(downloadLink);
          let url = new URL(
            "file://" +
            path.join(__dirname, "../build/index.html/#/progressBar"),
          ).toString();
          if (isDev) {
            url = "http://localhost:3000/#/progressBar";
          }

          progressWindow.loadURL(url);

          progressWindow.once("ready-to-show", () => {
            progressWindow.show();
          });
          return;
        } else if (response.response === 1) {
          progressWindow.destroy();
          return;
        }
      });
  });

  ipcMain.on("restartApp", () => {
    app.relaunch();
    app.quit();
  });

  ipcMain.on(
    "refreshToken",
    (event, { clientId, refreshToken, accessToken }) => {
      const requestBody = new URLSearchParams({
        grant_type: "refresh_token",
        client_id: clientId,
        refresh_token: refreshToken,
      });

      fetch(`${apiBase}/services/oauth2/token`, {
        method: "POST",
        body: requestBody,
      })
        .then((response) => {
          if (!response.ok) {
            win.webContents.send("accessToken", null);
            throw new Error("Error refreshing token");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Refreshed token:", data);
          if (data && !data.error && data.access_token !== accessToken) {
            win.webContents.send("onTokens", {
              accessToken: data.access_token,
            });
          }
        })
        .catch((error) => {
          console.error("Error refreshing token:", error);
        });
    },
  );

  ipcMain.on("oauthRedirect", (event, clientId) => {
    const redirectUri = `${apiBase}/services/oauth2/success`;
    const url = `${apiBase}/services/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=full%20refresh_token&grant_type=client_credentials`;
    auth.loadURL(url);
    auth.once("ready-to-show", () => {
      auth.show();
    });

    const handleCallback = (event, url) => {
      if (!url.includes("success")) {
        return;
      }
      console.log("url is: ", url);
      const [_baseUrl, fragment] = url.split("#");
      const params = new URLSearchParams(fragment);
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      if (accessToken) {
        win.webContents.send("onTokens", { accessToken, refreshToken });
        auth.webContents.removeAllListeners("did-start-navigation");
        auth.destroy();
      }
    };
    auth.webContents.on("did-start-navigation", handleCallback);
  });

  createWindow();
});

function downloadUpdate(downloadLink) {
  let downloadPath;
  download(win, downloadLink, {
    directory: app.getPath("temp"),
    onProgress: (progress) => {
      win.webContents.send("downloadProgress", progress.percent);
      progressWindow.webContents.send("downloadProgress", progress.percent);
    },
  })
    .then((dl) => {
      console.log("Download complete:", dl.getSavePath());
      downloadPath = shell.openPath(dl.getSavePath());

      if (downloadPath === false) {
        console.error("Error opening path:", dl.getSavePath());
      }
      shell.trashItem(dl.getSavePath());
      console.log("Downloaded file has been trashed:", dl.getSavePath());
      progressWindow.destroy();

      dialog.showMessageBox({
        type: "info",
        title: "Download Complete",
        message: `The update has been downloaded and is ready to install. \n 
                  Please close the application and drag the App to your Applications folder.
                  This will finish the installation process and you will be able to reopen the app. \n
`,
        buttons: ["OK"],
      });
      app.quit();
    })
    .catch((error) => {
      dialog.showErrorBox("Error", error);
      console.error("Error downloading update:", error);
      progressWindow.destroy();
    });
}
