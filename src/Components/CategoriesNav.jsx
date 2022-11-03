import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

const CategoriesNav = () => {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

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
      <ul className="CategoriesNav">
        {categories.map((category) => {
          return (
            
            <li key={category.slug}>
              <Link
                key={category.slug}
                className="CategoriesNavButton"
                to={`/reviews/categories/${category.slug}`}
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
