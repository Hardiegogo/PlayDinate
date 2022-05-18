import axios from "axios";
export const loginUser = async (e,user, dispatchAuth,navigate) => {
    e.preventDefault()
  try {
    const response = await axios({
      url: "/api/auth/login",
      method: "POST",
      data: { ...user },
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      dispatchAuth({ type: "LOGIN_USER", payload: response.data.foundUser });
      navigate('/videos')
    }
  } catch (error) {
      console.log("error occured",error)
  }
};
