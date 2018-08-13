import React, { Component } from 'react'

export default class PromotionOne extends Component {
  render() {
    return (
        <div id="promotion">
        <div className="promotion">
          <div className="promotion-wrap">
            <div className="promotion-description">
              <h2 className="promotion-description-title">Hoa tình yêu</h2>
              <div className="line-title">
                <img src="./images/slide/line.png" alt />
              </div>
              <p className="promotion-description-text">
                Đôi khi để thổ lộ tình yêu hay tỏ tình với một cô gái, bạn không nhất thiết phải nói câu “I love you”. Chỉ cần gửi nàng một bó hoa tươi đẹp là đủ để bày tỏ tình cảm của mình. Vậy, đã bao giờ bạn thắc mắc tại sao những đóa hoa tươi lại có sức mạnh tuyệt vời đến như vậy? Đó là vì hoa tượng trưng cho cảm xúc. Cũng như chúng mang những ý nghĩa đặc biệt và ngôn ngữ riêng của mình.</p>
              <a href="./products-love.html" className="promotion-shop-now">Đến cửa hàng</a>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    )
  }
}
