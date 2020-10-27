import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // this one will run when value update: [value]
  useEffect(() => {
    console.log('call useEffect');
    if (value > 1) {
      document.title = `new message(${value})`;
    }
  }, [value]);

  // this one will only run at initial render: empty []
  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
