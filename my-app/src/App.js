import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';

import Footer from './components/footer/Footer';
import HomePage from "./pages/home/HomePage";
import Catalog from "./pages/catalog/Catalog";
import Team from "./pages/team/Team";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

