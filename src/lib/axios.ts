import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://capablespade-us.backendless.app",
});
