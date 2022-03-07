import React, { Component } from 'react';
import CartModal from './CartModal';
import ProductList from './ProductList';

export default class ShoppingCart extends Component {
  // Bài ngày hôm này sẽ nói về phần còn lại của props đó là children và nó thường được sử dụng trong những tình huống như thế nào
  // Nó không khác gì props nhưng để mà khi truyền giữa các component phức tạp(nhiều component lòng nhau) có thể truyền qua props của thẻ nhưng mà nó dài dòng
  // Có thể truyền giữa innerHTML của thẻ

  // Thì những cái gì tính toán được thì chúng ta sẽ không lưu vào cơ sở dữ liệu
  // Khi mà làm button giỏ hàng thì nó sẽ có thêm nguồn dữ liệu là state giỏ hàng

  state = {
    // Ban đầu cho mảng giỏ hàng của chúng ta là rỗng luôn, để mỗi lần mình nhấn vào sp thì ta sẽ push sản phẩm đó vào mảng sản phẩm.
    shoppingCart: [
      // {
      //   maSP: 1,
      //   hinhAnh: './img/vsphone.jpg',
      //   tenSP: 'VinSmart Live',
      //   soLuong: 1,
      //   donGia: 5700000,
      //   // thanhTien() {
      //   //   return this.donGia * this.soLuong;
      //   // },
      // },
    ],
  };

  // Viết phương thức setState chính tại cái component chứa giỏ hàng đó luôn
  // Viết phương thức thay đổi giỏ hàng
  addCart = (newProduct) => {
    // console.log(newProduct);

    // Đây là sản phẩm khi được click vào nút thêm vào giỏ hàng
    let spGioHang = {
      maSP: newProduct.maSP,
      tenSP: newProduct.tenSP,
      donGia: newProduct.giaBan,
      soLuong: 1,
      hinhAnh: newProduct.hinhAnh,
    };

    // Duyệt giỏ hàng xem sản phẩm đã có trong giỏ hàng đó hay chưa, dùng findIndex để tìm kiếm sản phẩm đó có id trùng với id sản phẩm trong giỏ hàng hay không

    // id của mã sp === với mã người dùng nhấn nút thêm sản phẩm thì tăng số lượng : ngược lại thì thêm vào giỏ hàng
    let index = this.state.shoppingCart.findIndex(
      (product) => product.maSP === spGioHang.maSP
    );
    // Nếu như khớp id thì
    if (index !== -1) {
      // thì tăng số lương sản phẩm lên
      this.state.shoppingCart[index].soLuong += 1;
    } else {
      this.state.shoppingCart.push(spGioHang);
    }

    // push sản phẩm mới thêm vào giỏ hàng vào state.shoppingCart
    // this.state.shoppingCart.push(spGioHang);

    // Hoặc là viết theo ES6 Spread operator
    let gioHangCapNhat = [...this.state.shoppingCart];

    // Cuối cùng là gán giỏ hàng đó với giỏ hàng đã được thêm sản phẩm
    this.setState({
      shoppingCart: gioHangCapNhat,
    });
  };

  // Xây dựng nút tăng giảm số lượng ở bên trong giỏ hàng của sản phẩm, kể cả xóa sản phẩm khỏi giỏ hàng
  // Xây dựng hàm xử lý cho nút xóa sản phẩm
  // Dùng mã sản phẩm để xóa phần tử trong mảng, phương thức splice xóa 1 phần tử trong mảng
  deleteProduct = (maSP) => {
    // thực hiện tính năng xóa giỏ hàng
    // console.log(maSP)
    // làm cái gì đó với tính năng this.setState...., khi mà click được mã sản phẩm rồi thì ta xẽ thay đổi setState của giỏ hàng
    // Để xóa phần tử trong mảng thì chúng ta cẩn phải tìm ra phần tử đó trong mảng
    let index = this.state.shoppingCart.findIndex(
      (product) => product.maSP === maSP
    );
    if (index !== 1) {
      this.state.shoppingCart.splice(index, 1); // Xóa phần tử thứ index trong giỏ hàng của chúng ta
    }
    // Còn Nếu không tìm thấy thì thôi

    // Sau đó chúng ta sẽ setState lại cho giỏ hàng của chúng ta
    let gioHangCapNhat = [...this.state.shoppingCart];
    this.setState({
      shoppingCart: gioHangCapNhat,
    });
  };

  // Viết hàm tăng số lượng ở giao diện giỏ hàng của chúng ta trên giao diện
  tinhTongSoLuong = () => {
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.shoppingCart.length; i++) {
    //   let spGioHang = this.state.shoppingCart[i];

    //   tongSoLuong += spGioHang.soLuong
    // }
    // return tongSoLuong;

    // Tham số thứ 1 là giá trị trả về cuối cùng, tham số thứ 2 là từng sản phẩm trong giỏ hàng
    return this.state.shoppingCart.reduce((total, item, index) => {
      return (total += item.soLuong);
    }, 0);

    // Chúng ta có thể binding trực tiếp trên giao diện của sản phẩm.
  };

  // Viết hàm tăng giảm số lượng cho nút tăng giảm trong giỏ hàng của khách hàng
  // Tăng thì sẽ truyên số 1 còn giảm thì sẽ truyền số -1
  tangGiamSoLuong = (maSP, number) => {
    // 1 tăng giảm -1
    // Ngoài chuyện truyền vào parra là Number thì chúng ta cũng cần phải có mã sản phẩm
    // Number là số sẽ được truyền để gán giá trị chung cho tangGiamSoLuong luôn thay vì phải viết từng hàm riêng biệt

    let shoppingCart = [...this.state.shoppingCart];

    // Giống như thằng xóa thay vì xóa thì chúng ta sẽ tăng giảm số lượng
    let index = shoppingCart.findIndex((product) => product.maSP === maSP);

    if (index !== -1) {
      // Nếu mà số lượng nhỏ hơn một thì chúng ta không cho click nữa
      // thêm điều kiện number === -1 để biết khi mà nút "-" đang được click và số lượng nhỏ hơn bằng 1
      if (shoppingCart[index].soLuong <= 1 && number === -1) {
        // Thì chúng ta không cho click nữa có nghĩa là gán giá trị cho soLuong là 1
        alert('Số lượng tối thiểu phải là 1!!');
        return; // không trả về cái gì hết
      }

      // Tìm ra product trong giỏ hàng thứ index
      shoppingCart[index].soLuong += Number(number);
    }
    // Ngược lại thì ko làm gì hết

    // Render lại giao diện giỏ hàng
    this.setState({
      shoppingCart: shoppingCart,
    });
  };

  render() {
    // Bước 1: Dàn layout -> Done
    // Bước 2: Load những dữ liệu tĩnh - Done
    // Bước 3: Xác định dữ liệu thay đổi => state của component - video sau sẽ xác định dữ liệu thay đổi
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
            <i class="fa fa-shopping-cart">({this.tinhTongSoLuong()})</i>
          </span>
        </div>
        {/* Truyền dữ liệu tĩnh cho giỏ hàng */}
        {/* Truyền giỏ hàng vào trong component card */}
        <CartModal
          gioHang={this.state.shoppingCart}
          deleteProduct={this.deleteProduct}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <ProductList addCart={this.addCart} />
      </div>
    );
  }
}
