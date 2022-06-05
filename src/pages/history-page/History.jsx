import React, { useEffect } from "react";
import { Box, Grid, Wrap, Button, Heading, Center } from "@chakra-ui/react";
import Navbar from "../../components/navbar-component/Navbar";
import Sidebar from "../../components/sidebar-component/Sidebar";
import { useVideos } from "../../context/useVideos";
import VideoCard from "../../components/video-card-component/VideoCard";
import { loadWatchLater } from "../../utils/video-services/loadWatchLater";
import { loadHistory } from "../../utils/video-services/loadHistory";
import {deleteAllHistory} from "../../utils/video-services/history-services/deleteAllHistory";

const History = () => {
  const { vidState, dispatchVid } = useVideos();

  useEffect(() => {
    loadHistory(dispatchVid);
  }, []);

  const { history } = vidState;

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
          History
        </Heading>
        <Button
            borderRadius={20}
            bg="secondary"
            mt={4}
            onClick={()=>deleteAllHistory(dispatchVid)}
          >
            Clear all history
          </Button>
        <Grid
          templateColumns="repeat( auto-fit, minmax(20rem, 1fr) )"
          gap={8}
          mt={8}
        >
          {history.map((video) => (
            <VideoCard video={video} key={video._id} videoType="history" />
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default History;
