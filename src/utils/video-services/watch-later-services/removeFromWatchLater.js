import axios from "axios";
export const removeFromWatchLater=async(video,dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"DELETE",
            url:`/api/user/watchlater/${video._id}`,
            headers:{authorization:encodedToken}
        })
        if(response.status===200){
            dispatchVid({type:"REMOVE_FROM_WATCHLATER",payload:response.data.watchlater})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}