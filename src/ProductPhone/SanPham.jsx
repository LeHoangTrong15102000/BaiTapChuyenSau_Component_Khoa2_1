import React, { Component } from "react";

export default class SanPham extends Component {
  // Trong bài này chúng ta sẽ truyền sự kiện thông qua props
  render() {
    let { hinhAnh, tenSP, heDieuHanh , giaBan} = this.props.sanPhamProps;
    // Hông thì có thể ghi như sau
    // let { sanPhamProps } = this.props;; // Mỗi khi binding dữ liệu thì chỉ cần ghi như sau sanPhamProps.hinhAnh , ...


    // Phải đưa dữ liệu state nằm ở chỗ nào vừa chứa nút xử lý vừa chứa phương thức setState
    // Thì bằng cách nào đó chúng ta phải đưa nút setState vào cái hàm chứa cái nút "Xem chi tiết" đó => thì chúng ta sẽ truyền props vào
    // Tuy nhiên props lúc này là một function - cái function truyền vào thì nó cũng y như là cái biến thôi, thì cái biến được gửi thông qua propsName
    // đó là cách truyền function dưới dạng props, Tại sao chúng ta phải gọi nó  trong props , tại vì trong cái hàm click bên đây chúng ta ko thể gọi phương thức setState bên kia được
    //  Truyền function khi mà chúng ta đã đóng gói các component lại rồi thì bắt buộc chúng ta phải truyền function dưới dạng props


    // ***** Vậy là chúng ta đã xong bài học truyền sự kiện - nhận dữ liệu các cấp component
    
    return (
      <div className="card text-left text-center">
        <img style={{ height: 350 }} src={hinhAnh} alt={hinhAnh} />
        <div className="card-body bg-info">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">Hệ điều hành: {heDieuHanh}</p>
          <p className="card-text">Giá bán: {giaBan.toLocaleString()}</p>
          <button
            onClick={() => {
              this.props.xemChiTiet(this.props.sanPhamProps)
            }}
            className="btn btn-success text-white"
          >
            Xem chi tiết
            <i className="fa fa-info-circle ml-2"></i>
          </button>
        </div>
      </div>
    );
  }
}
