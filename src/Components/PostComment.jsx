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
          <textarea
            placeholder=" Leave your thoughts here... "
            className="InputComment"
            name="comment"
            id="comment"
            onChange={handleChange}
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className="SubmitComment" type="submit">
            Submit
          </button>
        </form>
      </section>
      <br></br>
      <p className="CommentsHeading">COMMENTS</p>
    </>
  );
};

export default PostComment;
