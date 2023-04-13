import axios from "axios";
import {
  ALL_BLOG_FAIL,
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  DETAILS_FAIL,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
  DETAILS_RESET,
  CLEAR_ERRORS,
} from "../constant/dataConstant";
 const domain = "https://bizglamoback-production.up.railway.app";
 

export const addDetails = (details_Data) => async (dispatch) => {
  console.log(details_Data,"action")
  try {
    dispatch({ type:DETAILS_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `${domain}/api/v2/send_details`,
      details_Data,
      config
    );
    console.log(data);
    dispatch({
      type: DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getAllBlog = () => async(dispatch)=>{
  try{
    dispatch({type:ALL_BLOG_REQUEST});
    let link = `${domain}/api/v2/all/blog`;
    const {data} = await axios.get(link)
    console.log(data,"prince");
    dispatch({
      type:ALL_BLOG_SUCCESS,
      payload:data,
    })
  }catch(error){
    dispatch({
      type:ALL_BLOG_FAIL,
      payload:`${error.response.data.message}`,
    });

  }
}
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


















