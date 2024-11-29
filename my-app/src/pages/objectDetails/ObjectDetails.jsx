import React, { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions"; 
import { getDetailedTicketInfo } from "../../fetching"; 
import Spinner from "../../components/spinner/Spinner"; 
import './objectDetails.css';

const ObjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  
  const objectsData = useSelector((state) => state.cart);

  useEffect(() => {
    setLoading(true);
    getDetailedTicketInfo(id)
      .then((response) => {
        setSelectedTicket(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!selectedTicket) {
    return <div>Ticket not found</div>;
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGoBack = () => {
    navigate("/catalog");
  };

  const handleAddToCart = () => {
    const existingTicket = objectsData.find(item => item.objectData.id === selectedTicket.id);
    const currentAmount = existingTicket ? existingTicket.amount : 0;
    
    const newAmount = currentAmount + (parseInt(inputValue) > 0 ? parseInt(inputValue) : 1);

    if (newAmount <= 5) {
      dispatch(addToCart(selectedTicket, newAmount - currentAmount));
      alert("Your ticket has been added to the cart");
    } else {
      alert("You can add a maximum of 5 tickets for this event.");
    }
  };

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
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </label>
              
              </form>
            </div>
          </div>
          <div className="price-and-buttons">
            <div className="object-detail__price">Price: {selectedTicket.price}</div>
            <div className="options">
              <button className="go-back__button" onClick={handleGoBack}>Go back</button>
              <button className="add__button" onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectDetails;





