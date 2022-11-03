import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../api";
import ReviewSection from "./ReviewSection";
import CategoriesNav from "./CategoriesNav";
import CategoriesInNav from "./CategoriesInNav";

const ReviewsByCategory = ({ slug }) => {
  const { category } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("404: Page Not Found");
        setIsLoading(false);
      });
  }, [category]);

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
        {" "}
        {error ? (
          <p className="errorMsg">{error}</p>
        ) : (
          <section>
            <h3 className="CategoryTitle">{category}</h3>

            <CategoriesInNav>
              <CategoriesNav slug={slug} />
            </CategoriesInNav>
            <ReviewSection reviews={reviews} />
          </section>
        )}
      </>
    );
};

export default ReviewsByCategory;
