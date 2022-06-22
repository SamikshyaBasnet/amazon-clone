export const initialState = {
    basket: [],
    user: null,
    orders: {
        basket: [],
        date: '',
    }
};

export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log("reducer", action, state);
    switch (action.type) {

        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "ADD_TO_ORDERS":
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            };

        case "REMOVE_FROM_BASKET":

            let newBasket = [...state.basket]

            let index = state.basket.findIndex((item) =>
                item.id === action.id
            );
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn("cant remove the product")
            }
            return {
                ...state, basket: newBasket
            };


        default:
            return state;
    }
}

export default reducer;