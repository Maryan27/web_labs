import './catalogFilters.css';
import ButtonApply from "../buttonApply/ButtonApply";
import Select from "../select/Select";
import React from "react";

function CatalogFilters() {
    const matchOptions = [
        { value: "any", label: "Any Match" },
        { value: "teamA", label: "Liverpool vs Crystal Peles" },
        { value: "teamC", label: "Liverpool vs Everton" },
        { value: "teamE", label: "Liverpool vs West Ham" },
        { value: "teamD", label: "Liverpool vs Wolves" },
    ];

    const dateOptions = [
        { value: "any", label: "Any Date" },
        { value: "nextWeek", label: "Next Week" },
        { value: "nextMonth", label: "Next Month" },
    ];

    const priceOptions = [
        { value: "price", label: "Any Price" },
        { value: "100", label: "100-200 $" },
        { value: "200", label: "200-500 $" },
        { value: "500", label: "500+ $" },
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
                <ButtonApply />
            </div>
        </section>
    );
}

export default CatalogFilters;
