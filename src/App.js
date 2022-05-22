import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./assets/scss/base.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Routes for user */}
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
