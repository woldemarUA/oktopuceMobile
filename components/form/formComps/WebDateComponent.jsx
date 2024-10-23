import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './css/customDatePicker.css';

const WebDateComponent = ({ date, setDate, setShow }) => {
  return (
    <DatePicker
      selected={date}
      onChange={(date) => {
        setDate(date);
        setShow(false);
      }} //only when value has changed
      className='custom-date-picker'
    />
  );
};

export default WebDateComponent;
