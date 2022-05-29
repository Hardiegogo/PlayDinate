import axios from "axios";
export const addToWatchLater=async(video,dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"POST",
            url:"/api/user/watchlater",
            headers:{authorization:encodedToken},
            data:{video}
        })
        if(response.status===201){
            dispatchVid({type:"ADD_TO_WATCHLATER",payload:response.data.watchlater})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}