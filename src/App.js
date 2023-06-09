import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import {  Route, Routes } from "react-router-dom";
import Show from "./components/Show/Show";
import BookTicket from "./components/Form/BookTicket";
import Footer from "./components/layout/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Show />} />
        <Route exact path="/form/:id" element={<BookTicket />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
