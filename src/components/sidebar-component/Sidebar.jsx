import React from 'react'
import { Box, ListItem, UnorderedList,Text } from '@chakra-ui/react'
import {AiFillHome,AiOutlineHistory,AiFillLike} from "react-icons/ai";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {MdPlaylistPlay,MdWatchLater} from "react-icons/md";

const Sidebar=()=> {
  return (
    <Box>
        <UnorderedList listStyleType="none" color="whiteShade" height="100%" ml={0} m={8}>
            <ListItem display="flex" alignItems="center" p={2}  fontSize="xl" cursor="pointer"  pl={10}_hover={{bg:"#0a1924",}}><AiFillHome/><Text ml={1}>Home</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer" pl={10}_hover={{bg:"#0a1924",}} mt={2}><BsFillCameraVideoFill/><Text  ml={1}>Videos</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer" pl={10}_hover={{bg:"#0a1924",}} mt={2}><AiOutlineHistory/><Text  ml={1}>History</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer" pl={10}_hover={{bg:"#0a1924",}} mt={2}><MdPlaylistPlay/><Text  ml={1}>Playlists</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer" pl={10}_hover={{bg:"#0a1924",}} mt={2}><MdWatchLater/><Text ml={1} >Watch later</Text></ListItem>
            <ListItem display="flex" alignItems="center" p={2} fontSize="xl" cursor="pointer" pl={10}_hover={{bg:"#0a1924",}} mt={2}><AiFillLike/><Text  ml={1}>Liked Videos</Text></ListItem>
        </UnorderedList>
    </Box>
  )
}

export default Sidebar