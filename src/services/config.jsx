import axios from "axios";

const instance = axios.create({
  baseURL: "",
  headers: {
    "Access-Control-Allow-Origin": "XMLHttpRequest",
  },
});

export default instance;
