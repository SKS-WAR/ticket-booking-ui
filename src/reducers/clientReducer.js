
import { NEW_BOOKING,UPDATE_BOOKING,UPDATE_PRICE } from '../actions/types';

const initialState = {
  items: [],
  item: 100,

};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRICE:
      return {
        ...state,
        item: action.payload
      };
    case NEW_BOOKING:
      return {
        ...state,
        items: action.payload
      };
    case UPDATE_BOOKING:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}