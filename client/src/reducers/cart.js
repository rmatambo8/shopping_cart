export default (state = [], action) => {
  const {type, data} = action
  switch (type) {
    case "GET_CART":
      return [...data]
    case "ADD_ITEM_TO_CART":
      let index = state.findIndex(({ id }) => id === data.id);
      if (index > -1) {
        return state.map(cartItem => {
          if (cartItem.id === data.id) {
            return data
          }

          return cartItem
        })
      } 
      return [...state, data]
    case "CHECKOUT":
      return []
    default:
      return state
  }
}

