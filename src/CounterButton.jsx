import React from 'react';

export default class CounterButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
        this.state = {
            counter: 0,
            click: true
        }
    }

    handleClick () {
        const counter = this.state.counter < 30 ? this.state.counter + 1 : 0;
        this.setState({counter})
    }

    handleDecrement () {
        const counter = this.state.counter < 1 ? 30 : this.state.counter - 1;
        if (counter === 0 && this.interval) {
            clearInterval(this.interval)
        }
        this.setState({counter})
    }

    startCountdown () {
        // TODO if we start counter when it reaches zero clearInterval is called, conditional logic is wrong
        if (this.state.click && this.state.counter > 0) {
            this.interval = setInterval(this.handleDecrement, 1000);
            this.setState({click: false});
        } else {
            clearInterval(this.interval);
            this.setState({click: true});
        }
    }

    render () {
        /* when adding custom attributes we have to prefix them with "data-"
        data-counter = {this.state.counter}
        actually we don't (code will still work) but IDE complains if we don't prefix with "data-" */
        return (
            <div>
                <div>
                    <button
                        className = "Countdown-button"
                        onClick = {this.startCountdown} >
                        Start/Stop Countdown
                    </button>
                </div>
                <div>
                    <button
                        className = "Counter-button"
                        onClick = {this.handleClick}
                        defaultValue='text' >
                        {this.state.counter}
                    </button>
                </div>
                <div>
                    <button
                        className = "Increment-button"
                        onClick = {this.handleClick}>+
                    </button>
                    <button
                        className = "Decrement-button"
                        onClick = {this.handleDecrement}>-
                    </button>
                </div>
            </div>
        )
    }
}