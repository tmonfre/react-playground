import { combineReducers } from 'redux';

import CounterReducer from './counter';

const rootReducer = combineReducers({
  counter: CounterReducer,
});

export default rootReducer;
