import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Heading,

} from "@chakra-ui/react";
import Navbar from "../../components/navbar-component/Navbar";
import Sidebar from "../../components/sidebar-component/Sidebar";
import { useVideos } from "../../context/useVideos";
import VideoCard from "../../components/video-card-component/VideoCard";
import { loadLikes } from "../../utils/video-services/loadLikes";



const LikedVideos = () => {
  const { vidState, dispatchVid } = useVideos();

  useEffect(() => {
    loadLikes(dispatchVid);
  }, []);

  const { likedVideos } = vidState;

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
      <Box gridArea="content" mb={4}>
        <Heading color="whiteShade" mt={4}>
          Liked Videos
        </Heading>
        <Grid
        gap={8}
          mt={8}
        >
          {likedVideos.map((video) => (
            <VideoCard video={video} videoType="likes" />
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default LikedVideos;
