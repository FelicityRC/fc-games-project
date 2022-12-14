import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getReviews } from "../api";
import CategoriesInNav from "./CategoriesInNav/CategoriesInNav";
import ReviewSection from "./ReviewSection";

const AllReviews = () => {
  const search = useLocation().search;

  const searchParams = new URLSearchParams(search);

  const currentCategoryQuery = searchParams.get("category");
  const currentSortByQuery = searchParams.get("sort_by");
  const currentOrderByQuery = searchParams.get("order_by");

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviews(currentCategoryQuery, currentSortByQuery, currentOrderByQuery)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("404: Page Not Found");
        setIsLoading(false);
      });
  }, [currentCategoryQuery, currentSortByQuery, currentOrderByQuery]);

  if (isLoading)
    return (
      <h3 className="LoadingMsg">
        Please wait whilst loading... <div className="Spinner"></div>
      </h3>
    );
  else {
    const title = currentCategoryQuery || "All Reviews";
    return (
      <main>
        {error && <p className="errorMsg">{error}</p>}
        <CategoriesInNav
          currentCategoryQuery={currentCategoryQuery}
          currentOrderByQuery={currentOrderByQuery}
          currentSortByQuery={currentSortByQuery}
        />
        <h2 className="AllReviewsTitle">{title}</h2>
        <ReviewSection reviews={reviews} />
      </main>
    );
  }
};
export default AllReviews;
