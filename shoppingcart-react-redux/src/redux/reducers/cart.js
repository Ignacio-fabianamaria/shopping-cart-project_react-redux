
import { ADD_CART } from "../actions/actionTypes";

const INITIAL_STATE = {
    cartProductsAdd: [],
}

function cart (state= INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                cartProductsAdd: action.payload,
            }
           
        default:
            return state;

}
}

export default cart;