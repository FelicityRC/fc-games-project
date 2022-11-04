import { Link } from "react-router-dom";

const WelcomePage2 = () => {
  return (
    <>
      <main className="WelcomePage">
        Browse game reviews and help others decide which games to play based on
        your feedback!
        <br></br>
        <Link className="SeeReviews" to="/reviews">
          See Reviews!
        </Link>
      </main>
    </>
  );
};
export default WelcomePage2;
