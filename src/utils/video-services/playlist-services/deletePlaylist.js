import axios from 'axios';

export const deletePlaylist=async(playlistId,dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"DELETE",
            url:`/api/user/playlists/${playlistId}`,
            headers:{authorization:encodedToken}
        })
        if(response.status===200){
            dispatchVid({type:"UPDATE_PLAYLISTS",payload:response.data.playlists})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}