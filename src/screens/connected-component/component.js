import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../../state/actions';

const ConnectedComponent = (props) => {
  // could also import these from props because of connect function in ./index.js
  // this would avoid the use of useSelector and useDispatch

  // const {
  //   increment,
  //   decrement,
  //   counter
  // } = props;

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);

  const _increment = () => dispatch(increment());
  const _decrement = () => dispatch(decrement());

  return (
    <div>
      <h1>Connected Component</h1>
      <p>Counter: {counter}</p>
      <p>{counter % 2 === 0 ? 'Even' : 'Odd'}</p>
      <button type="button" onClick={_increment}>
        Increment
      </button>
      <button type="button" onClick={_decrement}>
        Decrement
      </button>
    </div>
  );
};

export default ConnectedComponent;
