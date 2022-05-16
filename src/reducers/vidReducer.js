export const vidReducer=(state,action)=>{
    switch(action.type){
        case "VIDEOS_LOADING":
            return{
                ...state,
                vidsLoading:true
            }
        case "SET_VIDEOS":
            return{
                ...state,
                vidsLoading:false,
                videos:action.payload
            }
        case "VIDEOS_ERROR":
            return{
                ...state,
                vidsLoading:false,
                error:action.payload
            }
        default:
            return state
    }
}