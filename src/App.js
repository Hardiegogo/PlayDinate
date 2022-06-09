import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth-pages/Login";
import Signup from "./pages/auth-pages/Signup";
import Homepage from "./pages/home-page/Homepage";
import LikedVideos from "./pages/liked-video-page/LikedVideos";
import SingleVideo from "./pages/single-video-page/SingleVideo";
import Videolisting from "./pages/video-listing-page/Videolisting";
import WatchLater from "./pages/watch-later-page/WatchLater";
import RequireAuth from "./utils/RequireAuth";
import History from "./pages/history-page/History";
import { useVideos } from "./context/useVideos";
import PlaylistModal from "./components/playlist-modal-component/PlaylistModal";
import Playlists from "./pages/playlists-page/Playlists";
import SinglePlaylist from "./pages/single-playlist-page/SinglePlaylist";


function App() {
  const {vidState}=useVideos()
  const {isPlaylistModal,playlistModalVideo}=vidState
  return (
    <div className="App" height="100%">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/videos' element={<Videolisting/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/liked-videos' element={<RequireAuth><LikedVideos/></RequireAuth>}/>
        <Route path='/watch-later' element={<RequireAuth><WatchLater/></RequireAuth>}/>
        <Route path="/video/:videoId" element={<SingleVideo/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path='/playlists' element={<RequireAuth><Playlists/></RequireAuth>}/>
        <Route path='/playlist/:playlistId' element={<RequireAuth><SinglePlaylist/></RequireAuth>}/>
      </Routes>
      {isPlaylistModal && <PlaylistModal video={playlistModalVideo}/>}
    </div>
  );
}

export default App;
