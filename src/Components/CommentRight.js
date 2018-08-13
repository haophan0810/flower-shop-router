import React, { Component } from 'react'

export default class CommentRight extends Component {
  render() {
    return (
        <div className="row-comment">
            <div className="comment-content-1">
              <p className="comment-content-1">"Thật tuyệt vời, khi bạn chỉ cần nói ra ý tưởng, flowers.vn sẽ giúp bạn tạo ra những sản phẩm từ ý tưởng
                đó!"
              </p>
              <p className="comment-user-1">"Phan Ngọc Minh"--</p>
            </div>
            <div className="comment-img">
              <div className="comment-img-wrap">
                <img src="images/customers/cus03.jpg" alt />
              </div>
            </div>
            <div className="clear" />
          </div>
    )
  }
}
