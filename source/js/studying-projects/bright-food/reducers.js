import { combineReducers } from 'redux';


const initialState ={items: ["food"]};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  basket
})