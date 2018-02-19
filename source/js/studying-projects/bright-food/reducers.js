import { combineReducers } from 'redux';

const initialState ={items: [], basketLength: 0, totalPrice: 0};
// const isZoomed = {isZoomed: false}

const basket = (state = initialState, action) => {
  let newBasketLength = state.basketLength;
  let newTotalPrice = state.totalPrice;
  // console.log(typeof newTotalPrice);
  switch (action.type) {

    case 'ADD_ITEM':
      let newItems = state.items;
      newItems.push(action.item);
      newBasketLength = newItems.length;
      newTotalPrice += action.item.price;
      // console.log(+newTotalPrice.toFixed(2));
      return Object.assign({},state,{items:newItems, basketLength: newBasketLength, totalPrice: newTotalPrice });

    case 'DELETE_ITEM':
      for (let i = 0; i < state.items.length; i++){
        if (action.item.id === state.items[i].id){
          state.items.splice(i,1);
        }
      }
      newBasketLength = state.items.length;
      newTotalPrice -= action.item.price;
      // console.log(+newTotalPrice.toFixed(2));
      return Object.assign({}, state, {items: state.items, basketLength: newBasketLength, totalPrice: newTotalPrice});


    default:
      return state;
  }
}
// const zoom = (state = isZoomed, action ) => {
//   switch (action.type) {
//     case "CHAHGE_ZOOM":
//       let newZoomState = !action.isZoomed;
//       return Object.assign({}, state, {isZoomed: newZoomState});
//
//     default:
//       return state;
//   }
// }

export default combineReducers({
  basket
  // zoom
})