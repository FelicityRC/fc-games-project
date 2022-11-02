import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-project5.herokuapp.com/api",
});

export const getBaseURL = (home) => {
  return myApi.get(`/${home}`).then((res) => {
    return res.data;
  });
};

export const getReviews = (category) => {
  return myApi.get("/reviews", { params: { category } }).then((res) => {
    return res.data.reviews;
  });
};

export const getCategories = () => {
  return myApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};
