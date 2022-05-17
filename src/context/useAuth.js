import { createContext ,useReducer,useContext} from "react";
import { authReducer } from "../reducers/authReducer";
const AuthContext=createContext(null)

export const useAuth=()=>useContext(AuthContext)

const initalAuthState={
    isUserActive:localStorage.getItem("token")?true:false,
    userDetails:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{}
}

export const AuthProvider=({children})=>{
    const [authState,dispatchAuth]=useReducer(authReducer,initalAuthState)
    return <AuthContext.Provider value={{authState,dispatchAuth}}>
        {children}
    </AuthContext.Provider>
}