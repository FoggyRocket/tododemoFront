//import api // default donte tengo mi urlBase 
import {api} from './api';
                            //data = {email:Dylan@..,password:"perrros"}
//Login                      <https://tinder/api>/auth/login
export const loginWs = (data) => api.post("/auth/login", data) ; //le falta el .then y .catch
//Signup
export const signupWs = (data) => api.post("/auth/signup",data)
//Logout
export const logoutWs = () => api.get("/auth/logout")