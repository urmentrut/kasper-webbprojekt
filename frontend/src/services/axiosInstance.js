import axios, { Axios } from "axios";

const axiosInstance = axios.create ({
    baseURL:"http://localhost:5000/",
    timeout: 10000,
    withCredentials: true
})

export default axiosInstance