module.exports = {
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  packagerConfig: {
    icon: './src/assets/icons/logo.icns',
    name: 'Ashland Assistant',
    asar: true,
    osxNotarize: {
      tool: 'notarytool',
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_PASSWORD,
      teamId: process.env.APPLE_TEAM_ID,
    },
    osxSign: {},
  },
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        name: 'Ashland Assistant',
        icon: './src/assets/icons/logo.icns',
        background: './src/assets/scatter.png',
        window: {
          size: {
            width: 240,
            height: 380,
          },
        },
        /*  mimeType: ['x-scheme-handler/assistant'], */
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Libaration',
          name: 'Email-Assistant',
        },
        prerelease: true,
        force: true,
        generateReleaseNotes: true,
      },
    },
  ],
};
