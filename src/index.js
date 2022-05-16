import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {theme} from './theme'
import { VideoProvider } from "./context/useVideos";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <VideoProvider>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </VideoProvider>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
