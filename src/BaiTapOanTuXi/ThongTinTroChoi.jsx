import React, { Component } from 'react';
import { connect } from 'react-redux'

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.resultGame}</div>
        <div style={{ fontSize: '40px' }} className="text-success mt-5">
          Số bàn thắng:
          <span className="text-warning ml-2">{this.props.soBanThang}</span>
        </div>
        <div style={{ fontSize: '40px' }} className="text-secondary">
          Tổng số bàn chơi:
          <span className="text-info ml-2">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

// Những thầng theo dõi store khi mà dữ liệu load lên lại sẽ render lại giao diện
// Sau khi đã kết nối và Lấy dữ liệu từ store xuống thì phải binding ra giao diện
const mapStateToProps = (state) => {
  return {
    resultGame: state.BaiTapOanTuXiReducer.resultGame,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    tongSoBanChoi: state.BaiTapOanTuXiReducer.tongSoBanChoi,
  }
}

export default connect(mapStateToProps)(ThongTinTroChoi)