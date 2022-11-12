import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesNav from "../CategoriesNav";
import "./CategoriesInNav.css";

const sortByQueries = [
  "title",
  "designer",
  "owner",
  "category",
  "created_at",
  "votes",
];

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

  const handleOrderClick = (event) => {
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
      <div className="CloseButtonInList">
        <div className="Navigation">
          <button
            className="CategoriesOpenClosed"
            onClick={() => {
              setShowCategories(!showCategories);
            }}
          >
            {showCategories ? "Categories" : "Categories"}
          </button>
          <button
            className="Modifier"
            onClick={() => {
              setShowSortOptions(!showSortOptions);
            }}
          >
            Sort By
          </button>
          <button
            className="Modifier"
            onClick={() => {
              setShowOrderOptions(!showOrderOptions);
            }}
          >
            Order
          </button>

          {showCategories && (
            <CategoriesNav
              currentSortByQuery={currentSortByQuery}
              currentOrderByQuery={currentOrderByQuery}
            />
          )}

          {showSortOptions && (
            <ul className="CategoriesNav">
              {sortByQueries.map((query) => {
                return (
                  <p key={query} onClick={handleSortByClick}>
                    {query}
                  </p>
                );
              })}
            </ul>
          )}

          {showOrderOptions && (
            <ul className="CategoriesNav">
              {orderByQueries.map((query) => {
                return (
                  <p key={query} onClick={handleOrderClick}>
                    {query}
                  </p>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesInNav;
