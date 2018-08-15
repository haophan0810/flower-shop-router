import React, { Component } from 'react';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import MainContentIndex from '../MainContentIndex';
import AboutMe from '../AboutMe';
import Slide from '../Slide';
import TransformIndex from '../TransformIndex';

export default class RouterURL extends Component {
  render() {
    return (
      
         <div>
      
            {/* <Route exact path="/" component={Slide} /> */}
            {/* <Route exact path="/" component={TransformIndex} /> */}
            <Route exact path="/" component={MainContentIndex} />

            <Route path="/about" component={AboutMe} />
        </div>
    )
  }
}
