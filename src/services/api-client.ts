import axios, { AxiosError, CanceledError } from "axios";
import { BASE_URL } from "../config";

export { AxiosError, CanceledError };

export default axios.create({
  baseURL: BASE_URL,
});
