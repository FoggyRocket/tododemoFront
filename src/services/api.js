/**
 * este archivo es para crear la instancia de axios para mandar nuestros peticiones
 */
import axios from 'axios';

//crear un const para validar si mi aplicacion esta en produccion o esta en local

const isProduction = process.env.NODE_ENV === "production";


//si la app ya esta en produccion hara peticion a heroku
                                    //prod                                         develop
const baseURL = isProduction  ? "https://tinderperritos.herokuapp.com/api" : "http://localhost:5005/api";


export const api = axios.create({
    baseURL,//:"https://tinderperritos.herokuapp.com/api",
    withCredentials:true,
    timeout:10000
})


//api.post("/laruta")
//axios.post("http://www.tinder.com/api/auth/algo")