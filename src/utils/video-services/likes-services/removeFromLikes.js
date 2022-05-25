import axios from "axios"
export const removeFromLikes=async(video,dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"DELETE",
            url:`/api/user/likes/${video._id}`,
            headers:{authorization:encodedToken}
        })
        if(response.status===200){
            dispatchVid({type:"REMOVE_FROM_LIKES",payload:response.data.likes})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}