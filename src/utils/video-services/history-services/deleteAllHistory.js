import axios from "axios";

export const deleteAllHistory=async(dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"DELETE",
            url:"/api/user/history/all",
            headers:{authorization:encodedToken}
        })
        if(response.status===200){
            dispatchVid({type:"DELETE_HISTORY",payload:response.data.history})
        }           
    } catch (error) {
        
    }
}