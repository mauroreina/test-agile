import axios from "./config";

export default {
  getData: () => axios.get(`https://mach-eight.uc.r.appspot.com/`),
};
