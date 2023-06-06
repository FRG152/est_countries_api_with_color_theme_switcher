import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App, { loader as AppLoader } from "./App.jsx";

import Search from "./components/Search.jsx";

import Card from "./components/Card.jsx";

import Country, { action as CountryAction } from "./components/Country.jsx";

import "./style/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AppLoader,
    children: [
      {
        path: "/",
        element: (
          <>
            <Search />
            <Card />
          </>
        ),
        loader: AppLoader,
      },
      {
        path: "country/:idCountry",
        element: <Country />,
        loader: AppLoader,
        action: CountryAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
