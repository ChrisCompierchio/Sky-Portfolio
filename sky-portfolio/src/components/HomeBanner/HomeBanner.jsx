import React from 'react'
import './HomeBanner.css'
import tree from "./tree.png";
import HomeButton from '../HomeButton/HomeButton';

function HomeBanner() {
  return (
    <div className="homebanner-container">
      <h1>
        <span className="first-word">
          Sky <img src={tree} alt="tree" className="tree-img" />
        </span>
        Kapoor
      </h1>
      <h6>Mobility rooted in passion.</h6>

      <HomeButton />
    </div>
  );
}

export default HomeBanner