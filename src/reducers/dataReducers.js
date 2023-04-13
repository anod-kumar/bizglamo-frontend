import {
    DETAILS_FAIL,
    DETAILS_REQUEST,
    DETAILS_SUCCESS,
    DETAILS_RESET,
    ALL_BLOG_FAIL,
    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    CLEAR_ERRORS,
  } from "../constant/dataConstant";
  
  export const BlogReducer = (state = { Blog: [] }, action) => {
      console.log(action);
    switch (action.type) {
      case ALL_BLOG_REQUEST:
        return {
          loading: true,
          BlogAll: [],
        };
      case ALL_BLOG_SUCCESS:
        return {
          loading: false,
          BlogAll: action.payload.blogAll,
          BlogCount: action.payload.blogCount,
        };
      case ALL_BLOG_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


  export const newDataReducer = (state = { dataDetails: {} }, action) => {
    console.log(action);
    switch (action.type) {
      case DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DETAILS_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          Details: action.payload.details,
        };
      case DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DETAILS_RESET:
          return {
            ...state,
            success: false,
          };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };




