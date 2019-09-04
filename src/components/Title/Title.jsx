import React from 'react';
import classes from './Title.module.css'

class Title extends React.Component {

    render() {

        return (
            <div className={classes.title}>
                <p>This is a simple counter</p>

            </div>
        );
    }
}

export default Title;