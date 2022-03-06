import { Global } from "@emotion/react";
export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      }
      `}
  />
);
