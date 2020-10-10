import { connect } from 'react-redux';

import { increment, decrement } from '../../state/actions';

import ConnectedComponent from './component';

const mapStateToProps = (state) => {
  const {
    counter: {
      counter,
    },
  } = state;

  return {
    counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedComponent);
