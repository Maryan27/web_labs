import React from "react";
import './catalogObjects.css'; 
import crystalImg from "../img/home_match.jpg";
import evertonImg from "../img/everton.jpg";
import westHamImg from "../img/west_ham.jpg";
import wolvesImg from "../img/wolves.jpg";

import CatalogFilters from "./catalogFilters/CatalogFilters"; 
import Info from "./info/Info"; 

const objectsData = [
  { 
    id: 1, 
    img: crystalImg, 
    title: "Liverpool : Crystal Peles", 
    date: "28.10.2024", 
    time: "18:30", 
    location: "Anfield",
    price: "   400$",  
  },
  { 
    id: 2, 
    img: evertonImg, 
    title: "Liverpool : Everton",  
    date: "30.10.2024", 
    time: "22:00",  
    location: "Anfield",
    price: "300$",  
  },
  { 
    id: 3, 
    img: westHamImg, 
    title: "Liverpool : West Ham",  
    date: "04.11.2024", 
    time: "14:30", 
    location: "Anfield",
    price: "350$",  
  },
  { 
    id: 4, 
    img: wolvesImg, 
    title: "Liverpool : Wolves",  
    date: "10.11.2024", 
    time: "18:00", 
    location: "Anfield",
    price: "320$",  
  },
];

function CatalogObjects() {
    return (
      <section className="catalog">
        <div className="catalog-objects">
          <CatalogFilters />
          <div className="objects-container"> 
            {objectsData.map((object) => (
              <Info 
                key={object.id} 
                img={object.img}
                title={object.title} 
                date={object.date} 
                time={object.time}
                location={object.location}
                price={object.price}  
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  

export default CatalogObjects;

