
import React from 'react'
import { Box, Grid, Wrap, Button, Heading, Center, AspectRatio,Text } from "@chakra-ui/react";
import {AiFillDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {useVideos} from '../../context/useVideos'
import { deletePlaylist } from '../../utils/video-services/playlist-services/deletePlaylist';

const PlaylistCard=({playlist})=>{
    const navigate=useNavigate()
    const {dispatchVid}=useVideos()
    const clickHandler=()=>{
        navigate(`/playlist/${playlist._id}`)
    
    }
    const deleteClickHandler=(e)=>{
        e.stopPropagation()
        deletePlaylist(playlist._id,dispatchVid)
        
    }
    return (
    <Box   display="flex" alignItems="center" justifyContent="space-between" bg="darkBg" p={4} borderRadius="xl" cursor="pointer" onClick={clickHandler}>
        <Box>
            <Heading color="secondary" fontSize="2xl">{playlist.title}</Heading>
            <Text color="gray.500">{playlist.videos.length} video{(playlist.videos.length > 1 || playlist.videos.length===0) && 's'}</Text>
        </Box>
        <Box color="whiteShade"  >
            <AiFillDelete id="playlist-delete"  onClick={deleteClickHandler} size={25}/>
        </Box>
    </Box>)
}

export default PlaylistCard