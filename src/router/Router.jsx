import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

// Layout
import { Layout } from "../layouts/Layout.jsx";

// Pages
import { Home } from "../pages/Home.jsx";
import { HomesForSale } from "../pages/HomesForSale.jsx";
import { Login } from "../pages/Login.jsx";
import { PageNotFound } from "../pages/PageNotFound.jsx";

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "HomeLands",
    };

    const currentTitle = pageTitles[location.pathname];
    if (currentTitle) {
      document.title = currentTitle;
    } else {
      document.title = "404 - Page Not Found";
    }
  }, [location]);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/homes-for-sale"} element={<HomesForSale />} />
        <Route path={"/login"} element={<Login />} />

        <Route path={"/*"} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
