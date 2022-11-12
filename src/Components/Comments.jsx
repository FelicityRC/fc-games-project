import { useState, useEffect } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const { review_id } = useParams();

  useEffect(() => {
    api.getComments(review_id).then((comments) => {
      if (!comments) {
        setComments([]);
      } else setComments(comments);
    });
  }, [review_id]);

  return (
    <>
      <section className="CommentsContainer">
        <PostComment setComments={setComments} />

        {comments.map(({ comment_id, author, body, votes, created_at }) => {
          return (
            <CommentCard
              key={comment_id}
              comment_id={comment_id}
              author={author}
              body={body}
              votes={votes}
              created_at={created_at}
            />
          );
        })}
      </section>
    </>
  );
};
export default Comments;
