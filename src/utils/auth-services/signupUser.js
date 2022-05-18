import axios from "axios"
export const signupUser=async (e,user,dispatchAuth,navigate)=>{
    e.preventDefault()
    try {
        const response=await axios({
            url:"/api/auth/signup",
            method:"POST",
            data:{...user}
        })
        if(response.status===201){
            localStorage.setItem('token',response.data.encodedToken)
            let newUser={...response.data.createdUser}
            delete newUser.password
            localStorage.setItem('user',JSON.stringify(newUser))
            dispatchAuth({type:"SIGNUP_USER",payload:newUser})
            navigate('/videos')
        }
    } catch (error) {
        
    }
}