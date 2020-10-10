import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Counter: {this.state.counter}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default ClassComponent;


// componentDidUpdate(prevProps, prevState) {
//   const isEven = this.state.counter % 2 === 0;

//   if (prevState.isEven !== isEven) {
//     // eslint-disable-next-line react/no-did-update-set-state
//     this.setState({
//       isEven,
//     });
//   }
// }
