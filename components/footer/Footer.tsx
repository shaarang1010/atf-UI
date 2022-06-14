import {
  Box,
  Flex,
  Icon,
  Spacer,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Container,
  Link as ChakraLink
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdMailOutline } from "react-icons/md";
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
    <Box bg={footerBGColor} color={footerLinkColor} mt='40'>
      <Container maxW={"container.xl"} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image
                src='https://atf-upload-bucket.s3.ap-southeast-2.amazonaws.com/ATF_logo3_6203938b60_3140c80044.svg?18380336.9'
                alt='ATF Therapy'
              />
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
                    <ChakraLink as={Link} href={link.footerLinkUrl} key={i}>
                      {link.footerLinkName}
                    </ChakraLink>
                  );
                })}
              </Stack>
            );
          })}
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <ChakraLink as={Link} href='mailto: aphasiatherapyfinder@gmail.com'>
              <Flex style={{ cursor: "pointer" }}>
                <Icon as={MdMailOutline} mt='1' mr='1' /> Aphasia Therapy Finder
              </Flex>
            </ChakraLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
