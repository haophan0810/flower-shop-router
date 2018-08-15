import React, { Component } from 'react';
import './../info.css';
export default class AboutMe extends Component {
  render() {
    return (
        <div className="wrap">
        <h2 className="title">Giới thiệu về flowers.vn</h2>
        <div className="line-title">
          <img src="./images/slide/line.png" alt="ablout" />
        </div>
        <div id="content">
          <section className="info-about">
            <h2>Flowers.vn</h2>
            <p>Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
              Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum
              porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis
              a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla
              porttitor accumsan tincidunt.</p>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.
              Nulla porttitor accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula
              sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Vivamus magna
              justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque
              nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero
              malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.
            </p>
          </section>
          <section className="contact-about">
            <h2>Liên hệ</h2>
            <p>Liên lạc qua điện thoại:
              <a href="tel:01642248648" className="phone">01999999999</a>
            </p>
            <p>Liên lạc qua email:
              <a href="mailto:huuhaotk0810@gmail.com">
                <span>support@flowers.vn</span>
              </a>
            </p>
            <p>Fanpage của flowers.vn:
              <a href="https://www.facebook.com/Return-Restaurant-138849450095244/" >
                <span>flowers.vn</span>
              </a>
            </p>
            <p>Đối tác có nhu cầu hợp tác quảng cáo hoặc kinh doanh:
              <a href="mailto:marketing@flowers.vn">
                <span>marketing@flowers.vn</span>
              </a>
            </p>
          </section>
          <section className="office-about">
            <h2>Địa chỉ cửa hàng</h2>
            <span className="address-office"><strong>Địa chỉ:</strong> Số 4, ngõ 4, Nguyễn Đình Chiểu, Hà Nội</span>
            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Curabitur arcu
              erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
              Cras ultricies ligula sed magna dictum porta.</p>
            <p>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Vivamus magna
              justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor
              volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula.
            </p>
          </section>
          <section className="questions">
            <h2>Câu hỏi thường gặp</h2>
            <h4>Câu hỏi:</h4>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Proin eget
              tortor risus.</p>
            <h4>Trả lời:</h4>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor
              volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere
              blandit. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula.</p>
            <p>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Praesent
              sapien massa, convallis a pellentesque nec, egestas non nisi.
            </p>
            <div className="line-info" />
            <h4>Câu hỏi:</h4>
            <p>Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h4>Trả lời:</h4>
            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit.
              Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet
              et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
            <p>Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
            <div className="line-info" />
            <h4>Câu hỏi:</h4>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
            <h4>Trả lời:</h4>
            <p>Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
              sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
              neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta
              dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.</p>
            <div className="line-info" />
            <h4>Câu hỏi:</h4>
            <p>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</p>
            <h4>Trả lời:</h4>
            <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis
              at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
            <p>Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum
              id enim.</p>
          </section>
          <section className="order">
            <h2>Hướng dẫn đặt hàng</h2>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis
              quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a.
            </p>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
              quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.
            </p>
          </section>
          <section className="transport">
            <h2>Phương thức vận chuyển</h2>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis
              quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a.
            </p>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
              quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.
            </p>
          </section>          
          <section className="recruit">
            <h2>Tuyển dụng</h2>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis
              quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a.
            </p>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
              quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.
            </p>
          </section> 
        </div>
      </div>
      
    )
  }
}
