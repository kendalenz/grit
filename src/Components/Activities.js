import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const Activities = () => {
  const { activities } = useSelector((state) => state);
  const navigate = useNavigate();
 
  const ActivityCard = (props) => {
    return (
      <div id='activity-card'>
        <h3>{props.title}</h3>
        {/* <a href={`#/books/${props.id}`}>
          <img
            src={props.imageUrl}
            className="books_page_img"
            alt="Book cover"
          />
        </a> */}
        {/* <br></br> */}
        {/* <Link to={`/books/${props.id}`}> */}
          {props.description}
          <br></br>
          <br></br>
          <font size='1'>Distance</font>
          <br></br>
          <font size='+2'>{props.distance} {props.measurement}</font>
        {/* </Link> */}
        {/* <strong>{props.author}</strong>
        <br></br>
        <br></br>${props.price} */}
      </div>
    );
  };

  return (
    <div id='activitycard-div'>
        {
            activities.map((activity) => (
                <div id='test'>
                <ActivityCard
                  id={activity.id}
                  key={activity.id}
                  title={activity.title}
                  description={activity.description}
                  distance={activity.distance}
                  measurement={activity.measurement}
                />
                </div>
            ))
        }
    </div>
  );
};

export default Activities;
