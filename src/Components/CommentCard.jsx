const CommentCard = ({ comment_id, author, body, votes, created_at }) => {
 
  return (
    <li className="Comments" key={comment_id}>
      <h3 className="Author">Author: {author}</h3>
      <p className="pComment">{body}</p>
      <p className="pVotes">Votes: {votes}</p>
      <p>Created: {created_at}</p>
    </li>
  );
};

export default CommentCard;
