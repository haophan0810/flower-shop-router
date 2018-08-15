import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props);
    
  }
  
   render() {
    return (
        <div className="product" id={this.props.id}>
        <div className="content-product">
          <div className="image-product" style={{backgroundImage: `url("${this.props.src}")`}} title={this.props.title} alt={this.props.title} >
            <div className="img-product-bg">
              <div className="img-product-bg-a">
                <a href="./product-description.html" className="img-product-bg-a" >
                <span className="img-product-quick-view" data-id-product={this.props.id}>
                  <i className="fa fa-plus img-quick-view" aria-hidden="true" />
                </span>
                </a>
              </div>
            </div>
          </div>
          <div className="descrition">
            <div className="name-product">
              <a href>
                <span>{this.props.name}</span>
              </a>
            </div>
            <div className="cost-product">
              <span className="cost-product-sale promotion-sale" data-old-cost={this.props.cost}>{this.props.cost}</span>
              <span className="cost-product-not-sale" data-current-cost={this.props.cost*(100-this.props.sale)/100}>{this.props.cost*(100-this.props.sale)/100} đ</span>
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
              <span className="promotion">{this.props.codePromotion}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
