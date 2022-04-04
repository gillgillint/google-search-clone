import axios from 'axios';

const googleSearch = axios.create({
  baseURL: 'https://google-search3.p.rapidapi.com/api/v1',
  headers: {
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'EU',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
    'X-RapidAPI-Key': `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  },
});

// get /video /image /search
export const getResult = async (type) => {
  const res = await googleSearch.get(type);

  console.log(res.data);
  if (type.includes('/news')) {
    return res.data.entries;
  } else if (type.includes('/image')) {
    return res.data.image_results;
  } else {
    return res.data.results;
  }
};
