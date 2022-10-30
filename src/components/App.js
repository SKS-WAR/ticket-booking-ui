import React from 'react';

// import PostForm from './bookings/PostForm';

import { Provider } from 'react-redux';
import store from '../store';
import Bookings from './bookings/Bookings';
import AddSeats from './bookings/AddSeats';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirm from './bookings/Confirm';
import Layout from './layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<AddSeats />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="confirm" element={<Confirm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
