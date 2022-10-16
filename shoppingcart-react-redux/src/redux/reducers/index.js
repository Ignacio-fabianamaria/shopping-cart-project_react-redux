import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
 products,
 cart
});

export default rootReducer;

/* ________________________________________________________________________

  __combineReducers__ função responsável por combinar os reducers criados
  __________________________________________________________________________ */