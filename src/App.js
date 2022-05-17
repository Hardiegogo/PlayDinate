import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth-pages/Login";
import Signup from "./pages/auth-pages/Signup";
import Homepage from "./pages/home-page/Homepage";
import Videolisting from "./pages/video-listing-page/Videolisting";


function App() {
  return (
    <div className="App" height="100%">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/videos' element={<Videolisting/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
