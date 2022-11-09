import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

const CategoriesNav = (props) => {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { currentSortByQuery, currentOrderQuery } = props;

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <h3 className="LoadingMsg">
        Please wait whilst loading... <div className="Spinner"></div>
      </h3>
    );
  }
  return (
    <ul className="CategoriesNav">
      {categories.map((category) => {
        let newLocationPath = `/reviews?category=${category.slug}`;

        if (currentOrderQuery) {
          newLocationPath += `&order=${currentOrderQuery}`;
        }
        if (currentSortByQuery) {
          newLocationPath += `&sort_by=${currentSortByQuery}`;
        }

        return (
          <li key={category.slug}>
            <Link
              key={category.slug}
              className="CategoriesNavButton"
              to={newLocationPath}
            >
              ➡{category.slug}
              <p className="CategoriesDescription">
                {" "}
                🎲 {category.description}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesNav;
