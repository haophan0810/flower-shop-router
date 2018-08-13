import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div id="footer-up-wrap">
          {/* FOOTER-UP */}
          <div id="footer-up">
            <div className="footer-col">
              <a href="./address.html" className="footer-up-icon">
                <i className="fa fa-map-marker footer-up-icon" aria-hidden="true" />
              </a>
              <p className="footer-up-title">Địa chỉ</p>
              <p className="footer-up-content">Số 14, ngõ 4, Nguyễn Đình Chiểu, Hai Bà Trưng, Hà Nội</p>
            </div>
            <div className="footer-col middle">
              <a href="tel:0199999999" className="footer-up-icon">
                <i className="fa fa-phone footer-up-icon" aria-hidden="true" />
              </a>
              <p className="footer-up-title">Điện thoại</p>
              <p className="footer-up-content">0199999999</p>
            </div>
            <div className="footer-col">
              <a href="mailto:info@flowers.vn" className="footer-up-icon">
                <i className="fa fa-envelope-o footer-up-icon" aria-hidden="true" />
              </a>
              <p className="footer-up-title">Email liên hệ</p>
              <p className="footer-up-content">info@flowers.vn</p>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* FOOTER DOWN */}
        <div className="clear" />
        <div id="footer-down-wrap">
          <div className="social-icon">
            <div className="wrap-icon-a">
              <a href="mailto:huuhaotk0810@gmail.com" title="mail" className="a-social-icon">
                <i className="fa fa-envelope-o social" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/" title="youtube" className="a-social-icon">
                <i className="fa fa-youtube-square social" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com" title="facebook" className="a-social-icon">
                <i className="fa fa-facebook-square social" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/" title="twitter" className="a-social-icon">
                <i className="fa fa-twitter-square social" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/" title="linkedin" className="a-social-icon">
                <i className="fa fa-linkedin-square social" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div id="footer-down">
            <span>© flowers.vn | 2017</span>
          </div>
        </div>
      </footer>
      
    )
  }
}
