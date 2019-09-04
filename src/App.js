import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Counter from './components/Counter/Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  resetCounter = () => {
    this.setState({
      counter: 0
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Title />
        <Counter state={this.state.counter}
          increase={this.increaseCounter}
          decrease={this.decreaseCounter}
          reset={this.resetCounter} />
      </div>
    );
  }


}

export default App;

