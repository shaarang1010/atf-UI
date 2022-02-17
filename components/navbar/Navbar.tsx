import { Box, Flex, Spacer } from "@chakra-ui/react";
import { NextPage } from "next";

type NavOptions = {
    optionName: string;
    optionLink: string;
    optionColor: string;
}
type NavbarProps = {
    navOptions: NavOptions[];
    navColor: string;
}


const NavBar: NextPage<NavbarProps> = ({navOptions, navColor}) =>{
    return(
        <Box width="100%" p={6} bg={navColor} h="20" overflow="hidden">
            <Flex>
                <Spacer/>
            </Flex>
        </Box>
    )
}
