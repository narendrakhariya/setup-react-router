import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  /* Navigating Programmatically  */
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("products");
  };
  return (
    <>
      <h3>My home page</h3>
      <p>
        {/* Below approch request the SPA index.html page to server and loads, problem in gloable state get refresh  */}
        {/* Go to<a href="/products"> The list of products</a> */}

        {/* Use link insted anchor*/}
        {/* <Link to="/products"> The list of products</Link> */}

        {/* Relative path */}
        <Link to="products"> The list of products</Link>

        <p>
          {/* Navigating Programmatically  */}
          <button onClick={navigateHandler}>Navigate To Products</button>
        </p>
      </p>
    </>
  );
};

export default Home;
