import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fff', 'gray.900')(props),
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitAppRegion: 'drag',
    },
    '.chakra-button': {
      WebkitAppRegion: 'no-drag',
    },
    '*': {
      cursor: 'default',
      userSelect: 'none',
    },
    button: {
      cursor: 'default',
      userSelect: 'none',
    },
    html: {
      fontSize: '14px',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
      WebkitAppRegion: 'no-drag',
    },
    a: {
      cursor: 'default',
      userSelect: 'none',
      WebkitAppRegion: 'no-drag',
    },
    h1: {
      WebkitAppRegion: 'no-drag',
    },
    h2: {
      WebkitAppRegion: 'no-drag',
    },
    h3: {
      WebkitAppRegion: 'no-drag',
    },
    h4: {
      WebkitAppRegion: 'no-drag',
    },
    h5: {
      WebkitAppRegion: 'no-drag',
    },
    h6: {
      WebkitAppRegion: 'no-drag',
    },
    p: {
      WebkitAppRegion: 'no-drag',
    },
    ul: {
      WebkitAppRegion: 'no-drag',
    },
    ol: {
      WebkitAppRegion: 'no-drag',
    },
    li: {
      WebkitAppRegion: 'no-drag',
    },
    blockquote: {
      WebkitAppRegion: 'no-drag',
    },
    pre: {
      WebkitAppRegion: 'no-drag',
    },
    code: {
      WebkitAppRegion: 'no-drag',
    },
    table: {
      WebkitAppRegion: 'no-drag',
    },
    th: {
      WebkitAppRegion: 'no-drag',
    },
    td: {
      WebkitAppRegion: 'no-drag',
    },
    img: {
      WebkitAppRegion: 'no-drag',
    },
    video: {
      WebkitAppRegion: 'no-drag',
    },
    figure: {
      WebkitAppRegion: 'no-drag',
    },
    figcaption: {
      WebkitAppRegion: 'no-drag',
    },
  }),
};
const theme = extendTheme({ config, styles });
export default theme;
