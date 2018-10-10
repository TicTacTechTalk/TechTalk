import React from "react";
// import eventCard from './eventCard'

const CityCard = (props) => {
  console.log(props)
  return(
  <div className='city-card'>
    <button> CITY PICTURE </button>
    <p> {props.location} </p>
  </div>
  )
}

export default CityCard;