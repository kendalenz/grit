
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const User = (props) => {
  const { users } = useSelector((state) => state);
  const { id } = useParams();

  const user = users.find((user) => user.id === id);

//   if (!user) return <h1>...loading</h1>;

//   const UserCard = (props) => {
//     return (
//         <div id='user-card'>
//             <img id='profile-image'
//             src={props.profileImage}
//             ></img>
//             <h3>{props.firstName} {props.lastName}</h3>
//         </div>
//     );
//   };

  return (
    <div>
     <div id='usercard-div'>
      { 
        <div id='side-nav'>
           {/* {user.id}
            {user.id} */}
            <div id='photo-name'>
         <img id='profile-image'
           src={props.profileImage}
            ></img>
            <h4>{props.firstName} {props.lastName}</h4>
            </div>
            <hr></hr>

            <p id='follower-info'>Following: 84 | Followers: 92 | Activities: 1,054</p>
           </div>
        // users.map((user) => (
        //   <div id='usercard-div-2'>
        //     {/* {user.id}
        //     {user.id} */}
        //     <img id='profile-image'
        //     src={user.profileImage}
        //     ></img>
        //     <h3>{props.firstName} {props.lastName}</h3>
        //   </div>
        // ))
      }
    </div>
   </div>
  );
};

export default User;