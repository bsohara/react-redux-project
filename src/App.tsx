import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home.page";
import Search from "./pages/search.page";
import Watch from "./pages/watch.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
