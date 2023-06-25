import axios from "axios";

export const API = axios.create({
  baseURL: "https://type.fit/api",
});