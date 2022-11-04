import axios from "axios";

const myApi = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const getBaseURL = (home) => {
  let path = "/";
  if (home) path += home;
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

export const patchVotes = (review_id, number) => {
  return myApi
    .patch(`/reviews/${review_id}`, { inc_votes: number })
    .then((res) => {
      return res.data.review;
    });
};

export const getComments = (review_id) => {
  return myApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
