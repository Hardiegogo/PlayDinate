import {
  Box,
  Button,
  Heading,
  Text,
  Input
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavMenu from "../nav-menu-component/NavMenu";
import { FaSearch } from "react-icons/fa";
import {
  BsPlayCircle,
  BsEmojiSmile,
  BsPerson,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { useAuth } from "../../context/useAuth";
import ProfileMenu from "../profile-menu-component/ProfileMenu";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ showMenu }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const { authState } = useAuth();
  const { isUserActive, userDetails } = authState;

  return (
    <Box display="flex" justifyContent="space-between" color="white" p={4}>
      <Box display="flex" alignItems="center" ml={8}>
        {showMenu ? (
          <HamburgerIcon
            w={6}
            h={6}
            cursor="pointer"
            onClick={() => setIsMenu(!isMenu)}
          />
        ) : (
          <BsPlayCircle size={40} />
        )}
        <Heading ml={4}>
          <Text display="inline" color="primary">
            Play
          </Text>
          Dinate
        </Heading>
      </Box>
      <Box display="flex" alignItems="center" width="30%">
        <FaSearch size={20} />
        <Input variant="flushed" placeholder="Search here" ml={4} />
      </Box>
      <Box mr={8}>
        {isUserActive ? (
          <Box display="flex" alignItems="center">
            <Box
              position="relative"
              display="flex"
              onClick={() => setIsProfileMenu(!isProfileMenu)}
              cursor="pointer"
              alignItems="center"
            >
              <BsFillCaretDownFill />
              <BsPerson size={40} />

              {isProfileMenu && <ProfileMenu />}
            </Box>
            <Text fontWeight="semibold" ml={4} mr={2}>
              Hi, {userDetails.firstName}
            </Text>{" "}
            <BsEmojiSmile />{" "}
          </Box>
        ) : (
          <RouterLink to="/login">
            <Button variant="primaryBtn" mr={4}>
              Log in
            </Button>
          </RouterLink>
        )}
      </Box>

      {isMenu && <NavMenu />}
    </Box>
  );
};

export default Navbar;
