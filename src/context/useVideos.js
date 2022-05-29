import { createContext, useContext,useReducer } from "react";
import { vidReducer } from "../reducers/vidReducer";
const VideoContext=createContext(null)

export const useVideos=()=>useContext(VideoContext)

const initialState={
    videos:[],
    vidsLoading:'',
    error:'',
    likedVideos:[],
    watchLaterVideos:[]
}

export const VideoProvider=({children})=>{
    const [vidState,dispatchVid]=useReducer(vidReducer,initialState)
    return <VideoContext.Provider value={{vidState,dispatchVid}}>
        {children}
    </VideoContext.Provider>
}