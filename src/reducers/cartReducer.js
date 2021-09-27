const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_FROM_CART":
      return {
        products: [...state.products, action.data]
      };
    default:
      return state;
  }
}