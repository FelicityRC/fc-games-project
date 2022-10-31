import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-project5.herokuapp.com/api",
});

export const getReviews = () => {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
