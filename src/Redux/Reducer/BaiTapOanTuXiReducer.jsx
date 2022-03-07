const stateDefault = {
  resultGame: "I'm iron man, i love you 3000!!",

  // mảng oẳn tù xì
  // có thuộc tính đặt cược mặc định là false
  // Nó sẽ lấy ra thằng nào có giá trị là true thì nó sẽ load lên
  mangDatCuoc: [
    { ma: 'keo', hinhAnh: './img_OanTuXi/keo.png', datCuoc: true },
    { ma: 'bua', hinhAnh: './img_OanTuXi/bua.png', datCuoc: false },
    { ma: 'bao', hinhAnh: './img_OanTuXi/bao.png', datCuoc: false },
  ],

  // Số bàn thắng
  soBanThang: 0,

  // Số bàn chơi
  tongSoBanChoi: 0,

  // Đến lưu trữ dữ liệu của thằng máy
  // Do máy không cần đặt cược nên chúng ta ko cần phải để thuộc tính ddatCuoc vào
  computer: { ma: 'bao', hinhAnh: './img_OanTuXi/bao.png' },
};

// Thì thằng nào theo dõi nguồn dữ liệu trên store thì sẽ tự động render lại giao diện.
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {


    case 'DAT_CUOC_GAME': {
      // Xử lý nút click khi chọn vào các item {kéo, búa, bao}
      // Khi nhận được cái action này thì chúng ta phải cập nhật lại mảng đặt cược
      // Nhận vào cái mã khi click thì ta sẽ so sanh nếu nó trùng với cái mã trúng ta click vào thì đổi trạng thái datCuoc

      // Tạo ra mảng cược update 
      // Reset lại mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      // mảng cược update thì chúng ta sẽ gán tất cả những trạng thái của mấy thz này lại bằng false hết
      // hàm map là hàm tọa ra giá trị mới từ mảng giá trị cũ
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {

        if (item.ma === action.maCuoc) {
          return {...item,datCuoc: true};
        }
        // Còn không thì trả về là false
        return {...item,datCuoc: false};// return lại tất cả gia trị trong mảng nhưng thằng datCuoc: thì gán lại là false
      })

      // sau đó nó sẽ dựa vào cái mã để active lên true cho datCuoc của item mà được click vào
      // Tìm ra mã cược để change trạng thái đặt cược ứng với mã được click
      // let index = mangCuocUpdate.findIndex(item => item.ma === action.maCuoc) 

      // if (index !== -1) {
      //   mangCuocUpdate[index].datCuoc = true;
      // } else {
      //   return;
      // }
      // Có thể viết luôn trong vòng lặp
      
      // console.log(mangCuocUpdate)
      // console.log(action)

      // Update lại mangDatCuoc của chúng ta - hay là setState lại
      state.mangDatCuoc = [...mangCuocUpdate]

      // trả về state đó
      return {...state}
    }

    // xử lý chức năng cho nút play game
    case 'PLAY_GAME_OANTUXI' : {
      // tạo ra biến random cho sự kiện này để khi click nó random lại dữ liệu

      // Xử lý số ngâu nhiên từ 0 - 2
      let soNgauNhien = Math.floor(Math.random() * 3);// Muốn từ 0 - 2 thì nhân cho 3
      // Tạo ra biến quanCuocNgauNhien
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];// Lấy ra 1 trong các object trong mảng nhờ vào soNgauNhien

      // Gán lại cho thuộc tính computer để render lại giao diện
      state.computer = quanCuocNgauNhien;

      // Có thể làm đẹp trò choi bằng cách gán animation cho game
      
      
      // Trả về state mới hay nói là update lai state mới khi mà thuộc tính thay đổi
      return {...state};
    }

    case 'END_GAME' : {
      // Thì nó sẽ lấy mảng cược có giá trị là true nó so sánh với giá trị mảng của computer.

      // lấy ra giá trị của thằng player có giá trị datCuoc là true
      let player = state.mangDatCuoc.find(item => item.datCuoc === true);
      // lấy  ra giá trị của thằng computer
      let computer = state.computer;
      
      // Dùng switch để so sanh giữa 2 giá trị là player và computer
      switch (player.ma) {
        // eslint-disable-next-line no-lone-blocks
        case 'keo': {
          if (computer.ma === 'keo') {
            state.resultGame = 'Bạn hòa rồi!!!';
          } else if (computer.ma === 'bua') {
            state.resultGame = 'Haha bạn thua sml rồi !!!';
          } else {
            state.resultGame = "I'm iron man, i love you 3000!!";
            state.soBanThang += 1;
          }
        };break;

        // eslint-disable-next-line no-lone-blocks
        case 'bua' : {
          if (computer.ma === 'keo') {
            state.resultGame = "I'm iron man, i love you 3000!!";
            state.soBanThang += 1;
          } else if (computer.ma === 'bua') {
            state.resultGame = 'Bạn hòa rồi!!!';
          } else {
            state.resultGame = "Haha bạn thua sml rồi !!!";
          }
        };break;

        // eslint-disable-next-line no-lone-blocks
        case 'bao' : {
          if (computer.ma === 'keo') {
            state.resultGame = "Haha bạn thua sml rồi !!!";
          } else if (computer.ma === 'bua') {
            state.resultGame = "I'm iron man, i love you 3000!!";
            state.soBanThang += 1;
          } else {
            state.resultGame = "Bạn hòa rồi!!!";
          }
        };break;

        // Mỗi lần chạy thì tăng số bàn chơi lên 1\
        
        default : state.resultGame = "I'm iron man, i love you 3000!!!";
        return {...state}
      }
      
    }

    state.tongSoBanChoi += 1;
    // Cuối cùng thì return lại state 
    return {...state}
    // Mặc định thì nó sẽ return lại state
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
