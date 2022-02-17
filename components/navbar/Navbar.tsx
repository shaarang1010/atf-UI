import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

type NavOptions = {
  optionName: string;
  optionLink: string;
  optionColor: string;
};
type NavbarProps = {
  navOptions: NavOptions[];
  navColor: string;
};

const NavBar: NextPage<NavbarProps> = ({ navOptions, navColor }) => {
  const router = useRouter();
  const onClickNavigate = (e, link) => {
    e.preventDefault();
    router.push(link);
  };
  return (
    <Box width='100%' p={6} bg={navColor} h='20' overflow='hidden'>
      <Flex>
        <Spacer />
        {navOptions.map((option, index) => {
          <Box key={index}>
            <Button
              colorScheme={option.optionColor}
              variant='outline'
              onClick={(e) => onClickNavigate(e, option.optionLink)}
            >
              {option.optionName}
            </Button>
          </Box>;
        })}
      </Flex>
    </Box>
  );
};

export default NavBar;
