import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  Link as ChakraLink,
  useDisclosure,
  useToast,
  Image
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaFingerprint, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const router = useRouter();
  const toast = useToast();

  const onLogout = () => {
    setIsAuthenticated(false);
    toast({
      title: `Loging you out. You will be re-directed to homepage`,
      position: "top",
      duration: 3000,
      status: "success",
      isClosable: true,
      onCloseComplete: () => router.push("/")
    });
  };

  return (
    <Box boxShadow='lg' rounded='lg' bg='white'>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} style={{ cursor: "pointer" }}>
          <ChakraLink as={Link} href={isAuthenticated ? "/dashboard" : "/"}>
            <Image
              width='180px'
              height='60px'
              src='https://atf-upload-bucket.s3.ap-southeast-2.amazonaws.com/logo_39497b00c7.svg?3674244.3000000007'
              alt='Aphasia Therapy Finder'
            />
          </ChakraLink>
        </Flex>
        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
          <Flex display={{ base: "none", md: "flex" }} ml={10} mt={3}>
            <DesktopNav />
          </Flex>
          {isAuthenticated && (
            <>
              <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar bg='darkBlue' />
                </MenuButton>
                <MenuList>
                  <MenuItem my='1'>
                    <Icon as={FaFingerprint} mr='2' />
                    Account Settings
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={onLogout}>
                    <Icon as={FaSignOutAlt} mr='2' />
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("blue.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { isAuthenticated } = useContext(UserContext);
  const navItems = isAuthenticated ? NAV_ITEMS : NAV_ITEMS.filter((items) => items.label === "About");

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href ?? "#"} passHref>
                <ChakraLink
                  p={1}
                  fontSize={"lg"}
                  fontWeight={800}
                  color={linkColor}
                  mr={10}
                  _activeLink={{ borderBottom: "5px red" }}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor
                  }}
                >
                  {navItem.label}
                </ChakraLink>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <ChakraLink
      href={href ?? "/"}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.100", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} _groupHover={{ color: "darkBlue" }} fontWeight={800}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"darkBlue"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </ChakraLink>
  );
};

const MobileNav = () => {
  const { isAuthenticated } = useContext(UserContext);
  const navItems = isAuthenticated ? NAV_ITEMS : NAV_ITEMS.filter((items) => items.label === "About");
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <ChakraLink as={Link} href={href ?? "#"}>
        <Flex
          py={2}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none"
          }}
        >
          <Text fontWeight={800} color={useColorModeValue("gray.600", "gray.200")}>
            {label}
          </Text>

          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        </Flex>
      </ChakraLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link href={child.href ?? "#"} passHref>
                <ChakraLink key={child.label} py={2}>
                  {child.label}
                </ChakraLink>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Resources",
    href: "/resources/tools"
  }
];
