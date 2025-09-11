import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Trending from "../Pages/Trending";
import Popular from "../Pages/Popular";
import Movie from "../Pages/Movie";
import TvSeries from "../Pages/TvSeries";
import Person from "../Pages/Person";

const Routing = () => {
  const routeElements = [
    { path: "/", elem: <Home /> },
    { path: "/Trending", elem: <Trending /> },
    { path: "/Popular", elem: <Popular /> },
    { path: "/Movie", elem: <Movie /> },
    { path: "/Tv", elem: <TvSeries /> },
    { path: "/Person", elem: <Person /> },
  ];
  return (
    <Routes>
      {routeElements.map((elem, idx) => (
        <Route key={idx} path={elem.path} element={elem.elem} />
      ))}
    </Routes>
  );
};

export default Routing;
