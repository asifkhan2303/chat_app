import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:3000/api" // Corrected backend URL with port and API prefix
    : "/api", // Production path
  withCredentials: true, // Send cookies along with requests
});