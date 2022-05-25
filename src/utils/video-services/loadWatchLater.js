import axios from 'axios';

export const loadWatchLater=async(dispatchVid)=>{
  const encodedToken=localStorage.getItem('token')
  dispatchVid({type:"VIDEOS_LOADING"})
    try {
        const res=await axios({
            method:"GET",
            url:"/api/user/watchlater",
            headers:{authorization:encodedToken}
        })
        if(res.status===200){
            dispatchVid({type:"SET_WATCH_LATER",payload:res.data.watchlater})
        }
    } catch (error) {
        dispatchVid({type:"VIDEOS_ERROR",payload:error})
        console.log("error occured",error)
    }
}