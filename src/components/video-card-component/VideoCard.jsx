import { Text,Box, AspectRatio,Image, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import VideoOptions from '../video-card-options-component/VideoOptions'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { useOutsideClick } from '@chakra-ui/react'
import {AiFillDelete} from 'react-icons/ai'
import { removeFromLikes } from '../../utils/video-services/likes-services/removeFromLikes'
import { useVideos } from '../../context/useVideos'
import { removeFromWatchLater } from '../../utils/video-services/watch-later-services/removeFromWatchLater'

const VideoCard=({video,videoType})=> {
  console.log(videoType)
  const [isVideoOptions,setIsVideoOptions]=useState(false)
  const ref=React.useRef()
  useOutsideClick({
    ref:ref,
    handler:()=>setIsVideoOptions(false)
  })
  const {dispatchVid}=useVideos()
  const deleteHandler=()=>{
    switch (videoType) {
      case "likes":
        removeFromLikes(video,dispatchVid)
        break;
      case "watchlater":
        removeFromWatchLater(video,dispatchVid)
        break;
      default:
        break;
    }
  }
  return (
    <Box maxW="20rem" color="whiteShade">
        <AspectRatio maxW="20rem" maxH="12rem">
        <Image src={video.thumbnail} objectFit="cover"></Image>
        </AspectRatio>
        <Box display="flex" mt={2} alignItems="center" justifyContent="space-between" position="relative">
          <Box display="flex" alignItems="center">
            <Box cursor="pointer">
              <Image borderRadius="full" minW={8} width={8} src={video.creatorImg} ></Image>
            </Box>
            <Heading fontSize="1rem" ml={2}>{video.title}</Heading>
          </Box>
            <Box cursor="pointer">
              {videoType ? <AiFillDelete size={20} onClick={deleteHandler}/>:<BsThreeDotsVertical onClick={()=>setIsVideoOptions(!isVideoOptions)} />}
              <Box ref={ref}>
              {isVideoOptions && <VideoOptions  video={video}/>}
              </Box>
            </Box>
           
            
        </Box>
        <Box display="flex" justifyContent="space-between" mt="4px" color="gray.400" fontSize={10}>
            <Text>{video.creator} <CheckCircleIcon ml="2px"/></Text>
            <Text>{video.views} views</Text>
        </Box>
        <Text color="gray.400" fontSize={10} mt={1}>{video.description}</Text>
    </Box>
  )
}

export default VideoCard