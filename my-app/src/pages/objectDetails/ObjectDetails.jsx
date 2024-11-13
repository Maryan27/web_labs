import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './objectDetails.css';

function ObjectDetails({ objectsData }) {
  const { id } = useParams();
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    if (objectsData && Array.isArray(objectsData)) {
      const ticket = objectsData.find((item) => item.id === parseInt(id, 10));
      setSelectedTicket(ticket);
    }
  }, [id, objectsData]);

  if (!selectedTicket) {
    return <div>Ticket not found</div>;
  }

  const imagePath = selectedTicket.img;

  return (
    <section>
      <div className="object-detail">
        <div className="left-side">
          <img 
            className="object-detail__img" 
            src={imagePath} 
            alt={selectedTicket.title} 
            height={300} 
            width={300} 
          />
        </div>
        <div className="right-side">
          <div className="object-detail__title">
            {selectedTicket.title}
          </div>
          <div className="object-detail__date">
            Date: {selectedTicket.date}
          </div>
          <div className="object-detail__time">
            Time: {selectedTicket.time}
          </div>
          <div className="object-detail__location">
            Location: {selectedTicket.location}
          </div>
          <div className="object-detail__fields">
            <div className="input">
              <form>
                <label>
                  <input 
                    type="number" 
                    id="ticketCount" 
                    placeholder="Number of tickets" 
                    min={1} 
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="object-detail__price">Price: {selectedTicket.price} </div>
    </section>
  );
}

export default ObjectDetails;


