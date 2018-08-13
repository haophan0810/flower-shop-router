import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slide from './Components/Slide';
import Nav from './Components/Nav';
import TransformIndex from "./Components/TransformIndex.js";
// import PreviewProduct from "./Components/PreviewProduct.js";
import MainContentIndex from './Components/MainContentIndex.js';
import registerServiceWorker from './registerServiceWorker';
import Footer from './Components/Footer.js';
import BackToTop from './Components/BackToTop.js';
import CartControl from './Components/CartControl.js';
import PhoneRing from './Components/PhoneRing.js';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Nav />
                <Slide />
                <TransformIndex />
                <MainContentIndex />
                <Footer />
                <BackToTop />
                <CartControl />
                <PhoneRing />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
