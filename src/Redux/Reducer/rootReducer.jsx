import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapXucXacReducer from './BaiTapXucXacReducer';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';

const rootReducer = combineReducers({
  // Đây là store tổng của ứng dụng của chúng ta
  // Thì cái Store tổng ứng dụng cũng sẽ chứa nhiều cái state
  stateGioHang: BaiTapGioHangReducer, // state giỏ hàng, chỗ này dùng ES6 chép lại nội dung state của Reducer mà không đổi tên\

  BaiTapXucXacReducer, // Viết theo kiểu ES6 luôn, State của bài Tập Game, kết nối với phương thức này của stores.

  BaiTapOanTuXiReducer, // State bài tập oản tù xì

  BaiTapDatVeReducer, // State bài tập đặt vé xem phim
});

export default rootReducer;
