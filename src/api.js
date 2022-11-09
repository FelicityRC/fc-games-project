import axios from "axios";

//"http://localhost:9090/api"

const myApi = axios.create({
  baseURL: "https://nc-games-project5.herokuapp.com/api",
});

export const getBaseURL = (home) => {
  let path = "/";
  if (home) path += home;
  return myApi.get(`${path}`).then((res) => {
    return res.data;
  });
};

export const getReviews = (category, sort_by, order) => {
  // Expand the params to add in orderBy, sortBy
  return myApi
    .get("/reviews", { params: { category, sort_by, order } })
    .then((res) => {
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

export const postCommentByReviewId = (body, review_id, username) => {
  console.log(body, review_id, username);
  const newComment = {
    username: username,
    body: body,
  };
  return myApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then((res) => {
      return res.data.postedComment;
    });
};
