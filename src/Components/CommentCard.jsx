const CommentCard = ({ comment_id, author, body, votes, created_at }) => {
 
  return (
    <li className="Comments" key={comment_id}>
      <h3>Author: {author}</h3>
      <p>Comment: {body}</p>
      <p>Votes: {votes}</p>
      <p>Created: {created_at}</p>
    </li>
  );
};

export default CommentCard;
