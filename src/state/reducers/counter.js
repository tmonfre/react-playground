import { ActionTypes } from '../actions';

const initialState = {
  counter: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case ActionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case ActionTypes.SET_COUNTER:
      return { ...state, counter: action.payload };

    default:
      return state;
  }
};

export default CounterReducer;
