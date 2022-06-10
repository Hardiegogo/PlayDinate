import axios from "axios"
export const addtoPlaylist=async(video,playlist,dispatchVid,vidState)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const response=await axios({
            method:"POST",
            url:`/api/user/playlists/${playlist._id}`,
            headers:{authorization:encodedToken},
            data:{video}

        })
        if(response.status===201){
            const updatedPlaylist=response.data.playlist
            const newPlaylists=vidState.playlists.map(item=>{if(item._id===updatedPlaylist._id){return updatedPlaylist}else return item})
            dispatchVid({type:"UPDATE_PLAYLISTS",payload:newPlaylists})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}
