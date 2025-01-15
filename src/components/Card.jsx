import React from 'react'
import { useContext } from 'react';
import {myContext} from '../main'

function Card(props) {

const ctx = useContext(myContext);

  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around', height: '50px',
      alignItems: 'center'}}>
     <p>{props.data.Sr}</p>
     <p>{props.data.Title}</p>
     <p>{props.data.Difficulty}</p>
    </div>
    </>
  )
}

export default Card