import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideos } from "../../context/useVideos";
import { loadSingleVideo } from "../../utils/video-services/loadSingleVideo";
import Navbar from "../../components/navbar-component/Navbar";
import Sidebar from "../../components/sidebar-component/Sidebar";
import VideoCard from "../../components/video-card-component/VideoCard";
import { CheckCircleIcon } from "@chakra-ui/icons";
import VideoOptions from "../../components/video-card-options-component/VideoOptions";

const SingleVideo = () => {
  const params = useParams();
  const { vidState, dispatchVid } = useVideos();
  const { title, videoLink, description, creatorImg, creator, views } =
    vidState.video;

  useEffect(() => {
    loadSingleVideo(params.videoId, dispatchVid);
  }, [params.videoId]);

  const calculateSimilarVideos = (vidState, currentVideo) => {
    if (currentVideo) {
      return vidState.videos.filter((video) => {
        if (video._id !== currentVideo._id) {
          return video.categoryName === currentVideo.categoryName;
        }
      });
    } else return vidState.videos;
  };
  const similarVideos = calculateSimilarVideos(vidState, vidState.video);

  return (
    <Grid
      bg="bgColor"
      height="100%"
      minHeight="100vh"
      templateAreas={`"navbar navbar" "sidebar content"`}
      templateColumns=".2fr .8fr"
      templateRows="5rem 1fr"
    >
      <Box gridArea="navbar">
        <Navbar showMenu={false} />
      </Box>
      <Box gridArea="sidebar">
        <Sidebar />
      </Box>
      <Box gridArea="content" mb={4} p={8}>
        <Grid templateColumns=".8fr .2fr" h="100%">
          <Box display="grid" placeItems="center" boxSize="border-box" p={2}>
            {videoLink ? (
              <Box w="80%" m="auto" p={4}>
                <AspectRatio maxW="100%" maxH="30rem">
                  <iframe
                    src={`${videoLink}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </AspectRatio>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={4}
                >
                  <Box display="flex">
                    <Image
                      borderRadius="full"
                      minW={8}
                      width={8}
                      src={creatorImg}
                    ></Image>
                    <Heading fontSize="3xl" color="whiteShade" ml={2}>
                      {title}
                    </Heading>
                  </Box>

                  <VideoOptions video={vidState.video} isSingleVideo={true} />
                </Box>
                <Box>
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      mt={2}
                      color="gray.400"
                      fontSize={12}
                    >
                      <Text>
                        {creator} <CheckCircleIcon ml="2px" />
                      </Text>
                      <Text>{views} views</Text>
                    </Box>
                    <Text color="gray.400" fontSize={12} mt={1}>
                      {description}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                <Heading color="whiteShade">No video found</Heading>
                <AspectRatio w="100%" mt={8}>
                  <Image src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1654117320/PlayDinate/web_search_dgztlj.svg" />
                </AspectRatio>
              </Box>
            )}
          </Box>
          <Box>
            {videoLink && (
              <Heading color="whiteShade" fontSize="3xl">
                Similar videos
              </Heading>
            )}
            <Flex gap={4} flexDirection="column" mt={4}>
              {similarVideos.map((video) => (
                <VideoCard
                  video={video}
                  key={video._id}
                  videoType="single-video"
                />
              ))}
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SingleVideo;
