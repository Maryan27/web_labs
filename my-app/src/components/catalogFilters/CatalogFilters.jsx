import './catalogFilters.css';
import ButtonApply from "../buttonApply/ButtonApply";
import Select from "../select/Select";
import React, { useState } from "react";

function CatalogFilters({ onFilterApply }) {
    const [searchTerm, setSearchTerm] = useState("");

    const matchOptions = [
        { value: "any", label: "Any Match" },
        { value: "Liverpool : Crystal Peles", label: "Liverpool : Crystal Peles" },
        { value: "Liverpool : Everton", label: "Liverpool : Everton" },
        { value: "Liverpool : West Ham", label: "Liverpool : West Ham" },
        { value: "Liverpool : Wolves", label: "Liverpool : Wolves" },
    ];

    const dateOptions = [
        { value: "any", label: "Any Date" },
        { value: "28.10.2024", label: "28.10.2024" },
        { value: "30.10.2024", label: "30.10.2024" },
        { value: "04.11.2024", label: "04.11.2024" },
        { value: "10.11.2024", label: "10.11.2024" },
    ];

    const priceOptions = [
        { value: "price", label: "Any Price" },
        { value: "100-200", label: "100-200 $" },
        { value: "200-500", label: "200-500 $" },
        { value: "500+", label: "500+ $" },
    ];

    const matchSettings = {
        id: 'filters__by-match',
        label: 'Filter by match:',
        name: 'match',
        class_name: 'match',
    };

    const dateSettings = {
        id: 'filters__by-date',
        label: 'Filter by date:',
        name: 'date',
        class_name: 'date',
    };

    const priceSettings = {
        id: 'filters__by-price',
        label: 'Filter by price:',
        name: 'price',
        class_name: 'price',
    };

    const selectArray = [
        { options: matchOptions, settings: matchSettings },
        { options: dateOptions, settings: dateSettings },
        { options: priceOptions, settings: priceSettings },
    ];

    const handleApplyClick = () => {
        const selectedFilters = {
            match: document.getElementById(matchSettings.id).value,
            date: document.getElementById(dateSettings.id).value,
            price: document.getElementById(priceSettings.id).value,
            search: searchTerm.trim(), 
        };

        onFilterApply(selectedFilters);
    };

    return (
        <section>
            <div className="catalog-filters">
                <div className="catalog-filters__types">
                    {selectArray.map((single_select) => (
                        <div className={single_select.settings.class_name} key={single_select.settings.id}>
                            <Select options={single_select.options} settings={single_select.settings} />
                        </div>
                    ))}
                </div>
                <input 
                    type="search" 
                    id="mySearch" 
                    className="catalog-filters__search" 
                    placeholder="Search the matches…" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <div className="catalog-filters__button">
                    <ButtonApply onClick={handleApplyClick} />
                </div>
            </div>
        </section>
    );
}

export default CatalogFilters;





