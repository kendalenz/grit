import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createActivity } from '../store/activities';
// import moment, { Moment } from 'moment';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const CreateActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [distance, setDistance] = useState(0.0);
  const [measurement, setMeasurement] = useState('');
  const [error, setError] = useState({});

  const create = (ev) => {
    ev.preventDefault();
    dispatch(createActivity({title, description, distance, measurement}, navigate))
  };

  let messages = [];

  if(error.errors) {
    messages = error.errors.map((e) => e.message);
  } else if(error.status) {
    messages.push(error.status);
  };

  return (
    <div id='manual-page'>
      <h1 id='manual-entry'>Manual Entry</h1>
      <form onSubmit={create}>
        <div id='section-one'>
          <div id='measurments'>
            <div id='dist-div'>
              <label className='label'>Distance</label>
              <input className='input'
                name='distance'
                value={distance}
                onChange={ev => setDistance(ev.target.value)}
              >
              </input>
              <select 
                className='select'
                name='measurement'
                value={measurement}
                onChange={ev => setMeasurement(ev.target.value)}
              >
                <option value='miles'>miles</option>
                <option value='kilometers'>kilometers</option>
                <option value='meters'>meters</option>
                <option value='yards'>yards</option>
              </select>
            </div>
            <div id='duration-div'>
              <label className='label'>Duration</label>
                <input className='input' placeholder='01 hr'></input>
                <input className='input' placeholder='00 min'></input>
                <input className='input' placeholder='00 s'></input>
            </div>
            <div id='elevation-form'>
              <label className='label'>Elevation</label>
              <input className='input'></input>
            <select className='select'>
              <option value='feet'>feet</option>
              <option value='meters'>meters</option>
            </select>
            </div>
          </div>
        </div> 
        <hr></hr> 
        <div id='section-two'>
        <div id='sport-date-div'>
          <label className='label'>Sport</label>
          <select id='sport-select' className='select'>
            <option>Run</option> 
            <option>Ride</option> 
            <option>Swim</option> 
            <option>Hike</option> 
            <option>Walk</option> 
          </select>
        {/* <div id='date-time-form'> */}
          <label className='label'>Date & Time</label>
          <input className='input'></input>
          <input className='input'></input>
        </div>
        <label id='title-lable' className='label'>Title</label>
          <input
          id='title-input'
          name='title'
          value={title}
          onChange={ev => setTitle(ev.target.value)}>
          </input>
        <div id='description-div'>
          <label className='label'>Description</label>
          <textarea 
            name='description'
            value={description}
            onChange={ev => setDescription(ev.target.value)}>
          </textarea>
        </div>
        </div>
        <hr></hr>
        <div id='type-shoes-forms'>
      <div>
      <label className='label'>Type of Run</label>
        <select id='sport-select'className='select'>
          <option value=''></option>
          <option value='race'>Race</option>
          <option value='long-run'>Long Run</option>
          <option value='workout'>Workout</option>
        </select>
      </div>
      <div>
        <label className='label'>Shoes</label>
        <input className='input'></input>
      </div>
      </div>
      <div>
      <div id='private-notes-div'>
        <label className='label'>Private Notes</label>
        <textarea></textarea>
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
      </div>
    
      </div>
      <hr></hr>
        <button><strong>Create</strong></button>
      </form>
      <div>
       {messages.map((message) => {
            return <li key={message}>{message}</li>;
          })}
      </div>
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

export default CreateActivity;
