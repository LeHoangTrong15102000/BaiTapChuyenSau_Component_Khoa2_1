import React, { Component } from 'react';
import './BaiTapOanTuXi.css';
import Computer from './Computer';
import Player from './Player';
import ThongTinTroChoi from './ThongTinTroChoi';
import { connect } from 'react-redux';

class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            {/* Để player hình ảnh -> sẽ tách nó ra thành một component  */}
            <Player />
          </div>

          <div className="col-4">
            <ThongTinTroChoi />
            <button
              onClick={() => {
                this.props.playGameOanTuXi();
              }}
              className="btn btn-success p-2 mt-5 display-4"
            >
              Play game
            </button>
          </div>

          <div className="col-4">
            {/* Cũng sẽ tách nó ra thành một component */}
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGameOanTuXi: () => {
      let count = 0; // Khai báo một cái biến để nó dừng lại

      // Khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: 'PLAY_GAME_OANTUXI',
        });
        // Mỗi 100ms thì nó sẽ thực hiện 1 lần

        count++; // Mỗi lần lặp sẽ cho count tăng lên 1 , Nếu lớn hơn 10 thì dừng chương trình lại

        if (count > 10) {
          // Dùng hàm clear Interval để dừng lại
          clearInterval(randomComputerItem);

          // Sau khi đã setInterval rồi sẽ thực hiện một action cuối cùng đó là hàm xử lý so sanh 2 giá trị
          dispatch({
            type: 'END_GAME',
          });
        }

        // Chạy 10 lần và thời gian chạy là 100ms là 0,1s
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
