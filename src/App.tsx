import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import "./App.scss";

import Home from "@/components/Home";
import Auth from "@/components/Auth";

const App: React.FC = () => {
  const Routes = () =>
    useRoutes([
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Auth />
      }
    ]);

  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
