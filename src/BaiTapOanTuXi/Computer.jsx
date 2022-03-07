import React, { Component } from 'react';
import { connect } from 'react-redux';

class Computer extends Component {
  // Component giành cho máy
  render() {
    // Định nghĩa một keyframe
    // Để vào Date.now() để nó không bị lặp đi lặp lại cái hàm của chúng ta
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}

      25% {top: 100px;}

      50% {top: -50px;}

      75% {top: 100px;}
      
      100% {top: 0px;}
    }`;

    // thằng cho phải cho postion là relative thì thằng con là absolute nó mới chuyển động được
    return (
      <div className="text-center playerComputer">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: 'relative' }}>
          <img
            className="mt-5"
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              transform: 'rotate(150deg)',
              animation: `randomItem${Date.now()} 0.1s`,
              left: '30%',
            }}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        {/* Cho hình ảnh của máy vào đây */}
        <img
          style={{ width: '150px', height: '150px' }}
          src="./img_OanTuXi/playerComputer.png"
          alt="PlayerComputer"
        />
      </div>
    );
  }
}

// Hàm Nhận dữ liệu từ store của Redux
const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
