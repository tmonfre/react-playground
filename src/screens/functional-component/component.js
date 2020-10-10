import React, { useState } from 'react';

const FunctionalComponent = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prevCounter => prevCounter + 1);
  const decrement = () => setCounter(prevCounter => prevCounter - 1);

  return (
    <div>
      <h1>Functional Component</h1>
      <p>Counter: {counter}</p>
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


// const onResize = () => console.log('resized');

// useEffect(() => {
//   window.addEventListener('resize', onResize);
//   return () => window.removeEventListener('resize', onResize);
// }, []);
