import React from 'react';
import Car from './Car';

const Gar = ({ info }) => {
  const qstn = 'Who is in the gar?';

  return (
    <div>
      <p>{qstn}</p>
      <Car info={info} />
    </div>
  );
};

export default Gar;
