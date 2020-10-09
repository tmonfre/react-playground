export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_COUNTER: 'SET_COUNTER',
};

/**
 * @description action creator for incrementing
 */
export const increment = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.INCREMENT });
  };
};

/**
 * @description action creator for decrementing
 */
export const decrement = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.DECREMENT });
  };
};

/**
 * @description action creator for setting counter value explicitly
 */
export const setCounter = (counterValue) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SET_COUNTER, payload: counterValue });
  };
};
