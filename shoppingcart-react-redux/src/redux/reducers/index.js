import { combineReducers } from 'redux';
import products from './products';


const rootReducer = combineReducers({
 products
});

export default rootReducer;

/* ________________________________________________________________________

  __combineReducers__ função responsável por combinar os reducers criados
  __________________________________________________________________________ */