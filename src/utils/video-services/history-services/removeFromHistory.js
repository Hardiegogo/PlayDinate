import axios from "axios"
export const removeFromHistory=async(video,dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
      const response=await axios({
        method:"DELETE",
        url:`/api/user/history/${video._id}`,
        headers:{authorization:encodedToken}
      })
     if(response.status===200){
       dispatchVid({type:"REMOVE_FROM_HISTORY",payload:response.data.history})
     }
    } catch (error) {
      
    }
  }