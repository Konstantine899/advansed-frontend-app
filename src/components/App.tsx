//crs/components/App.tsx
import React, { Suspense } from "react";
import "./index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";

export const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная Страница</Link>
      <Link to={"/about"}>О Сайте</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
