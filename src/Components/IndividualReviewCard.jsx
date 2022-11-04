import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById } from "../api";
import Votes from "./Votes"

const IndividualReviewCard = () => {
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 

  const { review_id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((singleReview) => {
      setSingleReview(singleReview);
      setIsLoading(false);
    }).catch((error) => {
      setError("404: Page Not Found");
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
  else
    return (
      <>
        {error ? (
          <p className="errorMsg">{error}</p>
        ) : (
          <>
            <Link key={review_id} to={"/reviews"}>
          <button className="BackButton">Back</button>
          </Link>
        <span className="IndividualReviewAndImage">
          <section className="IndividualReview" style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "30px" }}>{singleReview.title}</h3>
            <p>Review: {singleReview.review_body}</p>
            <br></br>
            <p style={{ fontStyle: "italic" }}>
              Category: {singleReview.category}
            </p>
            <p style={{ fontStyle: "italic" }}>Owner: {singleReview.owner}</p>
            <p style={{ fontStyle: "italic" }}>
              Designer: {singleReview.designer}
            </p>
            <p style={{ fontStyle: "italic" }}>
              Created: {singleReview.created_at}
            </p>
          <Votes review_id={singleReview.review_id} votes={singleReview.votes}/>
            <p style={{ fontStyle: "italic" }}>
              Comments: {singleReview.comment_count}
            </p>
          </section>
          <img
            className="IndividualReviewImage"
            src={singleReview.review_img_url}
            alt={singleReview.title}
          ></img>
        </span>
        </>
        )}
      </>
    );
};

export default IndividualReviewCard;
