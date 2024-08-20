import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Oops! We can't seem to find the page you are looking for.
      </p>
      <p className="not-found-subtext">
        But don't worry, you can click below to return to the previous page.
      </p>
      <button onClick={goBack} className="home-button">
        Back to Previous Page
      </button>
    </div>
  );
};

export default NotFound;
