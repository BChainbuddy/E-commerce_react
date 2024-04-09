import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/HomePage/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import ErrorPage from "./components/Errorpage";
import Product from "./pages/ProductPage/ProductPage";
import Products from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";
import Home from "./pages/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
      { path: "/register", element: <Register />, errorElement: <ErrorPage /> },
      { path: "/products", element: <Products />, errorElement: <ErrorPage /> },
      {
        path: "/products/:id",
        element: <Product />,
        errorElement: <ErrorPage />,
      },
      { path: "/cart", element: <CartPage />, errorElement: <ErrorPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
