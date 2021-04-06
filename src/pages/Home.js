import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page home">
      <div className="flagCenter">
        <h1 className="country">GO TO</h1>
        <div className="otherLinks">
          <Link to="/page2">Nigeria</Link>
          <Link to="/page1">Argentina</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;