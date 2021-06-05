const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 40000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const fetcher = (url) => {
  return instance.get(url).then((res) => {
    const result = res.data;
    if (!result) {
      console.log("Something Error");
    }
    return result;
  });
};

export default instance;
