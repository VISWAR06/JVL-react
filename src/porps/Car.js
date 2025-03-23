import React from 'react'

const Car = ({info}) => {
    const{colour,brand}=info
    const text= `hi i am ${brand} and ${colour} car`
  return (
  <><p> i am a {colour} car from {brand} </p>
   <p>{text}</p>
   </> 
  )
}

export default Car