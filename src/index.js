import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { VideoProvider } from "./context/useVideos";
import { AuthProvider } from "./context/useAuth";
import { createRoot } from "react-dom/client";
const container = document.getElementById('root');
const root = createRoot(container);

// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
