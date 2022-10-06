import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;

/* ________________________________________________________________________________________________
 Thunk  permite fazer o envio de ações de forma assíncrona e resolver cada promise que é retornada.
____________________________________________________________________________________________________ */