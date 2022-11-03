import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-project5.herokuapp.com/api",
});

export const getBaseURL = (home) => {
  let path = "/";
  if (home) path += home;
  console.log(path, "path");
  return myApi.get(`${path}`).then((res) => {
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

export const getReviewById = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
