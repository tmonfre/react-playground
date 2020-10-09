import {
  ActionTypes as counterActionTypes,
  increment,
  decrement,
  setCounter,
} from './counter';

const ActionTypes = {
  ...counterActionTypes,
};

export {
  ActionTypes,
  increment,
  decrement,
  setCounter,
};
