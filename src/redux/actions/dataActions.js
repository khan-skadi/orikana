import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
} from "../types.js";
import axios from "axios";

// Get all screams
export const getScreams = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });

  axios
    .get("/screams")
    .then((res) => {
      dispatch({
        type: SET_SCREAMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SCREAMS,
        payload: [],
      });
    });
};

// Like a scream

// Unlike a scream
