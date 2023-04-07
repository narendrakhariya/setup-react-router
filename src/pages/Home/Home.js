import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>My home page</h3>
      <p>
        {/* Below approch request the SPA index.html page to server and loads, problem in gloable state get refresh  */}
        {/* Go to<a href="/products"> The list of products</a> */}

        {/* Use link insted */}
        <Link to="/products"> The list of products</Link>
      </p>
    </>
  );
};

export default Home;
