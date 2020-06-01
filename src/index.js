import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Random extends React.Component {
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

    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black' }>

                </h1>
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
