import axios from "axios";
export const loadHistory = async (dispatchVid) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "GET",
      url: "/api/user/history",
      headers: { authorization: encodedToken },
    });
    if (response.status === 200) {
      dispatchVid({ type: "SET_HISTORY", payload: response.data.history });
    }
  } catch (error) {
    console.log("error occured", error);
  }
};
