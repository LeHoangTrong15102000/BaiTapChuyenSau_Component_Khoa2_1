import React, { Component } from 'react';
import { connect } from 'react-redux';
class ThongTinTroChoi extends Component {
  // Tại component này thì chúng ta kết nối với store của Redux
  render() {
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN:{' '}
          <span className="text-danger">
            {this.props.taiXiu ? 'TÀI' : 'XỈU'}
          </span>
        </div>

        <div className="display-4">
          SỐ BÀN THẮNG:
          <span className="text-success ml-2">{this.props.soBanThang}</span>
        </div>

        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:
          <span className="text-info ml-2">{this.props.tongSoLanChoi}</span>
        </div>
      </div>
    );
  }
}

// Viết hàm lấy dữ liệu từ store về
const mapStateToProps = (state) => {
  return {

    // Lấy dữ liệu thay đổi từ Redux store về và render ra lại giao diện
    taiXiu: state.BaiTapXucXacReducer.taiXiu,
    soBanThang: state.BaiTapXucXacReducer.soBanThang,
    tongSoLanChoi: state.BaiTapXucXacReducer.tongSoLanChoi,
  };
};

export default connect(mapStateToProps)(ThongTinTroChoi);
