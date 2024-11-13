import React, { useState } from "react";
import './catalogObjects.css'; 
import crystalImg from "../img/home_match.jpg";
import evertonImg from "../img/everton.jpg";
import westHamImg from "../img/west_ham.jpg";
import wolvesImg from "../img/wolves.jpg";

import CatalogFilters from "./catalogFilters/CatalogFilters"; 
import Info from "./info/Info"; 

export const objectsData = [
    { id: 1, img: crystalImg, title: "Liverpool : Crystal Peles", date: "28.10.2024", time: "18:30", location: "Anfield", price: "180$" },
    { id: 2, img: evertonImg, title: "Liverpool : Everton", date: "30.10.2024", time: "22:00", location: "Anfield", price: "550$" },
    { id: 3, img: westHamImg, title: "Liverpool : West Ham", date: "04.11.2024", time: "14:30", location: "Anfield", price: "350$" },
    { id: 4, img: wolvesImg, title: "Liverpool : Wolves", date: "10.11.2024", time: "18:00", location: "Anfield", price: "320$" },
];

function CatalogObjects() {
    const [filteredObjects, setFilteredObjects] = useState(objectsData);

    const handleFilterApply = (selectedFilters) => {
        const searchQuery = selectedFilters.search.toLowerCase(); 

        const filtered = objectsData.filter((object) => {
            const nameMatch = selectedFilters.match !== "any" ? object.title === selectedFilters.match : true;

            const dateMatch = selectedFilters.date !== "any" ? object.date === selectedFilters.date : true;

            const priceRange = selectedFilters.price.split('-');
            const minPrice = parseFloat(priceRange[0]) || 0;
            const maxPrice = parseFloat(priceRange[1]) || Infinity;

            const priceMatch = selectedFilters.price !== "price"
                ? parseFloat(object.price.replace('$', '')) >= minPrice && parseFloat(object.price.replace('$', '')) <= maxPrice
                : true;

            const nameSearchMatch = object.title.toLowerCase().includes(searchQuery);

            return nameMatch && dateMatch && priceMatch && nameSearchMatch;
        });

        setFilteredObjects(filtered);
    };

    return (
        <section className="catalog">
            <div className="catalog-filters">
                <CatalogFilters onFilterApply={handleFilterApply} />
            </div>
            <div className="catalog-objects">
                <div className="objects-container"> 
                    {filteredObjects.map((object) => (
                        <Info 
                            key={object.id} 
                            img={object.img}
                            title={object.title} 
                            date={object.date} 
                            time={object.time}
                            location={object.location}
                            price={object.price}  
                            itemId={object.id} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CatalogObjects;





