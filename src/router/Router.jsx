import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

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
        <Route path={"home/:id"} element={<SingleHome />} />

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
