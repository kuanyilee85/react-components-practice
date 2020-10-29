import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'John Smith'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          {' '}
          <h2>no error</h2>{' '}
        </div>
      )}
      {/* {!text && <h1>hello world</h1>} */}
    </>
  );
};

export default ShortCircuit;
