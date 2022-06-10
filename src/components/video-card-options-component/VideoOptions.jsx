import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React,{useState} from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {MdOutlineWatchLater,MdWatchLater,MdPlaylistAdd} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import { useVideos } from '../../context/useVideos'
import { addToLikes } from '../../utils/video-services/likes-services/addToLikes'
import {removeFromLikes} from '../../utils/video-services/likes-services/removeFromLikes'
import { addToWatchLater } from '../../utils/video-services/watch-later-services/addToWatchLater'
import { removeFromWatchLater } from '../../utils/video-services/watch-later-services/removeFromWatchLater'

const calculateInLikes=(_id,vidState)=>{
    const result=vidState.likedVideos.find(video=>video._id===_id)
    return result ? true:false
}
const calculateInWatchLater=(_id,vidState)=>{
    const result=vidState.watchLaterVideos.find(video=>video._id===_id)
    return result ? true:false
}



const VideoOptions=({video,isSingleVideo})=> {
    const navigate=useNavigate()
    const {authState}=useAuth()
    const {isUserActive}=authState
    const {vidState,dispatchVid}=useVideos()
    const [isLiked,setIsLiked]=useState(calculateInLikes(video._id,vidState))
    const [isWatchLater,setIsWatchLater]=useState(calculateInWatchLater(video._id,vidState))
    const likeVideoHandler=()=>{
        if(isUserActive){
            if(isLiked){
                removeFromLikes(video,dispatchVid)
                setIsLiked(false)
            }else{
                addToLikes(video,dispatchVid)
                setIsLiked(true)
            }
        }else{
            navigate('/login')
        }
    }

    const watchLaterHandler=()=>{
       if(isUserActive){
        if(isWatchLater){
            removeFromWatchLater(video,dispatchVid)
            setIsWatchLater(false)
        }else{
            addToWatchLater(video,dispatchVid)
            setIsWatchLater(true)
        }
       }else{
        navigate('/login')
       }
    }
    
    const playlistHandler=()=>{
        if(isUserActive){
            dispatchVid({type:"SET_PLAYLIST_MODAL_ON",payload:video})
        }else {
            navigate('/login')
        }
    }

  return (
    <Box position={isSingleVideo ? 'static':'absolute'} zIndex={4} display="flex" justifyContent="space-between" bg={!isSingleVideo && 'darkBg'} padding={2} right={4} top={4} color="whiteShade">
        <Box  onClick={likeVideoHandler} m={2} cursor="pointer">
            {isLiked ? <AiFillHeart size={25} />:<AiOutlineHeart size={25}/>}
        </Box>
        <Box onClick={watchLaterHandler} m={2} cursor="pointer">
            {isWatchLater ? <MdWatchLater size={25}/>: <MdOutlineWatchLater size={25}/>}
        </Box>
        <Box m={2}>
            <MdPlaylistAdd onClick={playlistHandler} size={25}/>
        </Box>
        
    </Box>
  )
}

export default VideoOptions