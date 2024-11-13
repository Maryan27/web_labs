import React, { useState } from "react";
import './buttonView.css';
import Info from "../info/Info";
import arsenalImg from "../../img/arsenal.jpg";
import brightonImg from "../../img/brighton.png";
import ipswichImg from "../../img/ipswich.jpg";
import newcastleImg from "../../img/newcastle.jpg";

const newCardsData = [
    { id: 1, img: arsenalImg, title: "Liverpool : Arsenal", date: "28.11.2024", time: "14:30", location: "Anfield", },
    { id: 2, img: brightonImg, title: "Liverpool : Brighton", date: "02.12.2024", time: "18:30", location: "Anfield",  },
    { id: 3, img: ipswichImg, title: "Liverpool : Ipswich", date: "09.12.2024", time: "14:30", location: "Anfield",  },
    { id: 4, img: newcastleImg, title: "Liverpool : Newcastle", date: "17.12.2024", time: "22:00", location: "Anfield",  },
];

const ButtonView = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="button">
            <div className="button-view-container">
                {showMore && (
                    <div className="objects__cards">
                        {newCardsData.map((ticket) => (
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
                )}
                <button 
                className={`objects__button ${showMore ? 'view-less-button' : ''}`} 
                type="button" 
                onClick={() => setShowMore(!showMore)}
>
                {showMore ? "View less" : "View more"}
                </button>
            </div>
        </section>
    );
}

export default ButtonView;


