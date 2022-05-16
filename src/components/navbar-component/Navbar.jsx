import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavMenu from "../nav-menu-component/NavMenu";



const Navbar = () => {
  const [isMenu,setIsMenu]=useState(false)

  return (
    <Box display="flex" justifyContent="space-between" color="white" p={4}>
      <Box display="flex" alignItems="center" ml={8}>
        <HamburgerIcon mr={4} w={6} h={6} cursor="pointer" onClick={()=>setIsMenu(!isMenu)} />
        <Heading>
          <Text display="inline" color="primary">
            Play
          </Text>
          Dinate
        </Heading>
      </Box>
      <Box mr={8}>
        <Button variant="primaryBtn" mr={4}>
          Log in
        </Button>
      </Box>
      {isMenu && <NavMenu/>}
    </Box>
  );
};

export default Navbar;
