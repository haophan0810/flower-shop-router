import React, { Component } from 'react';
import ShopSpecialIndex from './ShopSpecialIndex.js';
import Product from './Product.js';
import ShopInfo from './ShopInfo.js';
import PromotionOne from './PromotionOne.js';
import PromotionTwo from './PromotionTwo.js';
import CommentLeft from './CommentLeft.js';
import CommentRight from './CommentRight.js';
import PromotionThre from './PromotionThree.js';
import ArticleBlog from './ArticleBlog.js';



import './../index.css';

export default class MainContentIndex extends Component {
  render() {
    return (
        <section id="main-section">
        <div className="wrap">
         <ShopSpecialIndex />
        </div>
        {/* INFO */}
        <ShopInfo />
        <div className="wrap">
          {/* PRODUCTS NEW */}
          <div id="products-special">
            <div className="title-group">Hoa Đặc biệt
              <div className="line-title">
                <img src="./images/slide/line.png" alt />
              </div>
            </div>
            <div className="all-products" id="content-products-special">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

            <div className="clear" ></div>
            </div>
            </div>
        </div>
        {/* SALE 1 */}
        <PromotionOne />
        {/* PRODUCTS HOT */}
        <div className="wrap">
          <div id="products-hot">
            <div className="title-group">Hoa bán chạy
              <div className="line-title">
                <img src="./images/slide/line.png" alt />
              </div>
            </div>
            <div className="all-products" id="content-products-best-sellest">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

              </div>
            <div className="clear" />
          </div>
        </div>
        {/* SALE 2 */}
       <PromotionTwo />
        <div className="wrap">
          <h2 className="comment-header">Hoa ở flowers.vn như thế nào?</h2>
          <div className="line-title">
            <img src="./images/slide/line.png" alt />
          </div>
          <CommentLeft />
          <CommentRight />
          <CommentLeft />
          <CommentRight />
          
        </div>
        {/* Sale3 */}
        <PromotionThre />
        {/* BLOG */}
        <div className="wrap">
          <h2 className="blog-header">Blog</h2>
          <div className="line-title">
            <img src="./images/slide/line.png" alt />
          </div>
          <div id="blog">
            <ArticleBlog />
            <ArticleBlog />
            <ArticleBlog />

            <div className="clear" />
            <div className="blog-read-more">
              <a href className="blog-read-more">
                Xem thêm
              </a>
            </div>
          </div>
        </div>
        {/* FOLLOW ME */}
        <aside id="follow-us">
          <div className="wrap">
            <div className="follow-us">
              <span className="follow-text">Theo dõi những thông tin mới nhất</span>
              <input type="text" name="follow" id="mail-follow" placeholder="Enter Email" />
              <div className="follow-submit">
                <div className="btn-follow">Submit</div>
              </div>
            </div>
          </div>
        </aside>
        <aside id="send-question">
          <div className="wrap">
            <h2 className="header-question">Bạn có câu hỏi nào?</h2>
            <div className="line-title">
              <img src="./images/slide/line.png" alt />
            </div>
            <div className="question-wrap">
              <div className="question-user-name">
                <input type="text" name="name-user" id="name-user" placeholder="Name *" />
              </div>
              <div className="question-email-user">
                <input type="text" name="email-user" id="email-user" placeholder="Email *" />
              </div>
            </div>
            <div className="question-textarea">
              <textarea name="message" id="message-question" placeholder="Câu hỏi" defaultValue={""} />
            </div>
            <div className="send-message">
              <a className="send-message">Gửi câu hỏi</a>
            </div>
          </div>
        </aside>
        <div className="clear" />
      </section>
      
    )
  }
}
