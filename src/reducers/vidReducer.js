export const vidReducer = (state, action) => {
  switch (action.type) {
    case "VIDEOS_LOADING":
      return {
        ...state,
        vidsLoading: true,
      };
    case "SET_VIDEOS":
      return {
        ...state,
        vidsLoading: false,
        videos: [...action.payload],
      };
    case "VIDEOS_ERROR":
      return {
        ...state,
        vidsLoading: false,
        error: action.payload,
      };
    case "REMOVE_FROM_LIKES":
    case "ADD_TO_LIKES":
    case "SET_LIKES":
      return {
        ...state,
        likedVideos: [...action.payload],
      };
    case "ADD_TO_WATCHLATER":
    case "REMOVE_FROM_WATCHLATER":
    case "SET_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [...action.payload],
      };
    case "SET_VIDEO":
      return {
        ...state,
        video: { ...action.payload },
      };
    case "CLEAR_VID":
      return{
        ...state,
        video:{}
      }
    case "SET_HISTORY":
    case "ADD_TO_HISTORY":
    case "REMOVE_FROM_HISTORY":
    case "DELETE_HISTORY":
      return {
        ...state,
        history: [...action.payload],
      };
    case "SET_PLAYLIST_MODAL_ON":
      return{
        ...state,
        isPlaylistModal:true,
        playlistModalVideo:{...action.payload}
      }
    case "SET_PLAYLIST_MODAL_OFF":
      return{
        ...state,
        isPlaylistModal:false,
        playlistModalVideo:{}
      }
    case "ADD_PLAYLIST":
    case "UPDATE_PLAYLISTS":
    case "SET_PLAYLISTS":
      return{
        ...state,
        playlists:[...action.payload]
      }
    case "SET_PLAYLIST":
    case "UPDATE_PLAYLIST":
      return{
        ...state,
        playlist:{...action.payload}
      }
    default:
      return state;
  }
};
