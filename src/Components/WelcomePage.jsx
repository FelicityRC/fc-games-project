import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBaseURL } from "../api";

const WelcomePage = () => {
  const [error, setError] = useState(null);
  const { home } = useParams();
  const [setWelcomeMsg] = useState("");

  useEffect(() => {
    getBaseURL(home)
      .then(() => {
        setWelcomeMsg("Test");
      })
      .catch((error) => {
        setError("404: Page Not Found");
      });
  });

  return (
    <>
      {" "}
      {!!error ? (
        <p className="errorMsg">{error}</p>
      ) : (
        <main className="WelcomePage">
          Browse game reviews or help others decide which games to play based on
          your feedback!<br></br>
          <br></br>
          <Link className="SeeReviews" to="/reviews">
            See Reviews!
          </Link>
        </main>
      )}
    </>
  );
};
export default WelcomePage;
