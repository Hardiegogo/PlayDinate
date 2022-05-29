import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth-pages/Login";
import Signup from "./pages/auth-pages/Signup";
import Homepage from "./pages/home-page/Homepage";
import LikedVideos from "./pages/liked-video-page/LikedVideos";
import Videolisting from "./pages/video-listing-page/Videolisting";
import WatchLater from "./pages/watch-later-page/WatchLater";
import RequireAuth from "./utils/RequireAuth";


function App() {
  return (
    <div className="App" height="100%">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/videos' element={<Videolisting/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/liked-videos' element={<RequireAuth><LikedVideos/></RequireAuth>}/>
        <Route path='/watch-later' element={<RequireAuth><WatchLater/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
