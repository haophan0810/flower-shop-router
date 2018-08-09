import React, { Component } from 'react';
import  './../Style.css';
import  './../index.css';

export default class Slide extends Component {
  render() {
    return (
      
        <aside id="wrap-slide">
  <ul className="slide">
    <li className="slide">
      <div className="slide-img" style={{backgroundImage: 'url("http://via.placeholder.com/1200x768")'}}>
      </div>
      <div className="slide-description">
        <h2 className="slide-description-header">Hoa Tết</h2>
        <div className="slide-line">
          <img src="./images/slide/line.png" alt="test"/>
        </div>
        <a href="./products-tet.html" className="slide-shop-now">Ghé thăm cửa hàng</a>
      </div>
    </li>
    <li className="slide slide-current-out">
      <div className="slide-img" style={{backgroundImage: 'url("http://via.placeholder.com/1200x768")'}}>
      </div>
      <div className="slide-description">
        <h2 className="slide-description-header">Hoa Mừng đám cưới</h2>
        <div className="slide-line">
          <img src="./images/slide/line.png" alt="test"/>
        </div>
        <a href="./products-wedding.html" className="slide-shop-now">Ghé thăm cửa hàng</a>
      </div>
    </li>
    <li className="slide show-img-slide slide-next-in">
      <div className="slide-img img-next-in0" style={{backgroundImage: 'url("http://via.placeholder.com/1200x768")'}}>
      </div>
      <div className="slide-description">
        <h2 className="slide-description-header slide-next-in">Hoa Sinh nhật</h2>
        <div className="slide-line slide-next-in">
          <img src="./images/slide/line.png" alt="test"/>
        </div>
        <a href="./products-birthday.html" className="slide-shop-now slide-next-in">Ghé thăm cửa hàng</a>
      </div>
    </li>
    <li className="slide">
      <div className="slide-img" style={{backgroundImage: 'url("http://via.placeholder.com/1200x768")'}}>
      </div>
      <div className="slide-description">
        <h2 className="slide-description-header">Hoa tình yêu</h2>
        <div className="slide-line">
          <img src="./images/slide/line.png" alt="test"/>
        </div>
        <a href="./products-love.html" className="slide-shop-now">Ghé thăm cửa hàng</a>
      </div>
    </li>
    <li className="slide">
      <div className="slide-img" style={{backgroundImage: 'url("http://via.placeholder.com/1200x768")'}}>
      </div>
      <div className="slide-description">
        <h2 className="slide-description-header">Hoa theo yêu cầu</h2>
        <div className="slide-line">
          <img src="./images/slide/line.png" alt="test"/>
        </div>
        <a href="./products-require.html" className="slide-shop-now">Đặt hoa ngay</a>
      </div>
    </li>
  </ul>
  <div className="slide-circle-routing">
    <ul className="slide-circle-routing">
      <li className="slide-circle-routing" data-index={0} />
      <li className="slide-circle-routing" data-index={1} />
      <li className="slide-circle-routing show-circle" data-index={2} />
      <li className="slide-circle-routing" data-index={3} />
      <li className="slide-circle-routing" data-index={4} />
    </ul>
  </div>
  <div className="clear" />
</aside>

      
    )
  }
}
