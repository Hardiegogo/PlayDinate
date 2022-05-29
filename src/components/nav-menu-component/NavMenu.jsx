import React from "react";
import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { AiFillHome, AiOutlineHistory, AiFillLike } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdPlaylistPlay, MdWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <Box position="absolute" top="4.5rem" left="2rem">
      <UnorderedList listStyleType="none" bg="darkBg" p={8}>
        <NavLink to='/'>
        <ListItem
          display="flex"
          alignItems="center"
          p={2}
          fontSize="xl"
          cursor="pointer"
        >
          <AiFillHome />
          <Text ml={1}>Home</Text>
        </ListItem>
        </NavLink>
        <NavLink to="/videos">
        <ListItem
          display="flex"
          alignItems="center"
          p={2}
          fontSize="xl"
          cursor="pointer"
        >
          <BsFillCameraVideoFill />
          <Text ml={1}>Videos</Text>
        </ListItem>
        </NavLink>
        <ListItem
          display="flex"
          alignItems="center"
          p={2}
          fontSize="xl"
          cursor="pointer"
        >
          <AiOutlineHistory />
          <Text ml={1}>History</Text>
        </ListItem>
        <ListItem
          display="flex"
          alignItems="center"
          p={2}
          fontSize="xl"
          cursor="pointer"
        >
          <MdPlaylistPlay />
          <Text ml={1}>Playlists</Text>
        </ListItem>
        <NavLink to='/watch-later'>
        <ListItem
          display="flex"
          alignItems="center"
          p={2}
          fontSize="xl"
          cursor="pointer"
        >
          <MdWatchLater />
          <Text ml={1}>Watch later</Text>
        </ListItem>

        </NavLink>
        <NavLink to="/liked-videos">
        <ListItem
          display="flex"
          alignItems="center"
          p={2}
          fontSize="xl"
          cursor="pointer"
        >
          <AiFillLike />
          <Text ml={1}>Liked Videos</Text>
        </ListItem>
        </NavLink>
      </UnorderedList>
    </Box>
  );
};

export default NavMenu;
