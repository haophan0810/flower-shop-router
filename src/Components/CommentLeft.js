import React, { Component } from 'react'

export default class CommentLeft extends Component {
  render() {
    return (
        <div className="row-comment">
        <div className="comment-img">
          <div className="comment-img-wrap">
            <img src="images/customers/cus02.jpg" alt />
          </div>
        </div>
        <div className="comment-content">
          <p className="comment-content">"Những giỏ hoa phong lan thật tinh tế, tôi nghĩ chỉ có flowers.vn mới tạo được những sự tinh tế đó"</p>
          <p className="comment-user">--"Nguyễn Mạnh Quân"</p>
        </div>
        <div className="clear" />
      </div>
    )
  }
}
