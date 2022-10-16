import { ADD_CART, GET_PRODUCTS, INICIAL_REQ, IS_LOADING } from "./actionTypes";

export const inicialRequest = () => ({ type: INICIAL_REQ });
export const isLoading = () => ({ type: IS_LOADING });
export const getProductsAPI = (payload) => ({ type: GET_PRODUCTS, payload });
export const addCartItens = (payload) => ({ type: ADD_CART, payload });

export const getRequest = () => async (dispatch) => {
    try {
        dispatch(inicialRequest());// disparando action de inicialização antes de fazer a requisição.
        dispatch(isLoading());
        const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=cel';
        const objectProducts = await fetch(endpoint);
        const result = await objectProducts.json();
        
        dispatch(getProductsAPI(result.results));
        

    } catch (e) {
        throw new Error(e);
    }
};

// Actions = são as ações que vão modificar o estado global