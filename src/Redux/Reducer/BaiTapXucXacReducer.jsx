const stateDefault = {
  taiXiu: false, //Tài là true (> 11 ), false là xỉu ( 3 - 11)

  // Mỗi lần nhấn play game thì con xúc xắc này thay đổi, xúc xắc gồm hình ảnh và giá trị nhiều hơn 2 giá trị nên dùng object để lưu nó
  // Lưu lần 3 object

  // mảng xúc xắc
  mangXucXac: [
    { ma: 1, hinhAnh: './img_XucXac/1.png' },
    { ma: 1, hinhAnh: './img_XucXac/1.png' },
    { ma: 1, hinhAnh: './img_XucXac/1.png' },
  ],

  // Tổng số bàn thắng
  soBanThang: 0,

  // Số lần chơi
  tongSoLanChoi: 0,
};

// Viết cái reducer để xử lý

const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // Case là DAT_CUOC thì thực hiện cái gì đó vào sau đó truyền xuống lại component phụ thuộc làm thay đổi dữ liệu của giao diện
    case 'DAT_CUOC': {
      // setState lại thuộc tính taiXiu của chúng ta
      // Nó là những dữ liệu cơ sở nên không cần phải clone ra
      state.taiXiu = action.taiXiu;

      // Sau đó return lại state
      return { ...state };

      // Và thằng thông tin trò chơi sẽ nhận thông tin truyền qua từ Redux và render lại giao diện.
    }

    // xử lý type PLAY_GAME
    case 'PLAY_GAME': {
      // Bước 1 xử lý random xúc xắc
      /****
       * Muốn cái mảng xúc xắc render lại thì phải gán cho cái mảng xúc xắc cái mảng mới
       * Các con xúc xắc mới sẽ được tạo ra từ hàm ngẫu nhiên.
       */

      let mangXucXacNgauNhien = [];

      for (let i = 0; i < 3; i++) {
        // Mỗi lần lặp như vậy sẽ tạo ra giá trị ngẫu nhiên cho con xúc xắc này (giá trị từ 1 - 6).
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;

        // Tạo ra đối tượng xúc xắc từ số ngâu nhiên -> là một cái object chứa đối tượng xúc xắc ngẫu nhiên
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img_XucXac/${soNgauNhien}.png`,
        };

        // push vào mảng XucXacNgauNhien
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }

      // Gán mangXucXac lại
      state.mangXucXac = [...mangXucXacNgauNhien];

      // Tăng số bàn chơi -> mỗi lần nhấn play game
      state.tongSoLanChoi += 1;

      // Rồi kiểm tra soBanThang khi mà mỗi lần chúng ta đoán trúng, dùng hàm reduce để tính tổng 3 con xúc xắc
      let tongSoDiem = state.mangXucXac.reduce((totalPoint, xucXac, index) => {
        return (totalPoint += xucXac.ma); // Tính ra tổng điểm của Xúc Xắc;
      }, 0);

      // Thực hiện kiểm tra nếu người dùng chon Tài và kiểm tra lớn hơn > 11 thì tăng số bàn thằng lên 1
      if (
        (tongSoDiem > 11 && state.taiXiu) ||
        (tongSoDiem <= 11 && !state.taiXiu)
      ) {
        // Thì thực hiện tăng số bàn thắng lên
        state.soBanThang += 1;
      }
      // return về lại cái state mới;
      return { ...state };
    }

    // Mặc định thì nó sẽ return lại state
    default:
      return { ...state };
  }
};

export default BaiTapXucXacReducer;
// Sau khi đã khai báo reducer thì chúng ta import nó vào cái store của Redux;
