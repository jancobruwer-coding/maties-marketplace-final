import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "../src/pages/Home.jsx";
import Add from "../src/pages/Add.jsx";
import "./index.css";
import ViewAll from "./pages/ViewAll.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/viewall",
        element: <ViewAll />,
      },
      {
        path: "/add",
        element: <Add />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
