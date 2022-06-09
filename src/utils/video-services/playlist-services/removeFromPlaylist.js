import axios from "axios";

export const removeFromPlaylist = async (
  vidState,
  video,
  dispatchVid,
  playlistId
) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistId}/${video._id}`,
      headers: { authorization: encodedToken },
    });
    if (response.status === 200) {
      const updatedPlaylist = response.data.playlist;
      const newPlaylists = vidState.playlists.map((item) => {
        if (item._id === updatedPlaylist._id) {
          return updatedPlaylist;
        } else return item;
      });
      dispatchVid({ type: "UPDATE_PLAYLISTS", payload: newPlaylists });
      dispatchVid({ type: "UPDATE_PLAYLIST", payload: response.data.playlist });
    }
  } catch (error) {
    console.log("error occured", error);
  }
};
