import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { sanPhamProps } = this.props;

    return (
      <div className="card text-left text-center">
        <img
          style={{ height: 350 }}
          src={sanPhamProps.hinhAnh}
          alt={sanPhamProps.hinhAnh}
        />
        <div className="card-body bg-info">
          <h5 className="card-title">{sanPhamProps.tenSP}</h5>
          <p className="card-text">Hệ điều hành: {sanPhamProps.heDieuHanh}</p>
          <p className="card-text">
            Giá bán: {sanPhamProps.giaBan.toLocaleString()}
          </p>
          <button
            onClick={() => {
              this.props.xemChiTiet(this.props.sanPhamProps);
            }}
            className="btn btn-success text-white"
          >
            Xem chi tiết
            <i className="fa fa-info-circle ml-2"></i>
          </button>

          <button onClick={() => {this.props.addCart(sanPhamProps)}} className="btn btn-secondary ml-2">
            Thêm giỏ hàng
            <i class="fa fa-shopping-cart ml-2"></i>
          </button>
        </div>
      </div>
    );
  }
}
