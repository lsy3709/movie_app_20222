import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor 호출 hello');
  }

  componentDidMount() {
    console.log('componentDidMount 호출 component rendered');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 호출 I just updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 호출 goodbye, cruel world');
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
  
      count: current.count - 1,
    }));
  };


  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
