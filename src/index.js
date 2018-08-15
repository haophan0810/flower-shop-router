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
import RouterURL from './Components/router/RouterURL';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
            <div className="app">
                <Nav />
                <Slide />
                <TransformIndex />
                <RouterURL />
                <Footer />
                <BackToTop />
                <CartControl />
                <PhoneRing />
            </div>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
