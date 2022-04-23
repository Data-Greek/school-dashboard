import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
} from "../Constants/userConstants";

export const userActions = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    // Configuration de l'envoi
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    //Envoi des informations vers Django
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/users/login",
      { username: username, password: password },
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.reponse && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
