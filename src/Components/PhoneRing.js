import React, { Component } from 'react';
import './../AnimatePhoneRing.css';

export default class PhoneRing extends Component {
  render() {
    return (
        <div id="phone_box">
        <div className="phonering-alo-phone phonering-alo-green phonering-alo-show" id="phonering-alo-phoneIcon">
          <div className="phonering-alo-ph-circle" />
          <div className="phonering-alo-ph-circle-fill" />
          <a href="tel:0199999999" className="pps-btn-img" title="Liên hệ">
            <div className="phonering-alo-ph-img-circle" />
          </a>
        </div>
      </div>
      
    )
  }
}
