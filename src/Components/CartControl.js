import React, { Component } from 'react'

export default class CartControl extends Component {
  render() {
    return (
        <a href="cart.html" className="cart-scrolled">
        <div className="cart-scrolled">
          <div className="icon-cart-scrolled">
            <i className="fa fa-shopping-cart icon-cart-scrolled" aria-hidden="true" />
          </div>
          <div className="cart-scrolled-notification">
            <span className="notification-title">Giỏ hàng có</span>
            <span className="notification-number">0 sản phẩm</span>
          </div>
        </div>
      </a>
      
    )
  }
}
