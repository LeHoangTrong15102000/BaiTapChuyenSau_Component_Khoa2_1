import React, { Component } from 'react';
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
  // Ta có 2 component là DanhSachSanPham , SanPham,
  /**
   * DanhSachSanPham chứa 2 thuộc tính:
   *     - mangSanPham
   *     - state.sanPhamChiTiet
   *
   */

  // Xây dựng giao diện trên component DanhSachSanPham
  // Thông tin sản phẩm sẽ viết trên file component là SanPham

  // Gán dataPhone cho mangSanPham
  mangSanPham = [
    {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './img/vsphone.jpg',
    },
    {
      maSP: 2,
      tenSP: 'Meizu 16Xs',
      manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
      heDieuHanh: 'Android 9.0 (Pie); Flyme',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 7600000,
      hinhAnh: './img/meizuphone.jpg',
    },
    {
      maSP: 3,
      tenSP: 'Iphone XS Max',
      manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
      heDieuHanh: 'iOS 12',
      cameraSau: 'Chính 12 MP & Phụ 12 MP',
      cameraTruoc: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 27000000,
      hinhAnh: './img/applephone.jpg',
    },
  ];

  // State chứa thông số sản phẩm chi mặc định, ban đầu sẽ hiện ra sản phẩm này
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './img/vsphone.jpg',
    },
  };

  // Hàm render sản phẩm
  renderSanPham = () => { 
    return this.mangSanPham.map((item, index) => {
      return (
        <div
          key={index}
          className="col-4 mt-3 text-center w3-container w3-center w3-animate-zoom"
          style={{ width: '350px' }}
        > 
          {/* Nếu gọi cái hàm ở đây thì chưa làm là nó đã chạy rồi xemChiTiet={this.xemChiTiet()} => Nếu như vậy thì chưa gọi là nó đã chạy */}
          <SanPham xemChiTiet={this.xemChiTiet} sanPhamProps={item}/>
        </div>
      );
    });
  };

  // Xây dựng nút sự kiện click vào xem chi tiết cho sản phẩm
  // Mỗi lần click vào thay đổi state thông tin sản phẩm
  xemChiTiet = (selectSanPham) => {
    this.setState({
      sanPhamChiTiet: selectSanPham,
    });
  };
  // Video sau sẽ tách cái renderSanPham ra thành một component riêng thì sẽ có nhiều điều để nói.
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">DANH SÁCH SẢN PHẨM</h3>

        {/* row đầu tiên sẽ viết hàm render ra sản phẩm */}
        <div className="row">{this.renderSanPham()}</div>

        <div className="row">
          {/* Hiện chi tiết sản phẩm ở đâys */}

          <div className="col-4">
            <h3 style={{ fontWeight: '600' }} className="text-center text-dark">
              {this.state.sanPhamChiTiet.tenSP}
            </h3>
            <img
              // Cho nó bằng với column chứa nó
              style={{ width: '100%' }}
              src={this.state.sanPhamChiTiet.hinhAnh}
              alt={this.state.sanPhamChiTiet.hinhAnh}
            />
          </div>
          <div className="col-8">
            <h3 style={{ fontWeight: 'bold' }} className="">
              Thông số kỹ thuật
            </h3>

            <table class="table">
              {/* Muốn format lại code thì nhấn ctrl+F -> tìm cần thay thế và cái
              muốn thay thế */}
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{this.state.sanPhamChiTiet.manHinh}</th>
                </tr>

                <tr>
                  <th>Hệ điều hành</th>
                  <th>{this.state.sanPhamChiTiet.heDieuHanh}</th>
                </tr>

                <tr>
                  <th>Camera trước</th>
                  <th>{this.state.sanPhamChiTiet.cameraTruoc}</th>
                </tr>

                <tr>
                  <th>Camera sau</th>
                  <th>{this.state.sanPhamChiTiet.cameraSau}</th>
                </tr>

                <tr>
                  <th>RAM</th>
                  <th>{this.state.sanPhamChiTiet.ram}</th>
                </tr>

                <tr>
                  <th>ROM</th>
                  <th>{this.state.sanPhamChiTiet.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
