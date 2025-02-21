import React from "react";
import "./Homepage.css";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Navbar from "../../components/Navbar/Navbar";

function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <HomeBanner />
    </div>
  );
}

export default Homepage;
