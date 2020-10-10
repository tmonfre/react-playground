import React, { useState, useEffect } from 'react';

function useLogger([value, setValue]) {
  useEffect(() => {
    console.log('New value: ', value);
  }, [value]);

  return [value, setValue];
}

const FunctionalComponent = (props) => {
  const [counter, setCounter] = useLogger(useState(0));
  const [isEven, setIsEven] = useState(true);

  useEffect(() => {
    setIsEven(counter % 2 === 0);
  }, [counter]);

  const increment = () => setCounter(prevCounter => prevCounter + 1);
  const decrement = () => setCounter(prevCounter => prevCounter - 1);

  const onResize = () => console.log('resized');

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div>
      <h1>Functional Component</h1>
      <p>Counter: {counter}</p>
      <p>{isEven ? 'Even' : 'Odd'}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default FunctionalComponent;
