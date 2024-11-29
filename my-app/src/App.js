import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; 

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from "./pages/home/HomePage";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./pages/cart/Cart";
import ObjectDetails from "./pages/objectDetails/ObjectDetails"; 
import { getTicketList } from "./fetching";
import Checkout from "./pages/checkout/Checkout";
import Success from "./pages/success/Success";
import store from './redux/store'; 

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
    <Provider store={store}> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Catalog" element={<Catalog loading={loading} objectsData={objectsData} />} /> 
          <Route 
            path="/Catalog/:id" 
            element={<ObjectDetails objectsData={objectsData} />} 
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
