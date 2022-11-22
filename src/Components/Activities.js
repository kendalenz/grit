import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import { useEffect } from 'react';
import { loginWithToken, fetchActivities, fetchUsers } from '../store';


const Activities = () => {
  const { activities, users } = useSelector((state) => state);
  
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchActivities());
    dispatch(fetchUsers());
  }, []);

  const findUserById = (searchId) => {
    const search = users.find(({ id }) => id === searchId);
    if (!search) {
      return null;
    } else {
      return search.firstName;
    }
  };

  const ActivityCard = (props) => {
    return (
      <div id='activity-card'>
        {auth.username}         
        <h3>{props.title}</h3>
        {props.description}
        <br></br>
        <br></br>
        <font size='1'>Distance</font>
        <br></br>
        <font size='+2'>{props.distance} {props.measurement}</font>
      </div>
    );
  };

  return (
    <div id='activity-page'>
      <div id='user-info-div'>
      <div id='user-info'>
        <User 
        profileImage={auth.profileImage}
          firstName={auth.firstName}
          lastName={auth.lastName}
        />
      </div>
      </div>
      <div id='deals-container'>
      <div id='deals'>
        <div id='one-month-heading'>
          <h1><span id='one-month'>1 Month</span> on Us</h1>
        </div>
          <h3>Redeem your free trial</h3>
          <p>Try our best features! Get deeper analysis, discover new routes & improve your fitness</p>
          <button id='start-trial-button'>Start Your Free Trial</button>
      </div>
      </div>
     <div id='activitycard-div'>
      {
        activities.map((activity) => (
          <div id='test'>
            <ActivityCard

              id={activity.id}
              key={activity.id}
              // firstName={activity.user.firstName}
              // lastName={activity.user.lastName}
              title={activity.title}
              description={activity.description}
              distance={activity.distance}
              measurement={activity.measurement}
            />
          </div>
        ))
      }
    </div>
   </div>
  );
};

export default Activities;
