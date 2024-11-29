const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReductor = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const objectDataStoreId = state.cart.findIndex(
        (item) =>
          item.objectData.id === action.payload.objectData.id &&
          item.ticketType === action.payload.ticketType
      );

      if (objectDataStoreId !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[objectDataStoreId].amount += action.payload.amount;

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newCart = [...state.cart, action.payload];
        localStorage.setItem('cart', JSON.stringify(newCart));
        return {
          ...state,
          cart: newCart,
        };
      }

    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(
        (item) =>
          !(item.objectData.id === action.payload.id && item.ticketType === action.payload.ticketType)
      );
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };

    case 'INCREMENT_AMOUNT':
      const incrementedCart = state.cart.map((item) => {
        if (item.objectData.id === action.payload.id && item.ticketType === action.payload.ticketType) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(incrementedCart));
      return {
        ...state,
        cart: incrementedCart,
      };

    case 'DECREMENT_AMOUNT':
      const decrementedCart = state.cart.map((item) => {
        if (item.objectData.id === action.payload.id && item.ticketType === action.payload.ticketType && item.amount > 1) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(decrementedCart));
      return {
        ...state,
        cart: decrementedCart,
      };

   
    case 'CLEAR_CART':
      localStorage.setItem('cart', JSON.stringify([])); 
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReductor;


