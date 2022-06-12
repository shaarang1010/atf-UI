import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      default: "#C4C4C4",
      50: "#f7fafc",
      900: "#171923"
    },
    darkBlue: "#0A2A66",
    lightBlue: "#90CDF4",
    primaryBlue: "#1865F2"
  },
  fonts: {
    heading: "Roboto",
    description: "Roboto",
    body: "Roboto"
  },
  textStyles: {
    h1: {
      fontSize: "30px",
      fontWeight: "bold",
      fontFamily: "Roboto",
      lineHeight: "35px"
    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
      fontFamily: "Roboto",
      lineHeight: "28px"
    },
    h4: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: "Roboto",
      lineHeight: "16px"
    }
  }
});

export default theme;
