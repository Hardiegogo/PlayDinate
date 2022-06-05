import axios from "axios"
export const addToHistory=async(dispatchVid,video)=>{
    const encodedToken=localStorage.getItem('token')
    try {
      const response=await axios({
        method:"POST",
        url:"/api/user/history",
        headers:{authorization:encodedToken},
        data:{video}
      })
      if(response.status===201){
        dispatchVid({type:"ADD_TO_HISTORY",payload:response.data.history})
      }
    } catch (error) {
      
    }
  }