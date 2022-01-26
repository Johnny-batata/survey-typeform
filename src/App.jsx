import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import Graph from "./pages/Graph/Graph";

const App = () => {
  return (
    <Routes>
      <Route exact path="/form/result" element={<Graph />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
