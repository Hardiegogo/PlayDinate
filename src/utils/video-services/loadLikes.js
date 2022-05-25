import axios from 'axios';

export const loadLikes=async(dispatchVid)=>{
  const encodedToken=localStorage.getItem('token')
  dispatchVid({type:"VIDEOS_LOADING"})
    try {
        const res=await axios({
            method:"GET",
            url:"/api/user/likes",
            headers:{authorization:encodedToken}
        })
        if(res.status===200){
            dispatchVid({type:"SET_LIKES",payload:res.data.likes})
        }
    } catch (error) {
        dispatchVid({type:"VIDEOS_ERROR",payload:error})
        console.log("error occured",error)
    }
}