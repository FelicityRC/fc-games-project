import { useState, useEffect } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import { useParams, Link } from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const { review_id } = useParams();
    console.log(review_id, "in comments review_id")
    
  useEffect(() => {
    setIsLoading(true);
    api.getComments(review_id).then((comments) =>{
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading)
    return (
      <>
        <h3 className="LoadingMsg">
          Please wait whilst loading... <div className="Spinner"></div>
        </h3>
      </>
    );
else {
    return (
        <>
         <Link key={review_id} to={"/reviews"}>
              <button className="BackButton">back</button>
            </Link>
        <section className="CommentsContainer">
        {comments.map(({comment_id, author, body, votes, created_at})=>{
            return (
            <CommentCard key={comment_id} comment_id={comment_id} author={author} body={body} votes={votes} created_at={created_at}/>
            )
        })}
        </section>
        </>
    )
}
};
export default Comments;
