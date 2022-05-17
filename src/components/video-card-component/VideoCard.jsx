import { Text,Box, AspectRatio,Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
const VideoCard=({video})=> {
  return (
    <Box cursor="pointer" maxW="20rem" color="whiteShade">
        <AspectRatio maxW="20rem" maxH="12rem">
        <Image src={video.thumbnail} objectFit="vover"></Image>
        </AspectRatio>
        <Box display="flex" mt={2} alignItems="center">
            <Box>
                <Image borderRadius="full" minW={8} width={8} src={video.creatorImg}></Image>
            </Box>
            <Heading fontSize="1rem" ml={2}>{video.title}</Heading>
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