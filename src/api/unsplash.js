import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID SofAcIQC-ulDfpfQKErC352ZSHbbgOJYKkepIYX9qOY",
  },
});
