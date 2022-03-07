import React, { Component } from 'react';
// Sử dụng thư viện kết nối với Redux
import { connect } from 'react-redux';

class ProductItemRedux extends Component {
  render() {
    let { sanPhamProps } = this.props;
    return (
      <div className="card text-left">
        <img
          style={{ height: '350px' }}
          className="card-img-top"
          src={sanPhamProps.hinhAnh}
          alt={sanPhamProps.hinhAnh}
        />
        <div className="card-body bg-info">
          <h5 className="card-title">{sanPhamProps.tenSP}</h5>
          <p className="card-text">Hệ điều hành: {sanPhamProps.heDieuHanh}</p>
          <p className="card-text">
            Giá bán: {sanPhamProps.giaBan.toLocaleString()}
          </p>

          <button onClick={() => {}} className="btn btn-success text-white">
            Xem chi tiết
            <i className="fa fa-info-circle ml-2"></i>
          </button>

          <button
            onClick={() => {
              this.props.themGioHang(sanPhamProps);
            }}
            className="btn btn-secondary ml-2"
          >
            Thêm giỏ hàng
            <i class="fa fa-shopping-cart ml-2"></i>
          </button>
        </div>
      </div>
    );
  }
}

// Dùng phương thức là mapDispatchToProps => hàm gửi dữ liệu lên Store
// Nơi nào mà đưa hoặc gửi dữ liệu đi thì chúng ta mới kết nối với hàm connect
// Đưa lên sẽ sử dụng param là dispatch, dispatch là một callback props để đưa dữ liệu đi.
// Thz Dispatch tạo ra props là một hàm để đưa giá trị lên Redux render ra lại giao diện
const mapDispatchToProps = (dispatch) => {
  return {
    // Do trong component chúng ta có nút thêm giỏ hàng nên trong Dispatch này chúng ta phải xây dựng cái phương thức là thêm giở hàng để đưa lên
    // themGioHang là một props do Redux tao ra
    // Còn thằng bên đây là dispatch tạo ra hàm
    themGioHang: (sanPham) => {
      let spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };

      // console.log(spGioHang)

      // Tạo ra action
      let action = {
        type: 'THEM_GIO_HANG', // là thuộc tính bắt buộc của action
        spGioHang, // Dữ liệu gửi đi sẽ là spGioHang
      };

      // chúng ta sẽ dùng dispatch của redux => gửi dữ liệu lên reducer
      dispatch(action); // Sau này sẽ học viết cách tối ưu hơn, viết cách này để hiểu vấn đề trước
      // đưa cái action này lên giỏ hàng reducer và sẽ xử lý trên đó

      // khi mà click vào button (dispatch được gọi thì nó sẽ đưa cái giá trị, thì cái giá trị gửi đi đó chính là action) thì nó sẽ gửi cá action lên reducer
    },
  };
};

// Nếu không có lấy cái gì về thì để tham số thứ 1 là null, tham số thứ 2 mới là cái tham gọi đến phương thức mapDispatchToProps
export default connect(null, mapDispatchToProps)(ProductItemRedux);
