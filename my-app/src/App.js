import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from "./pages/home/HomePage";
import Catalog from "./pages/catalog/Catalog";
import Team from "./pages/team/Team";
import ObjectDetails from "./pages/objectDetails/ObjectDetails"; 
import { getTicketList } from "./fetching"; 

function App() {
  const [objectsData, setObjectsData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 
    getTicketList() 
      .then(response => {
        console.log(response);
        setObjectsData(response.data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Catalog" element={<Catalog loading={loading} objectsData={objectsData} />} /> 
        <Route path="/Team" element={<Team />} />
        <Route 
          path="/Catalog/:id" 
          element={<ObjectDetails objectsData={objectsData} />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

