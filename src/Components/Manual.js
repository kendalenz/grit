import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import moment, { Moment } from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Sport from './Sport'

const Manual = () => {
  const { sports } = useSelector((state) => state);
  // const [sport, setSport] = useState('');
  const { id } = useParams();
  // const navigate = useNavigate();

  return (
    <div id='manual-page'>
      <h1>Manual Entry</h1>
      <div id='section-one'>
        <div id='measurments'>
      <form id='dist-div'>
      <label>Distance</label>
      <input></input>
        <select>
          <option value='miles'>miles</option>
          <option value='kilometers'>kilometers</option>
          <option value='meters'>meters</option>
          <option value='yards'>yards</option>
        </select>
      </form>
      <form id='duration-div'>
        <label>Duration</label>
        <input placeholder='01 hr'></input>
        <input placeholder='00 min'></input>
        <input placeholder='00 s'></input>
      </form>
      <form id='elevation-form'>
        <label>Elevation</label>
        <input></input>
        <select>
          <option value='feet'>feet</option>
          <option value='meters'>meters</option>
        </select>
      </form>
      </div>
      </div>
      <hr></hr>
      {/* <Sport /> */}
      <form>
        <label form='sport'>Sport</label>
        <select>
          <option>Run</option> 
          <option>Ride</option> 
          <option>Swim</option> 
          <option>Hike</option> 
          <option>Walk</option> 
        </select>
      </form>
      <form id='date-time-form'>
        <label>Date & Time</label>
        <input></input>
        <input></input>
      </form>
      <form>
        <label>Description</label>
        <textarea></textarea>
      </form>
      <hr></hr>
      <div id='type-shoes-forms'>
      <form>
      <label>Type of Run</label>
        <select>
          <option value=''></option>
          <option value='race'>Race</option>
          <option value='long-run'>Long Run</option>
          <option value='workout'>Workout</option>
        </select>
      </form>
      <form>
        <label>Shoes</label>
        <input></input>
      </form>
      </div>
      <form>
        <label>Private Notes</label>
        <textarea></textarea>
      </form>
      <div className="slidecontainer">
        <input 
          type="range" 
          min="1" 
          max="100" 
          value="50" 
          className="slider" 
          id="myRange">
        </input>
      </div>
      <hr></hr>
      <button>Create</button>
  </div>
  );
};

// function Calendar ({ children }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterMoment}>
//       {children}
//     </LocalizationProvider>
//   );
// }

export default Manual;
