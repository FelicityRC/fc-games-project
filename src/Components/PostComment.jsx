import { useParams } from "react-router-dom";
import { useState } from "react";
import * as api from "../api";

const PostComment = ({ setComments }) => {
  const { review_id } = useParams();
  const [newComment, setNewComment] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .postCommentByReviewId(newComment, review_id, "cooljmessy")
      .then((res) => {
        setComments((currentComments) => {
          return [res, ...currentComments];
        });
      });
  };

  return (
    <>
      <section className="PostCommentBox">
        <form className="TextField" onSubmit={handleSubmit}>
          <p className="PostCommentText">Post a Comment ⤦</p>
          <label htmlFor="comment"></label>
          <input
            placeholder=" Leave your thoughts here..."
            className="InputComment"
            onChange={handleChange}
            id="comment"
            type="text"
          />
          <button className="SubmitComment" type="submit">
            Submit
          </button>
        </form>
      </section>
      <p className="CommentsHeading">COMMENTS</p>
    </>
  );
};

export default PostComment;
