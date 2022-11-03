import { Link } from "react-router-dom";

const ReviewSection = (props) => {
  const { reviews } = props;

  return (
    <ul className="AllReviewsContainer">
      {reviews.map((review) => {
        return (
          <li
            style={{ marginTop: 20 }}
            className="AllReviews"
            key={review.review_id}
          >
            <h3 style={{ marginTop: 10 }}>{review.title}</h3>
            <p>Category: {review.category}</p>
            <img
              className="ReviewsImages"
              src={review.review_img_url}
              width="170"
              height="130"
              alt={review.title}
            ></img>
            <p>Votes: {review.votes}</p>
            <p>Comments: {review.comment_count}</p>
            <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
              <button className="ViewButton">View</button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewSection;
