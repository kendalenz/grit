import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Sports = () => {
    const { sports } = useSelector((state) => state);
    const [sport, setSport] = useState('');
    return (
        <form>
        <label form='name'>Sport</label>
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
    )
};

export default Sports;