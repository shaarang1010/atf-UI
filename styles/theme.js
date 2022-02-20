import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      900: "#171923"
    },
    darkBlue: "#0A2A66",
    lightBlue: "#90CDF4",
    primaryBlue: "#1865F2"
  },
  fonts: {
    heading: `"Roboto",Arial, Helvetica, sans-serif`,
    description: `"Roboto",Arial, Helvetica, sans-serif`
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
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
      fontWeight: "normal",
      fontFamily: "Roboto",
      lineHeight: "16px"
    }
  }
});

export default theme;
