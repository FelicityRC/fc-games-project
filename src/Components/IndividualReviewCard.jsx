import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById } from "../api";
import * as moment from "moment";
import Votes from "./Votes";
import Comments from "./Comments";

const IndividualReviewCard = () => {
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((singleReview) => {
        setSingleReview(singleReview);
        setIsLoading(false);
      })
      .catch((error) => {
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
              <button className="BackButton">
                BACK TO <br></br>ALL REVIEWS
              </button>
            </Link>
            <span className="IndividualReviewAndImage">
              <section
                className="IndividualReview"
                style={{ textAlign: "center" }}
              >
                <h3 style={{ fontSize: "30px" }}>{singleReview.title}</h3>
                <p style={{ fontStyle: "italic" }}>
                  Category: {singleReview.category}
                </p>
                <p style={{ fontStyle: "italic" }}>
                  Posted:{moment(singleReview.created_at).format("DD/MM/YYYY")}
                </p>
                <p>
                  Review:<br></br>
                  <br></br> {singleReview.review_body}
                </p>
                <br></br>
                <p style={{ fontStyle: "italic" }}>
                  Owner: {singleReview.owner}
                </p>
                <p style={{ fontStyle: "italic" }}>
                  Designer: {singleReview.designer}
                </p>
                <p style={{ fontStyle: "italic" }}>
                  Comments: {singleReview.comment_count}
                </p>
                <Votes
                  review_id={singleReview.review_id}
                  votes={singleReview.votes}
                />

                <img
                  className="IndividualReviewImage"
                  src={singleReview.review_img_url}
                  alt={singleReview.title}
                ></img>
              </section>
              <Comments />
            </span>
          </>
        )}
      </>
    );
};

export default IndividualReviewCard;
