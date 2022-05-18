export const authReducer=(state,action)=>{
    switch(action.type){
        case "SIGNUP_USER":
        case "LOGIN_USER":
            return{
                ...state,
                isUserActive:true,
                userDetails:action.payload
            }
        case "LOGOUT_USER":
            return{
                ...state,
                isUserActive:false,
                userDetails:{}
            }
        default:
            return state
    }
    
}