import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesNav from "../CategoriesNav";
import "./CategoriesInNav.css";

const sortByQueries = ["created_at", "designer", "owner", "title", "votes"];

const orderByQueries = ["asc", "desc"];

const CategoriesInNav = ({
  currentCategoryQuery,
  currentOrderByQuery,
  currentSortByQuery,
}) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const navigate = useNavigate();

  const handleSortByClick = (event) => {
    event.preventDefault();
    const selectedSortByQuery = event.target.innerText;

    let newLocationPath = `/reviews?sort_by=${selectedSortByQuery}`;

    if (currentCategoryQuery) {
      newLocationPath += `&category=${currentCategoryQuery}`;
    }
    if (currentOrderByQuery) {
      newLocationPath += `&order_by=${currentOrderByQuery}`;
    }

    navigate(newLocationPath);
  };

  const handleOrderByClick = (event) => {
    event.preventDefault();
    const selectedOrderByQuery = event.target.innerText;

    let newLocationPath = `/reviews?order_by=${selectedOrderByQuery}`;

    if (currentCategoryQuery) {
      newLocationPath += `&category=${currentCategoryQuery}`;
    }
    if (currentSortByQuery) {
      newLocationPath += `&sort_by=${currentSortByQuery}`;
    }

    navigate(newLocationPath);
  };

  return (
    <>
      <section className="NavBar">
        <div className="Navigation">
          <button
            className="NavHeadings"
            onClick={() => {
              setShowCategories(!showCategories);
            }}
          >
            {showCategories ? "➖Categories" : "➕Categories"}
          </button>
          <button
            className="NavHeadings"
            onClick={() => {
              setShowSortOptions(!showSortOptions);
            }}
          >
            {showSortOptions ? "➖Sort By" : "➕Sort By"}
          </button>
          <button
            className="NavHeadings"
            onClick={() => {
              setShowOrderOptions(!showOrderOptions);
            }}
          >
            {showOrderOptions ? "➖Order" : "➕Order"}
          </button>
        </div>
      </section>
      {showCategories && (
        <CategoriesNav
          currentSortByQuery={currentSortByQuery}
          currentOrderByQuery={currentOrderByQuery}
        />
      )}
      <div className="SortByList">
        {showSortOptions && (
          <ul className="CategoriesNav">
            {sortByQueries.map((query) => {
              return (
                <p
                  className="QueriesMapped"
                  key={query}
                  onClick={handleSortByClick}
                >
                  {query}
                </p>
              );
            })}
          </ul>
        )}
      </div>
      <div className="OrderByList">
        {showOrderOptions && (
          <ul className="CategoriesNav">
            {orderByQueries.map((query) => {
              return (
                <p
                  className="QueriesMapped"
                  key={query}
                  onClick={handleOrderByClick}
                >
                  {query}
                </p>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default CategoriesInNav;
