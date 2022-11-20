import * as moment from "moment";

const CommentCard = ({ comment_id, author, body, votes, created_at }) => {
  return (
    <li className="Comments" key={comment_id}>
      <h3>User: {author}</h3>
      <p className="CommentBody">{body}</p>
      <p>Votes: {votes}</p>
      <br></br>
      <p>Date Posted: {moment(created_at).format("DD/MM/YYYY")}</p>
    </li>
  );
};

export default CommentCard;
