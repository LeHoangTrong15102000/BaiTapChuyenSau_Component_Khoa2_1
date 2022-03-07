import React, { Component } from 'react';
import GioHangRedux from './GioHangRedux';
import ProductListRedux from './ProductListRedux';

//Import thư viện connect kết nối react component - redux store
import { connect } from 'react-redux';
class BaiTapGioHangRedux extends Component {
  // Bây giờ chúng ta viết các hàm làm render lại giao diện trong phần Redux của Project

  // Tính tổng số lượng của giỏ hàng ngay tại cart shopping
  renderSoLuong = () => {
    return this.props.gioHang.reduce((total, item, index) => {
      return (total += item.soLuong);
    }, 0);
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="display-4 text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div style={{ fontSize: '20px' }} className="text-right mr-5">
          <span
            style={{ cursor: 'pointer', width: '17px' }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng:{' '}
            <i class="fa fa-shopping-cart">({this.renderSoLuong()})</i>
          </span>
        </div>
        <GioHangRedux />
        <ProductListRedux />
      </div>
    );
  }
}

// Viết hàm lấy giá trị state từ Redux store về biến thành props component
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang, // Biến nó thành props
  };
};

export default connect(mapStateToProps)(BaiTapGioHangRedux);
