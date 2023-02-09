import React from "react";
import { Link } from "react-router-dom";
import ImageHeader from "../assets/images/background-home.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">Sushi delivered through the Sky</h1>
      <img className="image-header" src={ImageHeader} alt="image-header" />
      <h3 className="subtitle">
        Sign up for a new account and receive $25 for your first order.
      </h3>
      <Link className="button" to="/menu">
        Go to Menu
      </Link>
    </div>
  );
};

export default Home;
