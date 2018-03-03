import React, { Component } from 'react';
import logo from './buttons-n-stuff.gif';
import './App.css';
import CounterButton from './CounterButton';
import AddButtons from './AddButtons';
import RemoveButtons from './RemoveButtons';

class App extends Component {

    constructor(props) {
        super(props);
        this.addButtons = this.addButtons.bind(this);
        this.removeButtons = this.removeButtons.bind(this);
        this.launchClock();
        this.state = {
            buttons: [],
            currentTime: (new Date()).toLocaleString()
        }
    }

    componentWillMount() {
        this.addButtons();
    }

    shouldComponentUpdate(newProps, newState) {
        return this.state.opacity !== + newProps.isVisible
    }

    addButtons () {
        const buttons = this.state.buttons.concat(CounterButton);
        this.setState({ buttons })
    }

    launchClock() {
        setInterval(()=>{
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }

    removeButtons () {
        this.state.buttons.pop();
        this.setState({ buttons: this.state.buttons })
    }

    render() {
        const moreButtons = this.state.buttons.map((Element, i) => {
            // we can pass props to element here like this
            // <Element onClick={this.someHandleClickFunc} />
            return (
                <div key={i}>
                    <Element /> &nbsp;
                </div>
            )
        });

        return (
            // add buttons has clickMe prop instead of onClick because this is the prop we passed
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Click Counter</h1>
                    <AddButtons clickMe={this.addButtons}/> &nbsp;
                    <RemoveButtons onClick={this.removeButtons}/>
                </header>
                <p className="App-intro">
                    Click that button.
                </p>
                <div>{this.state.currentTime}</div>
                <div>{moreButtons}</div>
            </div>
        );
    }
}

export default App;
