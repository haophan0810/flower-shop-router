import React, { Component } from 'react';
import  './../Style.css';

export default class Nav extends Component {
  render() {
    return (
      
        <header>
  {/* NAV UP */}
  <div id="nav-up-wrap">
    <div id="nav-up">
      {/* LOGO */}
      <div id="logo">
        <a href="./index.html" title="Trang chủ">
          <span className="text-logo">
            <img id="img-logo" src="images/logo-2.png" alt="new" title="Trang chủ" />
          </span>
        </a>
      </div>
      {/* SEARCH */}
      <div id="menu-search">
        <input type="text" name="search" id="ipt-search" placeholder="Bạn muốn tìm hoa gì?" />
        <i className="fa fa-search" aria-hidden="true" />
      </div>
      {/* PHONE */}
      <div id="menu-phone">
        <a href="tel:01999999999" title="Đặt hàng">
          <i className="fa fa-phone menu-phone" aria-hidden="true" />
          <span className="menu-oder">Đặt hàng:</span>
          <span className="menu-phone">01999999999</span>
        </a>
      </div>
      {/* CART */}
      <div id="menu-cart" className="show-cart">
        <a href="./cart.html" title="Giỏ hàng của bạn">
          <i className="fa fa-shopping-cart menu-cart" aria-hidden="true" />
          <sub className="menu-cart" data-number-product={0}>0</sub>
          <span className="menu-cart">Giỏ hàng</span>
        </a>
      </div>
      <div id="shortcut-menu">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
    </div>
  </div>
  <div className="clear" />
  {/* NAV-DOWN */}
  <div id="nav-down-wrap">
    <nav id="nav-down">
      {/* LIST MAIN */}
      {/* HOME ICON */}
      <div id="home">
        <a href="./index.html" title="Trang chủ">
          <i className="fa fa-home" aria-hidden="true" />
        </a>
      </div>
      {/* UL LV 1 */}
      <ul id="list-main">
        {/* LI BIRTHDAY */}
        <li className="list-item li-birthday level-1">
          <a className="a-level-1" href="./products-birthday.html" title="Hoa sinh nhật">Hoa sinh nhật</a>
        </li>
        <li className="list-item li-topic level-2">Chủ đề
          <i className="fa fa-caret-down" aria-hidden="true" />
          {/* OCCASIONS */}
          <ul id="list-occasions" className="menu-level-2">
            <li className="list-occations li-list-level-2">
              <a id="occation-christmas" href="./products-tet.html" title="Hoa tết">Hoa Tết</a>
            </li>
            <li className="list-occations li-list-level-2">
              <a id="occation-love" href="./products-love.html" title="Hoa tình yêu">Hoa Tình Yêu</a>
            </li>
            <li className="list-occations li-list-level-2">
              <a id="occations-graduation" href="./products-granduation.html" title="Hoa mừng tốt nghiệp">Hoa mừng tốt nghiệp</a>
            </li>
            <li className="list-occations li-list-level-2">
              <a id="occations-congra" href="./products-chrismas.html" title="Hoa giáng sinh">Hoa giáng sinh</a>
            </li>
            <li className="list-occations li-list-level-2">
              <a id="occations-thanks" href="./products-thanks.html" title="Hoa cám ơn">Hoa cám ơn</a>
            </li>
          </ul>
        </li>
        <li className="list-item li-flower level-2">Hoa Tươi
          <i className="fa fa-caret-down" aria-hidden="true" />
          {/* LIST FLOWERS */}
          <ul id="list-flowers" className="menu-level-2">
            <li className="list-flowers li-list-level-2">
              <a href="./products-rose.html" title="Hoa hồng">Hoa Hồng</a>
            </li>
            <li className="list-flowers li-list-level-2">
              <a href="./products-orchid.html" title="Hoa Lan">Hoa Lan</a>
            </li>
            <li className="list-flowers li-list-level-2">
              <a href="./products-lyli.html" title="Hoa Lily">Hoa Lily</a>
            </li>
            <li className="list-flowers li-list-level-2">
              <a href="./products-tulip.html" title="Hoa Tulip">Hoa Tulip</a>
            </li>
            <li className="list-flowers li-list-level-2">
              <a href="./products-flowers-other.html" title="Các loại hoa khác">Các loại hoa khác</a>
            </li>
          </ul>
        </li>
        <li className="list-item li-flower-special level-2">Hoa đặc biệt
          <i className="fa fa-caret-down" aria-hidden="true" />
          {/* LIST SPECIALS */}
          <ul id="list-specials" className="menu-level-2">
            <li className="list-specials li-list-level-2">
              <a href="./products-funeral.html" title="Hoa chia buồn">Hoa Chia buồn</a>
            </li>
            <li className="list-specials li-list-level-2">
              <a href="./products-sale.html" title="Hoa Khuyến mại">Hoa khuyến mại</a>
            </li>
            <li className="list-specials li-list-level-2">
              <a href="./products-visit.html" title="Hoa thăm hỏi">Hoa thăm hỏi</a>
            </li>
            <li className="list-specials li-list-level-2">
              <a href="./products-special.html" title="Hoa đặc biệt">Hoa đặc biệt</a>
            </li>
            <li className="list-specials li-list-level-2">
              <a href="./products-granduation.html" title="Hoa tốt nghiệp">Hoa tốt nghiệp</a>
            </li>
          </ul>
        </li>
        <li className="list-item li-wedding level-1">
          <a className="a-level-1" href="./products-wedding.html" title="Hoa Cưới">Hoa Cưới</a>
        </li>
        <li className="list-item li-require level-1">
          <a className="a-level-1" href="./products-require.html" title="Hoa theo yêu cầu">Hoa Theo Yêu cầu</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

      
    )
  }
}
