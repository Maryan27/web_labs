import { createStore } from 'redux';
import cartReductor from './reductors';  

const store = createStore(cartReductor);

export default store;
