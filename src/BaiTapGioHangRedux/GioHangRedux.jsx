import React, { Component } from 'react';
// Sử dụng thư viện connect để lấy dữ liệu từ store về
// Nơi nào mà lấy dữ liệu từ store về thì mình phải bỏ 2 từ "Export default của component"
import { connect } from 'react-redux';

class GioHangRedux extends Component {
  // Hàm render giỏ hàng
  renderCart = () => {
    // sau khi lấy được thuộc tính gioHang của state chứa trong redux, ta sẽ dùng vòng lặp để duyệt qua
    // Phải để từ khóa "this.props" tại vì giờ nó là props của component
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              style={{ width: '100px' }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              style={{ width: '37px' }}
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, false);
              }}
              className="btn btn-primary mr-2"
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, true);
              }}
              className="btn btn-primary ml-2"
            >
              +
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(item.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  // Hàm tính tổng tiền
  tinhTongTien = () => {
    // Phương thức này cũng sẽ viết trong Redux của giỏ hàng
    return this.props.gioHang
      .reduce((total, item, index) => {
        return (total += item.soLuong * item.giaBan);
      }, 0)
      .toLocaleString();
  };

  render() {
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
            style={{ minWidth: '1000px' }}
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
                      <th colSpan="5"></th>
                      <th>Tổng tiền: </th>
                      {/* Viết phương thức tính tổng tiền */}
                      <th>{this.tinhTongTien()}</th>
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

// export thư viện connect chứa component nó ra
// Hàm lấy state của redux biến đổi thành props của component, cái hàm này sẽ nhận giá trị từ redux đó chính là rootReducer
const mapStateToProps = (state) => {
  // state là state tổng của ứng dụng chứa các state con (Reducer)
  // Hàm này sẽ return về props mới cho ứng dụng của chúng ta
  return {
    // Tên props mới thì tự chúng ta đặt ra
    // Thằng này là từ state tạo ra props
    gioHang: state.stateGioHang.gioHang, // và lấy ra thuộc tính giỏ hàng của state
  };
};

// Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    // Tạo ra props là một function xóa giỏ hàng
    xoaGioHang: (maSP) => {
      // Đưa dữ liệu đi thì phải tạo ra action
      let action = {
        type: 'XOA_GIO_HANG',
        // và cái thứ 2 là cái giá trị mà mình muốn gửi đi
        maSP,
      };

      // console log ra thử
      // console.log(maSP)

      // Dùng phương thức dispatch redux cung cấp đưa dữ liệu lên reducer
      dispatch(action);
    },

    // Viết một hàm tăng giảm số lượng
    tangGiamSoLuong: (maSP, tangGiam) => {
      // true thì sẽ xử lý tăng, false thì sẽ xử lý giảm

      // Tạo ra action để đưa lên reducer của Redux
      let action = {
        type: 'TANG_GIAM_SO_LUONG', // Thuộc tính bắt buộc
        maSP, // Object literal nên chỉ cần ghi maSP nó sẽ hiểu là maSP: maSP
        tangGiam,
      };

      // Đưa action lên reducer mỗi lần người dùng click vào
      dispatch(action);
    },
  };
  // Để mà đưa giỏ hàng đi được thì chúng ta phải kết nối với connect
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); // Bên trong dấu ngoặc thứ nhất chúng ta sẽ truyền vào một cái hàm, nó sẽ biến cái hàm đó thành props của component
