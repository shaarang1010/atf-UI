import {
  Box,
  Button,
  Flex,
  Spacer,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  MenuItem,
  MenuDivider
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Aphasia-logo.png";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

type NavOptions = {
  optionName: string;
  optionLink: string;
  optionColor: string;
};
type NavbarProps = {
  navOptions: NavOptions[];
  protectedNavOptions?: NavOptions[];
  accountOptions?: NavOptions[];
  navColor: string;
};

const NavBar: React.FC<NavbarProps> = ({ navOptions, navColor, protectedNavOptions, accountOptions }) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(UserContext);
  const onClickNavigate = (e: any, link: string) => {
    e.preventDefault();
    router.push(link);
  };
  return (
    <Box width='100%' p={6} bg={navColor} h='20' overflow='hidden' className={styles.navbarShadow}>
      <Flex>
        <Box>
          <Link href='/'>
            <Heading as='h3' size='md' pl='2'>
              Aphasia Therapy Finder
              {/* <Image src={logo} alt='Aphasia Therapy Finder' /> */}
            </Heading>
          </Link>
        </Box>
        <Spacer />
        {!isAuthenticated &&
          navOptions.map((option, index) => {
            return (
              <Box key={index}>
                <Button
                  colorScheme={option.optionColor}
                  variant='outline'
                  mr='4'
                  className={styles.navbarButton}
                  onClick={(e) => onClickNavigate(e, option.optionLink)}
                >
                  {option.optionName}
                </Button>
              </Box>
            );
          })}
        {isAuthenticated ? (
          <Flex>
            <Box mr='4'>
              <InputGroup size='md' mr='10'>
                <Input pr='1.5rem' type='text' placeholder='Search...' />
                <InputRightElement width='4.5rem'>
                  <Search2Icon />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Spacer />
            {protectedNavOptions &&
              protectedNavOptions.map((option, index) => {
                return (
                  <Box key={index}>
                    <Button
                      colorScheme={option.optionColor}
                      variant='outline'
                      mr='4'
                      className={styles.navbarButton}
                      onClick={(e) => onClickNavigate(e, option.optionLink)}
                    >
                      {isAuthenticated && option.optionName === "Login" ? "Logout" : option.optionName}
                    </Button>
                  </Box>
                );
              })}
            <Spacer />
            <Box>
              {/* <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  {accountOptions &&
                    accountOptions.map((option, index) => (
                      <div key={index}>
                        {index === accountOptions.length - 1 ? <MenuDivider /> : null}
                        <MenuItem key={index} onClick={(e) => onClickNavigate(e, option.optionLink)}>
                          {option.optionName}
                        </MenuItem>
                      </div>
                    ))}
                </MenuList>
              </Menu> */}
            </Box>
          </Flex>
        ) : null}
      </Flex>
    </Box>
  );
};

export default NavBar;
