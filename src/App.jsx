import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";

const App = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
