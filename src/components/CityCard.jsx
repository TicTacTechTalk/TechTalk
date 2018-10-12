import React from "react";
// import eventCard from './eventCard'

const CityCard = (props) => {  
  return(
  <div className='city-card'>
    <button className='city-img-wrapper' onClick={() => props.toggleCity(props.location)}><img className='city-img' src={`../assets/${props.location.toLowerCase().split(' ').join('_')}.jpg`} /></button>
    <p> {props.location} </p>
  </div>
  )
}

export default CityCard;