import { createContext, useContext,useReducer } from "react";
import { vidReducer } from "../reducers/vidReducer";
import { useEffect } from "react";
import { loadVideos } from "../utils/video-services/loadVideos";
const VideoContext=createContext(null)

export const useVideos=()=>useContext(VideoContext)

const initialState={
    videos:[],
    vidsLoading:'',
    error:'',
    likedVideos:[],
    watchLaterVideos:[],
    history:[],
    video:{},
    isPlaylistModal:false,
    playlists:[],
    playlistModalVideo:{},
    playlist:{videos:[]}
}

export const VideoProvider=({children})=>{
    const [vidState,dispatchVid]=useReducer(vidReducer,initialState)
    useEffect(() => {
        loadVideos(dispatchVid);
      },[]);
    return <VideoContext.Provider value={{vidState,dispatchVid}}>
        {children}
    </VideoContext.Provider>
}