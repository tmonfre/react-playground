import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isEven: true,
    };
  }

  // bad practice to set stae in this lifecycle, but this is an example of setting twice instead of together

  // componentDidUpdate(prevProps, prevState) {
  //   const isEven = this.state.counter % 2 === 0;

  //   if (prevState.isEven !== isEven) {
  //     // eslint-disable-next-line react/no-did-update-set-state
  //     this.setState({
  //       isEven,
  //     });
  //   }
  // }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    console.log('resize');
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
      isEven: (prevState.counter + 1) % 2 === 0,
    }));
  }

  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
      isEven: (prevState.counter + 1) % 2 === 0,
    }));
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Counter: {this.state.counter}</p>
        <p>{this.state.isEven ? 'Even' : 'Odd'}</p>
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
