import React, { Component } from "react";

export default class CartModal extends Component {
  renderCart = () => {
    // Truyền giỏ hàng vào trong component card
    let { gioHang } = this.props;

    return gioHang.map((item, index) => {
      return ( 
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              style={{ width: "100px" }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button onClick={() => {this.props.tangGiamSoLuong(item.maSP,-1)}} className="btn btn-primary mr-2">-</button>
            {item.soLuong}
            <button onClick={() => {this.props.tangGiamSoLuong(item.maSP,1)}} className="btn btn-primary ml-2">+</button>
          </td>
          <td>{(item.donGia).toLocaleString()}</td>
          <td>{(item.soLuong * item.donGia).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteProduct(item.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
            <button className="btn btn-primary ml-1">Chỉnh sửa</button>
          </td>
        </tr>
      );
    });
  };

  // Viết phương thức thành tiền cho sản phẩm
  // Dựa vào props giỏ hàng mà chúng ta truyền qua từ bên kia để tính tổng tiền cho sản phẩm
  tinhTongTien = () => {
    let { gioHang } = this.props;
    
    return gioHang.reduce((total, item, index) => {
      return total += item.donGia * item.soLuong;
    },0).toLocaleString();

  } 

  render() {
    // let { content } = this.props;
    return (
      <div>
        {/* <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Launch
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ minWidth: "1000px" }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <p></p>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {/* Để table và modal-body để render ra giao diện */}
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng tiền: </td>
                      {/* Viết phương thức tính tổng tiền */}
                      <td>{this.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
