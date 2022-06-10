import axios from 'axios';

export const loadPlaylists=async(dispatchVid)=>{
  const encodedToken=localStorage.getItem('token')
  try {
    const response=await axios({
      method:"GET",
      url:"/api/user/playlists",
      headers:{authorization: encodedToken}
    })
    if(response.status===200){
      dispatchVid({type:"SET_PLAYLISTS",payload:response.data.playlists})
    }
  } catch (error) {
    
  }
}