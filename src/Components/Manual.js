import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Manual = () => {
  const { distance } = useSelector((state) => state);
  const [measurement, setMeasurement] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  </div>
  );
};

export default Manual;
