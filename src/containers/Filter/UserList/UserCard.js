import React from "react";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <img className="avatar" src={props.image} alt="avatar" />
      <span className="name">{props.username}</span>
      <span className="date">{props.date}</span>
      <span className="country">{props.country}</span>
    </div>
  );
};

export default UserCard;
