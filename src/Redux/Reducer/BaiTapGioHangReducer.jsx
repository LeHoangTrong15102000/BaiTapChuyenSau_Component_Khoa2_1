// Đây là cách mà trúng ta setup một state

// import BaiTapGioHangRedux from "../BaiTapGioHangRedux/BaiTapGioHangRedux"

const stateGioHang = {
  // bân đầu mảng giỏ hàng sẽ là rỗng
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: 'VinSmart Live',
    //   manHinh: 'AMOLED, 6.2, Full HD+',
    //   heDieuHanh: 'Android 9.0 (Pie)',
    //   cameraTruoc: '20 MP',
    //   cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    //   ram: '4 GB',
    //   rom: '64 GB',
    //   giaBan: 5700000,
    //   soLuong: 1,
    //   hinhAnh: './img/vsphone.jpg',
    // },
  ],
};

// Hướng dẫn xây dựng cái reducer thì cú pháp của nó sẽ như thế nào

// Gắn cho nó một cái hàm nhận tham số là state mặc định, nếu mà chúng ta không truyền thì lần đầu tiên nó sẽ lấy biến "stateGioHang" làm giá trị mặc định
// Action là gì thì video sau sẽ giải thích rõ ràng hơn.
const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // xử lý code trong đây
      // Kiểm tra trong giỏ hàng có sản phẩm đó chưa, nếu chưa có thì push nó vào
      let index = state.gioHang.findIndex(
        (product) => product.maSP === action.spGioHang.maSP
      );

      if (index !== -1) {
        // Nếu index tồn tại thì thực hiện tăng sản phẩm hàng đó
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.spGioHang);
      }

      // Sau đó setState lại giao diện
      // Thì trong thằng redux state mới  thì nó mới trả ra giao diện, state cũ thì nó không trả ra giao diện => nên do đó chúng ta dùng spread để sao chép thành một cái state mới
      // Cập nhật lại state.gioHang
      state.gioHang = [...state.gioHang];

      // Trả về state mới
      return { ...state };
    }

    // Thực hiện chức năng là xóa giỏ hàng
    // Khi xóa thì nó cũng cập nhật lại số lượng sản phẩm đang có trên shopping cart
    case "XOA_GIO_HANG": {
      // Do redux luôn có tính bất biến nên mình sẽ tạo ra một biến tạm
      let gioHangCapNhat = [...state.gioHang]; //  Chúng ta sẽ xử lý trên state cập nhật và cập nhật lại gioHang

      // Tìm ra phần tử cần xóa
      let index = gioHangCapNhat.findIndex(
        (product) => product.maSP === action.maSP
      );

      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }

      // cập nhật lại giỏ hàng
      state.gioHang = gioHangCapNhat;
      // trả về một state mới
      return { ...state };
    }

    case "TANG_GIAM_SO_LUONG": {
      // Vì Redux có tính bất biến
      let gioHangCapNhat = [...state.gioHang];

      // Xử lý tăng giảm trên giỏ hàng cập nhật
      let index = gioHangCapNhat.findIndex(
        (product) => product.maSP === action.maSP
      );
 
      if (index !== -1) {
        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          } else {
            alert("Sản phẩm phải tối thiểu bằng 1!")
          }
          
        }
      } 

      // cập nhật lại giỏ hàng
      state.gioHang = gioHangCapNhat;
      // trả về một state mới
      return { ...state };
    }

    default:
      return { ...state }; // Và return lại state
  }
};

// Và cái state này muốn liên kết với store của Redux thì chúng ta phải export nó ra
export default BaiTapGioHangReducer;
