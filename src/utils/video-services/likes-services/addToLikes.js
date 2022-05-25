import axios from "axios"

export const addToLikes=async(video,dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"POST",
            url:"/api/user/likes",
            headers:{authorization:encodedToken},
            data:{video:video}
        })
        if(response.status===201){
            dispatchVid({type:"ADD_TO_LIKES",payload:response.data.likes})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}