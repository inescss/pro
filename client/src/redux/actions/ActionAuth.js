//action auth
import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  ADD_JOB,
  DELETE_JOB,
  EDIT_JOB,
  GET_EMPLOYEE,
  GET_EMPLOYEE_FAIL,
  GET_EMPLOYEE_SUCCESS


} from "../Types";
import axios from "axios";

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    let res = await axios.post("/register/register", newUser);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (user,router) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    let res = await axios.post("/login/login", user);
    localStorage.setItem("token", res.data.token);
    console.log(res.data)
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    if (res.data.userRole==="Employee"){
    router.push("/Employee");}
    else  if (res.data.userRole==="admin"){
      router.push("/Admin");}
    else{
      router.push("/Company");
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

// action job
export const addjob = (item) => ({
    type: ADD_JOB,
    payload : item
})

export const deletejob = (id) => ({
    type: DELETE_JOB,
    payload : id
})

export const editJOB = (id,value) => ({
    type: EDIT_JOB,
    payload : {id,value}
})

// action employee lista
export const getEmployeeList = () => async (dispatch) => {
  await dispatch({ type: GET_EMPLOYEE });
  try {
    const employee = await axios.get('/admin/admin');
    dispatch({ type: GET_EMPLOYEE_SUCCESS, payload: employee.data });

  } catch (error) {
    dispatch({ type: GET_EMPLOYEE_FAIL, payload: error.response.data })
  }
}