import React, { Component } from 'react';
import './BaiTapLacXiNgau.css';
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';
import { connect } from 'react-redux'

class BaiTapLacXiNgau extends Component {
  // Ôn tập redux lại một lần nữa
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Bài Tập Game Xí Ngầu
        </div>

        {/* chúng ta thấy 3 phần này nó render đi , render lại thì chúng ta có thể
        tách nó ra thành một component riêng 
        
          -  2 cái xí ngầu lớn sẽ là 2 nút button để chúng ta nhấn vào
          - Cho text-center tại row thì tất cả các thằng tại row nó sẽ nhảy vào giữa hết.
          -
        */}
        <div className="row mt-5">
          <div className="col-5 text-right">
            <button onClick={() => {this.props.datCuoc(true)}} className="btnGame">TÀI</button>
          </div>
          <div className="col-2 text-center ">
            <XucXac />
          </div>
          <div className="col-5 text-left">
            <button onClick={() => {this.props.datCuoc(false)}} className="btnGame">XỈU</button>
          </div>
        </div>

        <div className="thongTinTroChoi text-center mt-2">
          <ThongTinTroChoi />

          <button onClick={() => {this.props.playGame()}} className="btn btn-success p-3 display-4 mt-5">
            Play game
          </button>
        </div>
      </div>
    );
  }
}

// Viết hàm gửi dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    // Viết một phương thức gửi lên store của Redux 
    // mapDispatchToProps sẽ sinh ra cái props là một phương thức
    datCuoc: (taiXiu) => {
      
      // Click vào sẽ tạo một cái actions
      // Gửi dữ liệu type: 'PLAY_GAME' lên Reducer.
      dispatch({
        // tao action taiXiu true là TÀI , false là XỈU
        type: 'DAT_CUOC',
        taiXiu,
      });
    },

    // Xây dựng phương thức là play game
    playGame: () => {
      

      // Nếu mà ta biết trước dữ liệu đầu vào thì cái hàm này là hàm sắp xếp rồi 
      // Sẽ truyền thẳng vào dispatch luôn
      dispatch({
        type: 'PLAY_GAME',
      });
    }


    
  }
}

// Giá trị ban đầu thường là state - mapStateToProps. Nếu không có giá trị ban đầu thì để là null
// Nó sẽ dispatch lên tất cả các reducer của rootReducer luôn - nên cái tên đặt của nó phải là khác nhau
export default connect(null, mapDispatchToProps)(BaiTapLacXiNgau);