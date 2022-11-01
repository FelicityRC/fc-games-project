const ReviewSection = (props) => {
  const { reviews } = props;

  return (
    <ul className="AllReviewsContainer">
      {reviews.map((review) => {
        return (
          <li className="AllReviews" key={review.review_id}>
            <h3>{review.title}</h3>
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
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewSection;
