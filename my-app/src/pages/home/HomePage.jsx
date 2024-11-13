import React from "react";


import Hero from "../../components/hero/Hero"; 
import Objects from "../../components/objects/Objects"; 
import ButtonView from "../../components/buttonView/ButtonView";


function HomePage() {
    return (
        <div className="home_page">
            <Hero />
            <Objects /> 
            <ButtonView />
        </div>
    );
}

export default HomePage;
