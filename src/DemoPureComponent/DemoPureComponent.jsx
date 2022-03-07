import React, { Component } from 'react';
import Profile from './Profile';

export default class DemoPureComponent extends Component {
  state = {
    like: { soLuong: 0 }, // Là object không phải dữ liệu nguyên thủy
  };

  changeLike = () => {
    let likeUpdate = this.state.like; // cứ mỗi lần click vào là nó sẽ tăng lên 1
    likeUpdate.soLuong += 1;
    this.setState({
      like: { ...likeUpdate },
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Profile Lê Thị A</h3>
        <Profile like={this.state.like} />
        <br />
        <div className="card text-white bg-default">
          <h3 style={{ color: 'pink' }}>
            Đánh giá ({this.state.like.soLuong})
          </h3>
          <div className="card-body">
            <button
              onClick={() => {
                this.changeLike();
              }}
              style={{ color: 'red', border: '3px solid red' }}
              className="btn"
            >
              Thả tim <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
