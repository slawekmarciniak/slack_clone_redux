import React from "react";
import { Routes, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={} /> */}
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
