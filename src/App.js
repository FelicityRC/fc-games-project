import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import WelcomePage from "./Components/WelcomePage";
import WelcomePage2 from "./Components/WelcomePage2";
import AllReviews from "./Components/AllReviews";
import ReviewsByCategory from "./Components/ReviewsByCategory";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage2 />} />
          <Route path="/:home" element={<WelcomePage />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route
            path="/reviews/categories/:category"
            element={<ReviewsByCategory />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
