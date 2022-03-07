import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
  // Component người chơi

  // Viết mảng render ra Kéo búa bao
  renderOanTuXi = () => {
    return this.props.mangDatCuoc.map((item, index) => {
      // Xét giá trị đặt cược thêm viền cho item được chọn
      let border = {};

      if (item.datCuoc) {
        border = { border: '3px solid orange' };
      }
      return (
        <div key={index} className="col-4">
          <button
            onClick={() => {
              this.props.datCuocGame(item.ma);
            }}
            style={border}
            className="btnItem"
          >
            <img
              style={{ width: '35px', height: '35px' }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </button>
        </div>
      );
    });
  };

  // Viết hàm render ra giao diện của người dùng
  // Sau đó binding dữ liệu lên giao diện
  // lag quá trời là rồi d..m trời ơi là trời
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-5"
            style={{
              width: '50px',
              height: '50px',
              transform: 'rotate(120deg )',
            }}
            // Lấy hình ảnh trùng với hình ảnh mà mình click ở bên dưới
            src={this.props.mangDatCuoc.find((item) => item.datCuoc).hinhAnh}
            alt={this.props.mangDatCuoc.find((item) => item.datCuoc).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        {/* Cho Hình ảnh của người chơi vào đây/ */}
        <img
          style={{ width: '150px', height: '150 px' }}
          src="./img_OanTuXi/player.png"
          alt="PlayerGame"
        />

        {/* Cho thêm một cái class = row */}
        <div className="row">{this.renderOanTuXi()}</div>
      </div>
    );
  }
}

// Lấy dữ liệu mangDatCuoc được lưu trữ trên kho về
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

// Xây dựng hàm nhận sự kiện từ nút button và gửi lên Reducer
const mapDispatchToProps = (dispatch) => {
  return {
    datCuocGame: (maCuoc) => {
      dispatch({
        type: 'DAT_CUOC_GAME',
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
