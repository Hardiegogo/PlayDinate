import React,{useEffect} from 'react'
import { Box, Grid, Wrap, Button, Heading, Center, AspectRatio,Text } from "@chakra-ui/react";
import Navbar from '../../components/navbar-component/Navbar';
import Sidebar from '../../components/sidebar-component/Sidebar';
import { useVideos } from '../../context/useVideos';
import PlaylistCard from '../../components/playlist-card-component/PlaylistCard';
import { loadPlaylists } from '../../utils/video-services/loadPlaylists';

const Playlists=()=> {
    const { vidState, dispatchVid } = useVideos();

    useEffect(() => {
      loadPlaylists(dispatchVid)
    }, []);
  
    const { playlists } = vidState;
  
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
          
          <Heading color="whiteShade" mt={4} >Playlists</Heading>
          <Grid
            templateColumns="repeat( auto-fit, 20rem )"
            gap={8}
            mt={8}
          >
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist._id} playlist={playlist}/>
            ))}
          </Grid>
        </Box>
      </Grid>
    );
}

export default Playlists