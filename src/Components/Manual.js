import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Manual = () => {
  const { sports } = useSelector((state) => state);
  const [sport, setSport] = useState('');
  const { id } = useParams();
  // const navigate = useNavigate();

  return (
    <div>
      <h1>Manual Entry</h1>
      <form>
      <label>Distance</label>
      <input></input>
        <select>
          <option value='miles'>miles</option>
          <option value='kilometers'>kilometers</option>
          <option value='meters'>meters</option>
          <option value='yards'>yards</option>
        </select>
      </form>
      <form>
        <label>Duration</label>
        <input placeholder='01 hr'></input>
        <input placeholder='00 min'></input>
        <input placeholder='00 s'></input>
      </form>
      <form>
        <label>Elevation</label>
        <input></input>
        <select>
          <option value='feet'>feet</option>
          <option value='meters'>meters</option>
        </select>
      </form>
      <form>
        <label form='sport'>Sport</label>
        <select 
        value={name}
        onChange={(ev)=> setSport(ev.target.value)}
        >
          <option value=''>Run</option>
            {
              sports.map((sport) => {
                return (
                  <option value={sport.name}>
                    {sport.name}
                  </option>
                )
              })
            }
        </select>
      </form>

  </div>
  );
};

export default Manual;
