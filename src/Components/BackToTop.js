import React, { Component } from 'react'

export default class BackToTop extends Component {
  render() {
    return (
        <div className="back-to-top show-back-to-top">
        <a href="#nav-up" className="back-to-top">
          <i className="fa fa-arrow-up back-to-top" aria-hidden="true" />
        </a>
      </div>
      
    )
  }
}
