import { combineReducers } from 'redux';


const initialState ={items: []};

const basket = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      let newItems = state.items;
      newItems.push(action.item);
      return Object.assign({},state,{items:newItems});

    case 'DELETE_ITEM':
      for (let i = 0; i < state.items.length; i++){
        if (action.item.id === state.items[i].id){
          state.items.splice(i,1);
        }
      }
      return Object.assign({}, state, {items: state.items});
    default:
      return state;
  }
}


export default combineReducers({
    basket
  // nastya
})
