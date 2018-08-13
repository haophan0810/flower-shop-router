import React, { Component } from 'react'

export default class ShopInfo extends Component {
  render() {
    return (
        <aside id="info-shop">
        <div className="wrap info-shop">
          <div className="info-shop-content-wrap">
            <h2 className="info-shop-content-title">Xin chào</h2>
            <p className="info-shop-content">Xin chào, tôi là một Web deverloper. Ngoài công việc chính, với sự yêu thích cây cỏ, hoa lá, động vật. Tôi cùng với mọi người đã tạo ra shop hoa flowers.vn...
            </p>
            <a href="./info.html" className="info-shop-read-more">Xem thêm về chúng tôi</a>
          </div>
          <div className="info-shop-img">
            <div className="info-shop-img-wrap">
              <img src="./images/slide/1.jpg" alt />
            </div>
            <div className="info-shop-img-bg" />
            <div className="info-shop-img-frames" />
          </div>
          <div className="clear" />
        </div>
      </aside>
    )
  }
}
