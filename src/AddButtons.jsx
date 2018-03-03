import React from 'react';

export default class CounterButton extends React.Component {
    render () {
        return (
            <button
                className = "Add-buttons"
                onClick = {this.props.clickMe} // we can pass props like this, check App.js te see passing the prop
                defaultValue='text'>
                Add more buttons!
            </button>
        )
    }
}
