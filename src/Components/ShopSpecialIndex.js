import React, { Component } from 'react'

export default class ShopSpecialIndex extends Component {
  render() {
    return (
        <div id="shops-special">
        <div className="shop-special">
          <div className="shop-special-img">
            <img src="images/birthday-index.jpg" alt />
            <div className="div-img-frames" />
            <div className="div-img-bg">
              <a href="./products-birthday.htm" className="links-shop">
                <i className="fa fa-link links-shop" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="shop-special-name">
            <a href="./products-birthday.html" className="shop-special-name">Hoa sinh nhật</a>
          </div>
          <div className="shop-special-shop-now">
            <a href="./products-birthday.html" className="shop-special-shop-now">Ghé thăm cửa hàng</a>
          </div>
        </div>
        <div className="shop-special">
          <div className="shop-special-img">
            <img src="images/wedding-index.jpg" alt />
            <div className="div-img-frames" />
            <div className="div-img-bg">
              <a href="./products-wedding.html" className="links-shop">
                <i className="fa fa-link links-shop" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="shop-special-name">
            <a href="./products-wedding.html" className="shop-special-name">Hoa Cưới</a>
          </div>
          <div className="shop-special-shop-now">
            <a href="./products-wedding.html" className="shop-special-shop-now">Ghé thăm cửa hàng</a>
          </div>
        </div>
        <div className="shop-special">
          <div className="shop-special-img">
            <img src="images/chrismas-index.jpg" alt />
            <div className="div-img-frames" />
            <div className="div-img-bg">
              <a href="./products-require.html" className="links-shop">
                <i className="fa fa-link links-shop" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="shop-special-name">
            <a href="./products-chrismas.html" className="shop-special-name">Hoa Giáng Sinh</a>
          </div>
          <div className="shop-special-shop-now">
            <a href="./products-chrismas.html" className="shop-special-shop-now">Ghé thăm cửa hàng</a>
          </div>
        </div>
        <div className="clear" />
      </div>
    )
  }
}
