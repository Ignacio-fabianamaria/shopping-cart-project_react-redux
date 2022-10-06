import { GET_PRODUCTS, IS_LOADING } from "../actions/actionTypes";

const INITIAL_STATE = {
    isLoading: false,
    productList: []
};

function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
            case GET_PRODUCTS:
            return {
                ...state,
                productList:action.payload,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default products;