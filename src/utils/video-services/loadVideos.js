import axios from "axios"
export const loadVideos=async(dispatchVid)=>{
    dispatchVid({type:"VIDEOS_LOADING"})
    try {
        const res=await axios({
            method:"GET",
            url:"/api/videos"
        })
        if(res.status===200){
            dispatchVid({type:"SET_VIDEOS",payload:res.data.videos})
        }
    } catch (error) {
        dispatchVid({type:"VIDEOS_ERROR",payload:error})
        console.log("error occured",error)
    }
}