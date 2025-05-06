import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { routes, wrapWithSuspense } from "./routes";
import ErrorBoundary from "./components/common/ErrorBoundary";
import "./assets/styles/global.css";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.path === "/" ? (
                  <>
                    <Header />
                    {wrapWithSuspense(route.element.main)}
                    <Footer />
                  </>
                ) : (
                  wrapWithSuspense(route.element)
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;