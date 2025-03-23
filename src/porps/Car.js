import React from 'react';

const Car = ({ info }) => {
  const { colour, brand } = info;
  const text = `Hi, I am a ${brand} and ${colour} car.`;

  return (
    <>
      <p>I am a {colour} car from {brand}.</p>
      <p>{text}</p>
    </>
  );
};

export default Car;
