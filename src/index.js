import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colour: [120, 90, 255]
        }
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount() {
        this.applyColour();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyColour();
    }

    formatColour(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    isLight() {
        const rgb = this.state.colour;
        return rgb.reduce((a,b) => a+b) < 127 * 3;
    }

    applyColour() {
        const colour = this.formatColour(this.state.colour);
        document.body.style.background = colour;
    }

    chooseColour() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random()* 256));
        }
        return random;
    }

    handleClick() {
        this.setState({
            colour: this.chooseColour()
        });
    }

    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black' }>
                    Your colour is {this.formatColour(this.state.colour)}!
                </h1>
                <Button
                light={this.isLight()}
                onClick={this.handleClick}/>
            </div>
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Random />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
