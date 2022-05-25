import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React,{useState} from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {MdOutlineWatchLater,MdWatchLater} from 'react-icons/md'
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


const VideoOptions=({video})=> {
    const {vidState,dispatchVid}=useVideos()
    const [isLiked,setIsLiked]=useState(calculateInLikes(video._id,vidState))
    const [isWatchLater,setIsWatchLater]=useState(calculateInWatchLater(video._id,vidState))

    const likeVideoHandler=()=>{
        if(isLiked){
            removeFromLikes(video,dispatchVid)
            setIsLiked(false)
        }else{
            addToLikes(video,dispatchVid)
            setIsLiked(true)
        }
    }

    const watchLaterHandler=()=>{
        if(isWatchLater){
            removeFromWatchLater(video,dispatchVid)
            setIsWatchLater(false)
        }else{
            addToWatchLater(video,dispatchVid)
            setIsWatchLater(true)
        }
    }

  return (
    <Box position="absolute" display="flex" justifyContent="space-between" bg="darkBg" padding={2} right={4} top={4}>
        <Box  onClick={likeVideoHandler} m={2}>
            {isLiked ? <AiFillHeart size={25} cursor="pointer"/>:<AiOutlineHeart size={25} cursor="pointer"/>}
        </Box>
        <Box onClick={watchLaterHandler} m={2}>
            {isWatchLater ? <MdWatchLater size={25} cursor="pointer"/>: <MdOutlineWatchLater size={25} cursor="pointer"/>}
        </Box>
        
    </Box>
  )
}

export default VideoOptions