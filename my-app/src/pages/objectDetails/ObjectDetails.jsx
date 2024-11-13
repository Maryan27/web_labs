import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom"; 
import { getDetailedTicketInfo } from "../../fetching"; 
import Spinner from "../../components/spinner/Spinner"; 
import './objectDetails.css';

const ObjectDetails = () => {
  const { id } = useParams();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    getDetailedTicketInfo(id) 
      .then((response) => {
        setSelectedTicket(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних:", error);
      });
  }, [id]);

  if (loading) {
    return <Spinner />; 
  }

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
              <form className="ticket-form">
                <label>
                  <input 
                    type="number" 
                    id="ticketCount" 
                    placeholder="Number of tickets" 
                    min={1} 
                  />
                </label>
                <label>
                  <select id="ticketType">
                    <option value="standard">Standard Ticket</option>
                    <option value="vip">VIP Ticket</option>
                    <option value="child">Child Ticket</option>
                  </select>
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
