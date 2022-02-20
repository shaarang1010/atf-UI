import React from "react";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Container } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navOptions = [
    {
      optionName: "Login",
      optionLink: "/login",
      optionColor: "blue"
    },
    {
      optionName: "About",
      optionLink: "/about",
      optionColor: "blue"
    }
  ];

  const accountOptions = [
    {
      optionName: "Account Settings",
      optionLink: "/login",
      optionColor: "blue"
    },
    {
      optionName: "Logout",
      optionLink: "/about",
      optionColor: "blue"
    }
  ];

  const footerLinkOptions = [
    {
      footerHeader: "Page1",
      footerLinks: [
        {
          footerLinkName: "Page 123",
          footerLinkUrl: "google.com"
        },
        {
          footerLinkName: "Page 123",
          footerLinkUrl: "google.com"
        },
        {
          footerLinkName: "Page 123",
          footerLinkUrl: "google.com"
        }
      ]
    },
    {
      footerHeader: "Page2",
      footerLinks: [
        {
          footerLinkName: "Page 123",
          footerLinkUrl: "google.com"
        },
        {
          footerLinkName: "Page 123",
          footerLinkUrl: "google.com"
        },
        {
          footerLinkName: "Page 123",
          footerLinkUrl: "google.com"
        }
      ]
    }
  ];

  const footerOptions = {
    footerLogo: "https://drive.google.com/file/d/11OyJy750MXgmQR_0JTQ1-lMadGaERVRW/view?usp=sharing",
    footerBGColor: "darkBlue",
    footerLinkColor: "White",
    footerLinkInfo: footerLinkOptions
  };
  return (
    <>
      <NavBar
        navColor='white'
        navOptions={navOptions}
        isAuthenticated={true}
        protectedNavOptions={navOptions}
        accountOptions={accountOptions}
      />
      {children}
      <Footer
        footerLogo={footerOptions.footerLogo}
        footerLinkColor={footerOptions.footerLinkColor}
        footerBGColor={footerOptions.footerBGColor}
        footerLinkInfo={footerOptions.footerLinkInfo}
      />
    </>
  );
};

export default Layout;
