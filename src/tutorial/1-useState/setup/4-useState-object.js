import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 24,
    message: 'random message',
  });
  const changeMessage = () => {
    // use ...separate operator in useState hook prevent other parameter being wipe out in object
    setPerson({ ...person, message: 'hello world' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
