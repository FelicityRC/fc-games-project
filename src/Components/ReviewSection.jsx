import { Link } from "react-router-dom";
import * as moment from "moment";

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
            <p>Posted: {moment(review.created_at).format("DD/MM/YYYY")}</p>
            <img
              className="ReviewsImages"
              src={review.review_img_url}
              alt={review.title}
            ></img>
            <p>Owner: {review.owner}</p>
            <p>Designer: {review.designer}</p>
            <p>Comments: {review.comment_count}</p>
            <p>Votes: {review.votes}</p>
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
