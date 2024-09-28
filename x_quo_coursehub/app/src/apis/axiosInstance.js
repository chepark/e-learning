import axios from "axios";
import { BASE_URL, SERVICENOW_CREDENTIALS } from "./constant";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Basic " + btoa(SERVICENOW_CREDENTIALS),
  },
});

export default axiosInstance;
