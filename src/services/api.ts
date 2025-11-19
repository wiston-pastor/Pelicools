import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);
console.log("API KEY:", import.meta.env.VITE_API_KEY);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "es-ES",
  },
});

export default api;
