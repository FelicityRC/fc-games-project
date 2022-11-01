import { useState } from "react";

const CategoriesInNav = (props) => {
  const { children } = props;
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed((currentIsClosed) => !currentIsClosed);
  };
  if (isClosed) {
    return <button className="CategoriesOpenClosed" onClick={handleClick}>CATEGORIES</button>;
  } else {
    return (
      <>
        <ul>
          <li className="CloseButtonInList">
            <button className="CategoriesOpenClosed"  onClick={handleClick}>CATEGORIES</button>
          </li>
          {children}
        </ul>
      </>
    );
  }
};

export default CategoriesInNav;
