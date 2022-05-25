import React, { useEffect, useState } from "react";
import { Box, Grid, Wrap, Button } from "@chakra-ui/react";
import Navbar from "../../components/navbar-component/Navbar";
import Sidebar from "../../components/sidebar-component/Sidebar";
import VideoCard from "../../components/video-card-component/VideoCard";
import { useVideos } from "../../context/useVideos";
import { loadVideos } from "../../utils/video-services/loadVideos";

const filterByCategory = (videos, category) => {
  return category
    ? videos.filter((video) => video.categoryName === category)
    : videos;
};

const Videolisting = () => {
  const { vidState, dispatchVid } = useVideos();
  const [category, setCategory] = useState();

  useEffect(() => {
    loadVideos(dispatchVid);
  }, []);

  const { videos } = vidState;
  const filteredVideos = filterByCategory(videos, category);
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
        <Wrap mt={8}>
        <Button
            borderRadius={20}
            bg="secondary"
            onClick={() => setCategory("")}
          >
            All videos
          </Button>
          <Button
            borderRadius={20}
            bg="secondary"
            onClick={() => setCategory("eSports")}
          >
            eSports
          </Button>
          <Button
            borderRadius={20}
            bg="secondary"
            onClick={() => setCategory("entertainment")}
          >
            Entertainment
          </Button>
          <Button
            borderRadius={20}
            bg="secondary"
            onClick={() => setCategory("tutorials")}
          >
            Tutorials
          </Button>
        </Wrap>
        <Grid
          templateColumns="repeat( auto-fit, minmax(20rem, 1fr) )"
          gap={8}
          mt={8}
        >
          {filteredVideos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Videolisting;
