import axios from "axios";
import { MARVEL_API_KEY } from "~/config/keys";

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
});

api.defaults.params = { apikey: MARVEL_API_KEY };

export { api };
