import React,{useEffect} from 'react'
import { Box, Grid, Wrap, Button, Heading, Center } from "@chakra-ui/react";
import Navbar from '../../components/navbar-component/Navbar';
import Sidebar from '../../components/sidebar-component/Sidebar';
import { useVideos } from '../../context/useVideos';
import VideoCard from '../../components/video-card-component/VideoCard';
import { loadWatchLater } from '../../utils/video-services/loadWatchLater';

const WatchLater=()=> {
    const { vidState, dispatchVid } = useVideos();

    useEffect(() => {
      loadWatchLater(dispatchVid);
    }, []);
  
    const { watchLaterVideos } = vidState;
  
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
          
          <Heading color="whiteShade" mt={4} >Watch later</Heading>
          <Grid
            templateColumns="repeat( auto-fit, minmax(20rem, 1fr) )"
            gap={8}
            mt={8}
          >
            {watchLaterVideos.map((video) => (
              <VideoCard video={video} videoType="watchlater" />
            ))}
          </Grid>
        </Box>
      </Grid>
    );
}

export default WatchLater