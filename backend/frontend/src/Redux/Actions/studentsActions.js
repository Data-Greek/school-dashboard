import axios from "axios";
import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
} from "../Constants/studentsConstants";

export const studentsActions = () => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LIST_REQUEST });

    //API CALL
    const { data } = await axios.get(
      "https://dashboard-school-pt.herokuapp.com/api/"
    );

    dispatch({ type: STUDENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDENT_LIST_FAIL,
      payload:
        error.reponse && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
