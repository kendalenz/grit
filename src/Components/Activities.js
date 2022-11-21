import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import User from './User';

const Activities = () => {
  const { activities, users } = useSelector((state) => state);

  const ActivityCard = (props) => {
    return (
      <div id='activity-card'>
        {/* {props.user.firstName} {props.user.lastName} */}
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
    <div>
      <div id='user-info'>
        <User />
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
