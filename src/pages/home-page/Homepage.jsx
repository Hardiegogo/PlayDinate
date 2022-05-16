import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Grid,
  Wrap
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar-component/Navbar";
import VideoCard from "../../components/video-card-component/VideoCard";
import { useVideos } from "../../context/useVideos";
import { loadVideos } from "../../utils/video-services/loadVideos";

const Homepage = () => {
  const { vidState, dispatchVid } = useVideos();
  useEffect(() => {
    loadVideos(dispatchVid);
  }, []);

  const { videos } = vidState;
  return (
    <Box height="100%" bg="bgColor">
      <Navbar />



      <Box w="80%" m="auto" p={8} mt={24} textAlign="center">
        <Heading color="whiteShade" fontSize="5xl">
          Get a sneakPeak into <Text>the gaming world</Text>
        </Heading>
        <Button variant="primaryBtn" mt={8} fontSize="xl" p={4}>
          Browse videos
        </Button>
        <Wrap justify="center" mt={8}>
        <Button borderRadius={20} bg="secondary" >eSports</Button>
        <Button borderRadius={20} bg="secondary">Entertainment</Button>
        <Button borderRadius={20} bg="secondary">Tutorials</Button>
        </Wrap>
      </Box>

    

      <Box color="whiteShade" ml={8} mt={12} p={4} >
        <Heading fontSize="2xl">Must watch</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={8} mt={8}>
          {videos.map((video) => (
            <VideoCard video={video} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Homepage;
