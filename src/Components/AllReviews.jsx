import { useState, useEffect } from "react";
import { getReviews } from "../api";

const AllReviews = () => {

const [reviews, setReviews] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
        console.log(reviews)
        setReviews(reviews);
        setIsLoading(false);
    });
}, []);

if (isLoading) return <h3 className="LoadingMsg">Please wait whilst loading...</h3>;

else

return (
<main>
<h2 className="AllReviewsTitle">All Reviews</h2>
<ul className="AllReviewsContainer">
    {reviews.map((review) => {
        return (
         <li className="AllReviews" key={review.review_id}>
         <h3>{review.title}</h3>
         <p>Category: {review.category}</p>
         <img src={review.review_img_url} width="170" height="140" alt={review.title}></img>
         <p>Votes: {review.votes}</p>
         <p>Comments: {review.comment_count}</p>
                  </li>
         )
    })}
</ul>

</main>
)

}

export default AllReviews;