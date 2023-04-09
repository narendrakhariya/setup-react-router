import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import RootLayout from "./pages/RootLayout/RootLayout";
import Error from "./pages/Error/Error";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

// 2nd approch old style
// const routerDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routerDefination);

// 1st approch new style
const router = createBrowserRouter([
  // RootLayout to wrap as parent and childs approch
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
