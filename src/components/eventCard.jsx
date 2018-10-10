import React, { Component } from "react";

const eventCard = (props) => {

  return(
  <div className='event-card'>
    <h1> {props} </h1>
    <p> Location </p>
    <p> Date </p>
    <p> Time </p>
    <button> JOIN! </button>
    <button> ++Favorites </button>
  </div>
  )
}

export default eventCard;