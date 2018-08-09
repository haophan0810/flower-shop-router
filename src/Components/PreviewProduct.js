import React, { Component } from 'react';
import './../index.css';

export default class PreviewProduct extends Component {
  render() {
    return (
        <div id="preview-product">
        <div className="wrap-preview-product">
          <div className="preview-product">
            <div className="preview-product-title">
              <div className="preview-product-name">
                <h2 className="name-product-preview">
                  <span className="code-product" />
                </h2>
                <div className="preview-product-rating">
                  <i className="fa fa-star preview-product-rating-icon" aria-hidden="true" />
                  <i className="fa fa-star preview-product-rating-icon" aria-hidden="true" />
                  <i className="fa fa-star preview-product-rating-icon" aria-hidden="true" />
                  <i className="fa fa-star preview-product-rating-icon" aria-hidden="true" />
                  <i className="fa fa-star preview-product-rating-icon" aria-hidden="true" />
                </div>
              </div>
              <i className="fa fa-times-circle-o preview-product" aria-hidden="true" />
              <div className="clear" />
            </div>
            <div className="clear" />
            <aside id="preview-left">
              <div id="aside-img-left">
                <img src="images/des-test.jpg" alt='des' />
              </div>
            </aside>
            <aside id="preview-right">
              <div className="aside-right">
                <h2 id="aside-right-cost">
                  <span className="product-sale-cost" />
                  <span className="product-current-cost" />
                </h2>
                <div id="aside-right-des">
                </div>                   
                <div id="aside-right-buy-now">
                  <a href="./cart.html" target="_blank" className="buy-now" data-id-product>Mua ngay</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      
    )
  }
}
