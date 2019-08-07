import React from 'react';

const Avatarlist = (props) => {
  return (
    <div className="avatardivstyle mb4 bg-light-purple dib pa3 grow shadow-4 tc">
      <img className="avatarstyle" src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
      <h1>{props.name}</h1>
      <p>{props.work}</p>
    </div>
  )
}

export default Avatarlist;