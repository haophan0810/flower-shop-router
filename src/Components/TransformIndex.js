import React, { Component } from 'react';
import '../Style.css';
export default class TransformIndex extends Component {
  render() {
    return (
        <aside id="notification-transport">
        <div className="notification-transport-wrap">
          <i className="fa fa-truck notification-transport" aria-hidden="true" />
          <span className="notification-transport">Miễn phí vận chuyển trong nội thành Hà Nội vào Chủ Nhật hàng tuần</span>
          <a href="./products-special.html" className="notification-transport">Ghé thăm cửa hàng</a>
        </div>
      </aside>
      
    )
  }
}
