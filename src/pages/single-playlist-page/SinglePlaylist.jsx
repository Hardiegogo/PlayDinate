import React, { useEffect, useState } from "react";
import { Box, Grid, Wrap, Button, Heading, Center } from "@chakra-ui/react";
import Navbar from "../../components/navbar-component/Navbar";
import Sidebar from "../../components/sidebar-component/Sidebar";
import { useVideos } from "../../context/useVideos";
import VideoCard from "../../components/video-card-component/VideoCard";
import PlaylistCard from "../../components/playlist-card-component/PlaylistCard";
import { useParams } from "react-router-dom";
import { loadSinglePlaylist } from "../../utils/video-services/loadSinglePlaylist";
import { Spinner } from "@chakra-ui/react";

const SinglePlaylist = () => {
  const { vidState, dispatchVid } = useVideos();
  const params = useParams();
  const { playlist } = vidState;
  const [isSpinner, setIsSpinner] = useState(true);

  useEffect(() => {
    loadSinglePlaylist(vidState, dispatchVid, params.playlistId, setIsSpinner);
  }, []);

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
          {" "}
          {playlist.title} videos
        </Heading>

        {isSpinner ? (<Grid placeItems="center" height="80%">
          <Spinner size="xl" color="secondary" />
        </Grid>
          
        ) : (
          <Grid
            templateColumns="repeat( auto-fit, minmax(20rem, 1fr) )"
            gap={8}
            mt={8}
          >
            {playlist.videos.map((video) => (
              <VideoCard
                video={video}
                videoType="playlist"
                playlistId={playlist._id}
              />
            ))}
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default SinglePlaylist;
