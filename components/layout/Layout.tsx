import React from "react";
import Footer from "../footer/Footer";
import WithSubnavigation from "../navbar/NavigationHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const footerLinkOptions = [
    {
      footerHeader: "Additional Links",
      footerLinks: [
        {
          footerLinkName: "Terms and Conditions",
          footerLinkUrl: "/termsandconditions"
        },
        {
          footerLinkName: "About Us",
          footerLinkUrl: "/about"
        }
      ]
    }
    // {
    //   footerHeader: "Contact",
    //   footerLinks: [
    //     {
    //       footerLinkName: "Contact us",
    //       footerLinkUrl: "/termsandconditions"
    //     },
    //     {
    //       footerLinkName: "About Us",
    //       footerLinkUrl: "/about"
    //     }
    //   ]
    // }
  ];

  const footerOptions = {
    footerLogo: "https://drive.google.com/file/d/11OyJy750MXgmQR_0JTQ1-lMadGaERVRW/view?usp=sharing",
    footerBGColor: "darkBlue",
    footerLinkColor: "White",
    footerLinkInfo: footerLinkOptions
  };
  return (
    <>
      <WithSubnavigation></WithSubnavigation>
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
