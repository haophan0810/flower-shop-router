import React, { Component } from 'react'

export default class ArticleBlog extends Component {
  render() {
    return (
        <div className="article-blog">
        <div className="article-blog-img">
          <img src="images/2-2.jpg" alt />
          <div className="div-img-frames" />
          <div className="div-img-bg">
            <a href className="links-shop">
              <i className="fa fa-link links-shop" aria-hidden="true" />
            </a>
          </div>
        </div>
        <span className="article-blog-time">1-1 | 2018</span>
        <a className="article-blog-title">Chọn hoa cho ngày tết?</a>
      </div>
    )
  }
}
