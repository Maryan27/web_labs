export const addToCart = (objectData, amount, ticketType) => ({
    type: 'ADD_TO_CART',
    payload: {
      objectData,
      amount,
      ticketType
    },
});
  
export const removeFromCart = ({ id, ticketType }) => ({
    type: 'REMOVE_FROM_CART',
    payload: { id, ticketType },
});
  
export const incrementAmount = ({ id, ticketType }) => ({
    type: 'INCREMENT_AMOUNT',
    payload: { id, ticketType },
});
  
export const decrementAmount = ({ id, ticketType }) => ({
    type: 'DECREMENT_AMOUNT',
    payload: { id, ticketType },
});


export const clearCart = () => ({
    type: 'CLEAR_CART',
});
