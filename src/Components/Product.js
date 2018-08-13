import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div className="product" id="SN01">
        <div className="content-product">
          <div className="image-product" style={{backgroundImage: 'url("images/birthday/SN01.jpg")'}} title="Giỏ hoa sinh nhật ngọt ngào">
            <div className="img-product-bg">
              <div className="img-product-bg-a">
                <a href="./product-description.html" className="img-product-bg-a" />
                <span className="img-product-quick-view" data-id-product="SN01">
                  <i className="fa fa-plus img-quick-view" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <div className="descrition">
            <div className="name-product">
              <a href>
                <span>Sinh Nhật Ngọt Ngào</span>
              </a>
            </div>
            <div className="cost-product">
              <span className="cost-product-sale promotion-sale" data-old-cost={500000}>500.000 đ</span>
              <span className="cost-product-not-sale" data-current-cost={450000}>450.000 đ</span>
            </div>
            <div className="rating-product">
              <i className="fa fa-star rating-product" aria-hidden="true" />
              <i className="fa fa-star rating-product" aria-hidden="true" />
              <i className="fa fa-star rating-product" aria-hidden="true" />
              <i className="fa fa-star rating-product" aria-hidden="true" />
              <i className="fa fa-star rating-product" aria-hidden="true" />
            </div>
            <div className="shopping-cart">
              <div className="shopping-cart-div" data-id-product="SN01">
                <i className="fa fa-shopping-cart product-cart" aria-hidden="true" />
                <span className="shopping-cart-span">Thêm vào giỏ hàng</span>
              </div>
            </div>
          </div>
          <div className="special-product promotion-sale">
            <div className="hot-product">
              <span className="promotion">off</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
