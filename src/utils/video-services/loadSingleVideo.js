import axios from "axios";
export const loadSingleVideo = async (id, dispatchVid,setIsSpinner) => {
  setIsSpinner(true)
  try {
    const response = await axios({
      method: "GET",
      url: `/api/video/${id}`,
    });
    if (response.status === 200) {
      dispatchVid({ type: "SET_VIDEO", payload: response.data.video });
    }
  } catch (error) {
    console.log("error occured",error)
  }finally{
    setIsSpinner(false)
  }
};
