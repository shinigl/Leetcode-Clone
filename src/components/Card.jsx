import React from 'react'

function Card(props) {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
     <p>{props.data.Sr}</p>
     <p>{props.data.Title}</p>
     <p>{props.data.Difficulty}</p>
    </div>
  )
}

export default Card