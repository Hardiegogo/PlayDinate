import React from 'react'
import { Box, ListItem, UnorderedList,Text } from '@chakra-ui/react'
import {AiFillHome,AiOutlineHistory,AiFillLike} from "react-icons/ai";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {MdPlaylistPlay,MdWatchLater} from "react-icons/md";


const NavMenu=()=>{
  return (
    <Box position="absolute" top="4.5rem" left="2rem" >
        <UnorderedList listStyleType="none" bg="#0a1924" p={8}>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer"><AiFillHome/><Text ml={1}>Home</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer"><BsFillCameraVideoFill/><Text  ml={1}>Videos</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer"><AiOutlineHistory/><Text  ml={1}>History</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer"><MdPlaylistPlay/><Text  ml={1}>Playlists</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer"><MdWatchLater/><Text ml={1} >Watch later</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer"><AiFillLike/><Text  ml={1}>Liked Videos</Text></ListItem>
        </UnorderedList>
    </Box>
  )
}

export default NavMenu