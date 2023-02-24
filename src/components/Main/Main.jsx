import React from "react";
import Home from './Home';
import New from './New';
import Search from './Search';
import Details from './Details';
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </main>
  );
};

export default Main;
