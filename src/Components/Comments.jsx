import { useState, useEffect } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
       
    const { review_id } = useParams();
    
  useEffect(() => {
    setIsLoading(true);
    api.getComments(review_id).then((comments) =>{
      if (!comments) { 
        setComments([])
      } else
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
        <section className="CommentsContainer">
        
        <PostComment setComments={setComments}/>

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
