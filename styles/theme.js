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
      lineHeight: "35px",
      letterSpacing: "-2%"
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%"
    }
  }
});

export default theme;
