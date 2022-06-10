import axios from "axios"
export const addNewPlaylist=async(playlistTitle,dispatchVid)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"POST",
            url:"/api/user/playlists",
            headers:{authorization:encodedToken},
            data:{playlist:{title:playlistTitle}}
        })
        if(response.status===201){
            dispatchVid({type:"ADD_PLAYLIST",payload:response.data.playlists})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}
