import React from 'react';

const ConnectedComponent = (props) => {
  return (
    <div>
      Connected Component
    </div>
  );
};

export default ConnectedComponent;


// import { ActionTypes } from '../../state/actions';

// const dispatch = useDispatch();

//   const counter = useSelector(state => state.counter.counter);

//   const increment = () => dispatch({ type: ActionTypes.INCREMENT });
//   const decrement = () => dispatch({ type: ActionTypes.DECREMENT });
