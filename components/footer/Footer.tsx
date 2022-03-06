import { Box, Button, Flex, Spacer, SimpleGrid, Stack, Image, Text, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Link from "next/link";

interface FooterLinks {
  footerLinkName: string;
  footerLinkUrl: string;
}

interface FooterLinkInfo {
  footerHeader: string;
  footerLinks: FooterLinks[];
}

interface FooterProps {
  footerLogo: string;
  footerLinkInfo: FooterLinkInfo[];
  footerBGColor: string;
  footerLinkColor: string;
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer: React.FC<FooterProps> = ({ footerLogo, footerLinkInfo, footerBGColor, footerLinkColor }) => {
  return (
    <Box bg={footerBGColor} color={footerLinkColor} mt='10'>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src={footerLogo} alt='ATF Therapy' />
            </Box>
            <Text fontSize={"sm"}>{`© ${new Date().getFullYear()} Aphasia Therapy Finder. All rights reserved`}</Text>
          </Stack>
          <Spacer />
          {footerLinkInfo.map((footerInfo, index) => {
            return (
              <Stack align={"flex-start"} key={index}>
                <ListHeader>{footerInfo.footerHeader}</ListHeader>
                {footerInfo.footerLinks.map((link, i) => {
                  return (
                    <Link href={link.footerLinkUrl} key={i}>
                      {link.footerLinkName}
                    </Link>
                  );
                })}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
