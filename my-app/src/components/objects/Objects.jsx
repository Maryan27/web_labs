import React from "react";
import './objects.css';
import Info from '../info/Info';

import crystalImg from '../../img/home_match.jpg';
import evertonImg from '../../img/everton.jpg';
import westHamImg from '../../img/west_ham.jpg';
import wolvesImg from '../../img/wolves.jpg';

const Objects = () => {
    const ticketsData = [
        { 
            id: 1, 
            img: crystalImg, 
            title: "Liverpool : Crystal Peles", 
            date: "28.10.2024", 
            time: "18:30", 
            location: "Anfield",
        },
        { 
            id: 2, 
            img: evertonImg, 
            title: "Liverpool : Everton",  
            date: "30.10.2024", 
            time: "22:00",  
            location: "Anfield",
        },
        { 
            id: 3, 
            img: westHamImg, 
            title: "Liverpool : West Ham",  
            date: "04.11.2024", 
            time: "14:30", 
            location: "Anfield",
        },
        { 
            id: 4, 
            img: wolvesImg, 
            title: "Liverpool : Wolves",  
            date: "10.11.2024", 
            time: "18:00", 
            location: "Anfield",
        },
    ];

    return (
        <section className="objects">
            <div className="container">
                <div className="objects__cards">
                    {ticketsData.map(ticket => (
                        <Info 
                            key={ticket.id} 
                            img={ticket.img} 
                            title={ticket.title} 
                            date={ticket.date} 
                            time={ticket.time} 
                            location={ticket.location} 
                            showButton={false} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Objects;
