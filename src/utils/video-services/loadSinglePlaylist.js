import axios from 'axios';

export const loadSinglePlaylist=async(vidState,dispatchVid,id,setIsSpinner)=>{
    const encodedToken=localStorage.getItem('token')
    
    try {
        const response=await axios({
            method:"GET",
            url:`/api/user/playlists/${id}`,
            headers:{authorization:encodedToken}
        })
        if(response.status===200){
            dispatchVid({type:"SET_PLAYLIST",payload:response.data.playlist})
        }
    } catch (error) {
        console.log("error occured",error)
    }
    finally{
        setIsSpinner(false)
    }
}
