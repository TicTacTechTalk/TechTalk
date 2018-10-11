import React, { Component } from "react";

const EventCard = (props) => {

  console.log('PROPS ===>', props)

  return(
  <div className='event-card'>
    <h1> {props.name} </h1>
    <p> {props.city} </p>
    <p> {props.date} </p>
    <p> {props.organizedBy} </p>
    <button> JOIN! </button>
    <button> ++Favorites </button>
  </div>
  )
}

export default EventCard;