import React from 'react'
import Car from './Car'
const Gar = () => {
    const info={colour:'black',brand:'ford'}
    const qstn="who is in the gar?"
 return (
    <div>
        <p>{qstn}</p>
<Car info={info}/>
    </div>
  )
}

export default Gar