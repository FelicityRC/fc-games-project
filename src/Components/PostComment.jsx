import { useParams } from "react-router-dom"
import { useState } from "react";
import * as api from "../api";

const PostComment = ({setComments}) => {

const { review_id } = useParams();
    const [newComment, setNewComment] = useState("");

const handleChange = (event)=>{
setNewComment(event.target.value)
} 

const handleSubmit = (event) => {
event.preventDefault();
api.postCommentByReviewId(newComment, review_id, "cooljmessy").then((res)=>{
    setComments((currentComments)=>{
return [res, ...currentComments]
    })
})
}



return (
<fieldset>Post a Comment!
    <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment: </label>
        <input onChange={handleChange} id="comment" type="text" />
        <button type="submit">Submit</button>
    </form>

    </fieldset>

)

}


export default PostComment;