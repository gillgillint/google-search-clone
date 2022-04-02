import axios from "axios";
const baseUrl = process.env.REACT_APP_GOOGLE_SEARCH_URL;

const googleSearch = axios.create({
  baseURL: baseUrl,
  headers: {
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      "X-RapidAPI-Key": "70ba607cd4mshd6b74b1cdb832dcp135aa3jsn573c3565cfdb",
    },
  },
});



// get /video /image /search
export const getResult = async (type) => {
  const res = await googleSearch.get(type);

  return res.data;
};
