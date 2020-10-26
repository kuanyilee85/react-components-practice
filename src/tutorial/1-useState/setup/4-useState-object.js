import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 24,
    message: 'random message',
  });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random, message');

  const changeMessage = () => {
    // use ...separate operator in useState hook preventing other parameter being wipe out in object
    // setPerson({ ...person, message: 'hello world' });

    // you can also set many small state rather than a object contain many property
    setMessage('hello world');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
