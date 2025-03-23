import React from 'react';
import Gar from '../Gar';

const List = () => {
  const lits = [
    { brand: 'ford', clr: 'black' },
    { brand: 'bmw', clr: 'white' },
    { brand: 'jaguar', clr: 'red' },
  ];

  return (
    <div>
      <ul>
        {lits.map((item, index) => (
          <li key={index}>
            <Gar info={{ brand: item.brand, colour: item.clr }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
