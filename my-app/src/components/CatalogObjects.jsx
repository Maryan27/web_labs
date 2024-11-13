import React, { useEffect, useState } from "react"; 
import './catalogObjects.css'; 
import CatalogFilters from "./catalogFilters/CatalogFilters"; 
import Info from "./info/Info"; 
import { getFilteredTicketList } from "../fetching"; 
import Spinner from "./spinner/Spinner"; 

function CatalogObjects() {
    const [loading, setLoading] = useState(true); 
    const [objectsData, setObjectsData] = useState([]); 
    const [filteredObjects, setFilteredObjects] = useState([]); 

    
    useEffect(() => {
        setLoading(true); 
        getFilteredTicketList({}) 
            .then(response => {
                setObjectsData(response.data); 
                setFilteredObjects(response.data); 
                setTimeout(() => setLoading(false), 1000); 
            })
            .catch(error => {
                setLoading(false); 
            });
    }, []); 

    
    const handleFilterApply = (selectedFilters) => {
        setLoading(true); 

        const searchQuery = document.getElementById("mySearch").value.toLowerCase();

        const filters = {
            match: selectedFilters.match !== "any" ? selectedFilters.match : "", 
            date: selectedFilters.date !== "any" ? selectedFilters.date : "", 
            price: selectedFilters.price !== "any" && selectedFilters.price !== "price" ? selectedFilters.price : "", 
            searchQuery: searchQuery
        };

        getFilteredTicketList(filters)
            .then(response => {
                setFilteredObjects(response.data);
                setTimeout(() => setLoading(false), 1000);
            })
            .catch(error => {
                console.error("Error fetching filtered data:", error);
                setLoading(false); 
            });
    };

    return (
        <section className="catalog">
            {loading ? <Spinner /> : null} 
            <div className="catalog-filters">
                <CatalogFilters onFilterApply={handleFilterApply} /> 
            </div>
            <div className="catalog-objects">
                {!loading && filteredObjects.map((object) => (
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
        </section>
    );
}

export default CatalogObjects;
