module.exports = {
  packagerConfig: {
    icon: './src/assets/icons/logo.icns',
    name: 'Ashland Assistant',
    // osxSign: {},
    // osxNotarize: {
    //   tool: 'notarytool',
    //   keychain: "/Library/Keychains/System.keychain",
    //   keychainProfile: "Developer",
    //
    // },
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'Ashland Assistant',
        iconUrl: './src/assets/icons/logo.ico',
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        debug: true,
        name: 'Ashland Assistant',
        icon: './src/assets/icons/logo.icns',
        background: './src/assets/scatter.png',
        window: {
          size: {
            width: 240,
            height: 380,
          },
        },
        mimeType: ['x-scheme-handler/assistant'],
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Libaration',
          name: 'Ashland Assistant',
        },
        prerelease: true,
      },
    },
  ],
};
