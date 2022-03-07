import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../Data/danhSachGhe.json';
import HangGhe from './HangGhe';
import { connect } from 'react-redux';

export default class BaiTapBookingTicket extends Component {
  // Render ra hàng ghế
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  // Render ra được cái màn hình chứa các số ghế

  render() {
    // Cho backGroundSize: 100% thì ảnh nó sẽ full cái màn hình
    // Mặc định row sẽ sin ra cái roll ngang cho chúng ta, row mà không để trong container thì nó sẽ sinh ra cái roll ngang.
    return (
      <div
        className="bookingMovie"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundImage: 'url("./bookingTicket/bgmovie.jpg")',
          backgroundSize: '100%',
        }}
      >
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning" style={{ fontSize: 25 }}>
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                {/* Màn hình -> Muốn nó nhảy vào giữa thì cho nó cái div bọc bên ngoài thì nó sẽ full cây col-8 */}
                <div className="ml-5 d-flex flex-column justify-content-center">
                  <div className="text-light" style={{ fontSize: '20px' }}>
                    Màn hình
                  </div>
                  <div className="screen" style={{ marginLeft: 80 }}></div>
                  {/* Đặt bootstrap của hàng ghế tại đây Render theo từng hàng */}
                  {this.renderHangGhe()}
                </div>
              </div>

              <div className="col-4">
                <div
                  className="mt-4 text-info text-center"
                  style={{ fontSize: '40px', lineHeight: 1.2 }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                {/* Component thông tin về đặt ghế */}
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
