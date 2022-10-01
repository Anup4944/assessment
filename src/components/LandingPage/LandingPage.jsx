import React from "react";
import "./landingPage.css";
import Image from "../../assets/landingPage.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <img src={Image} alt="event" />
      </div>
      <div className="rightContainer">
        <div className="top">
          <div className="basic">Imagine if</div>
          <div className="snapChat">Snapchat</div>
          <div className="basic">had events</div>
          <div className="bottom">
            Easily host and share events with your friends <br />
            across any social media.
          </div>
        </div>

        <button>
          {" "}
          <Link to="/create" style={{ textDecoration: "none" }}>
            🎉 Create my event{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
