import { useState, useEffect } from "react";
import { getReviews } from "../api";
import CategoriesInNav from "./CategoriesInNav";
import CategoriesNav from "./CategoriesNav";
import ReviewSection from "./ReviewSection";

const AllReviews = ({ slug, description }) => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);
  if (isLoading)
    return (
      <h3 className="LoadingMsg">
        Please wait whilst loading... <div className="Spinner"></div>
      </h3>
    );
  else {
    return (
      <main>
        <CategoriesInNav>
          <CategoriesNav slug={slug} description={description} />
        </CategoriesInNav>
        <h2 className="AllReviewsTitle">All Reviews</h2>
        <ReviewSection reviews={reviews} />
      </main>
    );
  }
};
export default AllReviews;
