import React, { Component } from 'react';
import { connect } from 'react-redux';
import { datGheAction } from '../Redux/actions/BaiTapDatVeAction';

class HangGhe extends Component {
  // Render ra ghế ở chỗ màn hình
  // true thì trả về ghế đã được chọn còn false thì là ghế bình thường đang chọn hoặc là trống
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      // tạo một biến disabled là false
      let disabled = false;
      // trạng thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }
      //  Xét trạng thái ghế đang đặt, chỉ ghế mang giá trị là false hoặc rỗng thì xét cho nó có màu xanh
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        // Nếu đã tồn tại cái ghế đó ở bên trong mảng rồi thì thêm thuộc tính css cho nó
        // Cái ghế đang render ra mà có trong mảng thì thực hiện
        // eslint-disable-next-line no-unused-vars
        cssGheDangDat = 'gheDangChon';
      } else {
        // còn chưa thì push nó vào mảng
      }

      // Và sau đó return lại nút button
      // Nếu mà có ghế mà người ta đặt rồi thì mình phải disabled nó đi
      // Mặc định nó sẽ là ghe khi nào daDat = true thì nó sẽ chọn class là cssGheDaDat
      // Để test xem nó có click được hông sử dụng onClick vào để test
      return (
        <button
          onClick={() => {
            this.props.gheDangDat(ghe);
          }}
          disabled={disabled}
          // Ban đầu nó sẽ lấy css của ghế bình thường, nếu không có thì lấy css của gheDaDat hoặc gheDangDat
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  // Viết hàm render số hàng
  renderSoHang = () => {
    // không return về button thay vào đó sẽ return về thẻ span
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      // Trong đây thì mới return lại thẻ span
      return (
        <button key={index} className="rowNumber">
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    // Nếu là hàng đầu tiền trong các object hàng ghế thì
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      // Ngược lại thì mình sẽ in ra thẻ button ở các hàng từ 1 trở đi
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-5 mt-3" style={{ fontSize: 20 }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // lấy giá trị và biến nó thành props
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

// Dùng hàm mapDispatchToProps để mỗi lần click vào thì nó sẽ làm thay đổi của danhSachGheDangDat
const mapDispatchToProps = (dispatch) => {
  return {
    // nó sẽ nhận vào cái ghế mà người dùng click vào
    gheDangDat: (ghe) => {
      // thay vì phải ghi cái object thẳng như này chúng ta sẽ gọi cái hàm
      dispatch(datGheAction(ghe));
    },
  };
};

// Ở những cái view khác thì tái sử dụng lại cái action này, khi mà tái sử dụng thì phải chỉnh sửa lại nhứng cái test
// Action creator chính là cái cách mà nó tổ chức file lại thôi

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
