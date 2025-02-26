import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";

// Layout
import { Layout } from "../layouts/Layout.jsx";

// Pages
import { Home } from "../pages/Home.jsx";
import { HomesForSale } from "../pages/HomesForSale.jsx";
import { Login } from "../pages/Login.jsx";
import { PageNotFound } from "../pages/PageNotFound.jsx";
import { Dashboard } from "../pages/Dashboard.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { SingleHome } from "../pages/SingleHome.jsx";
import { Search } from "../pages/Search.jsx";

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "HomeLands",
      "/homes-for-sale": "Boliger til salg - HomeLands",
      "/login": "Login - HomeLands",
      "/dashboard": "Dashboard - HomeLands",
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
        <Route path={"home/:id"} element={<SingleHome />} />

        {/* Search */}
        <Route path={"search/:keyword"} element={<Search />} />
        <Route path={"search/*"} element={<Navigate to="/" replace />} />

        {/* Login and Dashboard Routes */}
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/dashboard"}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Page Not Found Route */}
        <Route path={"/*"} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
