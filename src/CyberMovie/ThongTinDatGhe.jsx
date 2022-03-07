import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HUY_GHE } from '../Redux/types/BaiTapDatGheType';
import { huyGheAction } from '../Redux/actions/BaiTapDatVeAction';
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        {/* button hiện các ghế trong Movie */}
        <div className="mt-3">
          <button className="gheDuocChon"></button>
          <span className="text-light ml-3" style={{ fontSize: '25px' }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon mt-1"></button>
          <span className="text-light ml-3" style={{ fontSize: '25px' }}>
            Ghế đang chọn
          </span>
          <br />
          <button className="ghe mt-1" style={{ marginLeft: 0 }}></button>
          <span className="text-light ml-3" style={{ fontSize: '25px' }}>
            Ghế chưa đặt
          </span>
        </div>

        {/* Table hiển thị thông tin được chọn */}
        <div className="mt-3">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: '20px' }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            {/* tbody chúng ta sẽ binding vào, lấy dữ liệu từ store trả về */}
            <tbody className="text-warning">
              {/* Lặp qua để binding ra dữ liệu */}
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr className="" key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          // Khi mà connect với Redux thì mặc định mỗi thz component nó sẽ có một pthuc la dispatch
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                        className="btn btn-danger"
                      >
                        HỦY
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* In ra giá tiền */}
            <tfoot className="text-info">
              <tr>
                <td></td>
                <td>Thành tiền: </td>
                <td>
                  {/* viết hàm render ra tổng tiền */}
                  {this.props.danhSachGheDangDat
                    .reduce((total, gheDangDat, index) => {
                      return (total += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

// Cách thứ 2 là có thể viết mapDispatchToProps

export default connect(mapStateToProps)(ThongTinDatGhe);
