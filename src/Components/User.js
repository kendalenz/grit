
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const User = () => {
  const { users } = useSelector((state) => state);
  const { id } = useParams();

  const user = users.find((user) => user.id === id);

  if (!user) return <h1>...loading</h1>;

  const UserCard = (props) => {
    return (
        <div id='user-card'>
            <img
            src={props.profileImage}
            ></img>
            <h3>{props.firstName} {props.lastName}</h3>
        </div>
    );
  };

  return (
    <div>
     <div id='usercard-div'>
      {
        users.map((user) => (
          <div id='usercard-div-2'>
            <UserCard
               id={user.id}
               key={user.id}
               profileImage={user.profileImage}
               firstName={user.firstName}
               lastName={user.lastName}
            />
          </div>
        ))
      }
    </div>
   </div>
  );
};

export default User;