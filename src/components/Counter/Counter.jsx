import React from 'react';
import classes from './Counter.module.css'

class Counter extends React.Component {
    render() {
        return (
            <div className={classes.counter}>
                <p>{this.props.state}</p>
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
                <button onClick={this.props.reset}>reset</button>
            </div>
        );
    }
}

export default Counter;