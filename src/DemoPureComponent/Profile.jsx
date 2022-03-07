import React, { Component, PureComponent } from 'react';

export default class Profile extends PureComponent {
  render() {
    console.log('load');
    return (
      <div style={{ width: 250 }} className="card text-white bg-dark">
        <img
          style={{ width: 250, height: 300 }}
          className="card-img-top"
          src="https://gamek.mediacdn.vn/133514250583805952/2020/7/7/photo-1-1594098002042331340775.jpg"
          alt="123"
        />
        <div className="card-body">
          <h3>
            Số lượng tim: <i className="fa fa-heart"></i>
            {this.props.like.soLuong}
          </h3>
          <h4 className="card-title">Lê Thị A</h4>
          <p className="card-text">18 tuổi</p>
        </div>
      </div>
    );
  }
}
