import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];
const Products = () => {
  return (
    <div>
      <h1>My Products</h1>
      <u>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <li key={item.id}>
              {/* Absolute path */}
              <Link to={`/products/${item.id}`}>{item.title}</Link>

              {/* Relative path */}
              {/* <Link to={item.id}>{item.title}</Link> */}
            </li>
          );
        })}
      </u>
    </div>
  );
};

export default Products;
