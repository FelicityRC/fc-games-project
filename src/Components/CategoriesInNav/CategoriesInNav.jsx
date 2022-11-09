import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesNav from "../CategoriesNav";
import "./CategoriesInNav.css";

const sortByQueries = [
  "review_id",
  "title",
  "designer",
  "owner",
  "category",
  "created_at",
  "votes",
];

const orderQueries = ["asc", "desc"];

const CategoriesInNav = ({
  currentCategoryQuery,
  currentOrderQuery,
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
    if (currentOrderQuery) {
      newLocationPath += `&order=${currentOrderQuery}`;
    }

    navigate(newLocationPath);
  };

  const handleOrderClick = (event) => {
    event.preventDefault();
    const selectedOrderQuery = event.target.innerText;

    let newLocationPath = `/reviews?order=${selectedOrderQuery}`;

    if (currentCategoryQuery) {
      newLocationPath += `&category=${currentCategoryQuery}`;
    }
    if (currentSortByQuery) {
      newLocationPath += `&sort_by=${currentSortByQuery}`;
    }

    navigate(newLocationPath);
  };

  return (
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
            currentOrderQuery={currentOrderQuery}
          />
        )}

        {showSortOptions && (
          <ul>
            {sortByQueries.map((query) => {
              return <p onClick={handleSortByClick}>{query}</p>;
            })}
          </ul>
        )}

        {showOrderOptions && (
          <ul>
            {orderQueries.map((query) => {
              return <p onClick={handleOrderClick}>{query}</p>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoriesInNav;
