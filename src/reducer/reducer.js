export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) =>
  cart.reduce((total, item) => item.price + total, 0);

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    case 'REMOVE_PRODUCT_FROM_CART':
      const index = state.cart.findIndex(
        (item) => item.id === action.id
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the cart`);
      }

      return {
        ...state,
        cart: newCart,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default reducer;