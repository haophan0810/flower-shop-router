import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slide from './Components/Slide';
import Nav from './Components/Nav';
import TransformIndex from "./Components/TransformIndex.js";
import PreviewProduct from "./Components/PreviewProduct.js";


import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Nav />
                <Slide />
                <TransformIndex />
                <PreviewProduct />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
