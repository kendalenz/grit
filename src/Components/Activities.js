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
        {/* <a href={`#/books/${props.id}`}>
          <img
            src={props.imageUrl}
            className="books_page_img"
            alt="Book cover"
          />
        </a> */}
        {/* <br></br> */}
        {/* <Link to={`/books/${props.id}`}> */}
          <strong>{props.description}</strong>
        {/* </Link> */}
        {/* <strong>{props.author}</strong>
        <br></br>
        <br></br>${props.price} */}
      </div>
    );
  };

  return (
    <div>
        {
            activities.map((activity) => (
                <ActivityCard
                  id={activity.id}
                  key={activity.id}
                  description={activity.description}
                />
            ))
        }
    </div>
  );
};

export default Books;
