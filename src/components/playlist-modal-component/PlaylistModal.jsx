import { Box,Grid, Heading, Input,Flex } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import {AiOutlinePlusCircle,AiOutlinePlus,AiOutlineCheck} from 'react-icons/ai'
import { useVideos } from '../../context/useVideos'
import { addtoPlaylist } from '../../utils/video-services/playlist-services/addToPlaylist'
import { addNewPlaylist } from '../../utils/video-services/playlist-services/addNewPlaylist'


const calculateInPlaylists=(vidState,playlistTitle)=>{
    if(playlistTitle!==''){
        return vidState.playlists.find(playlist=>playlist.title===playlistTitle)
    } else return true
}
const checkVideoInPlaylist=(playlist,video)=>{
    return playlist.videos.find(item=>item._id===video._id)
}


const PlaylistModal=({video})=> {
    const [playlistTitle,setPlaylistTitle]=useState('')
    const {vidState,dispatchVid}=useVideos()
    const {playlists}=vidState
    
    const changeHandler=(e)=>{
        setPlaylistTitle(()=>e.target.value)
    }
    const addClickHandler=()=>{
        setPlaylistTitle('')
        const check=calculateInPlaylists(vidState,playlistTitle)
        if(!check){
            addNewPlaylist(playlistTitle,dispatchVid)
        }   
    }
    const playlistClickHandler=(playlist)=>{
        const check=checkVideoInPlaylist(playlist,video)
        if(!check){
            addtoPlaylist(video,playlist,dispatchVid,vidState)
        }
    }
    const modalClickHandler=(e)=>{
        if(e.target.tagName==="DIV" && e.target.id==='modal-container'){
            dispatchVid({type:"SET_PLAYLIST_MODAL_OFF"})
        }
        
    }
  return (
    <Box position="fixed" top="0" left="0" height="100%" width="100%" display="grid" placeItems="center" onClick={modalClickHandler}id="modal-container" zIndex={5} bg="rgba(0,0,0,0.5)">
        <Box color="whiteShade" p={10} bg="bgColor" borderRadius="xl" >
            <Heading fontSize="2xl">Your playlists</Heading>
            <Grid mt={2}>
                {playlists.map(playlist=><Box key={playlist._id}>
                    <Flex _hover={{bg:"darkBg"}} p={2} alignItems="center" justifyContent="space-between">
                        <Heading fontSize="xl" color="secondary">{playlist.title}</Heading>
                        {!checkVideoInPlaylist(playlist,video) ? <AiOutlinePlus cursor="pointer" onClick={()=>playlistClickHandler(playlist)} size={20}/> : <AiOutlineCheck/>}
                    </Flex>
                </Box>)}

            </Grid>
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={4}>
                <Input type="text" placeholder='New Playlist' value={playlistTitle} onChange={changeHandler}/>
                <Box ml={2} cursor="pointer" onClick={addClickHandler}><AiOutlinePlusCircle size={35}/></Box>
            </Box>
        </Box>
    </Box>
  )
}

export default PlaylistModal