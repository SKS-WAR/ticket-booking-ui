import { NEW_BOOKING, UPDATE_BOOKING, UPDATE_PRICE} from './types';

export const createSeats = postData => dispatch => {
    dispatch({
      type: NEW_BOOKING,
      payload: postData
    })
};

export const updatePrice = ticketPrice => dispatch => {
  dispatch({
    type: UPDATE_PRICE,
    payload: ticketPrice
  })
};

export const confirmSeats = (flag) => (dispatch,getState) => {

  let tempData = JSON.parse(JSON.stringify(getState().bookings.items))
  if(flag){
    tempData.map(row => {
      row.map(data => {
        if(data.selectedState === 1)
          data.selectedState = 2;
      })
    })
  } else {
    tempData.map(row => {
      row.map(data => {
        if(data.selectedState === 1)
          data.selectedState = 0;
      })
    })
  }
  dispatch({
    type: UPDATE_BOOKING,
    payload: tempData
  })
};

