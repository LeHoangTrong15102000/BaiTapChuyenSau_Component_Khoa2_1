import React, { Component } from 'react';
import { ModelContext } from './_Context/ModelContext';

export default class ModelProfile extends Component {
  // để Muốn truy xuất dữ liệu trong Context thì sử dụng Consumer
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className="container mt-5">
              <h3>Profile</h3>
              <div style={{ width: 250 }} className="card text-white bg-dark">
                <img
                  style={{ width: 250, height: 300 }}
                  className="card-img-top"
                  src="https://gamek.mediacdn.vn/133514250583805952/2020/7/7/photo-1-1594098002042331340775.jpg"
                  alt="123"
                />
                <div className="card-body">
                  <h4 style={{ color: 'pink' }}>
                    {' '}
                    Số lượng tim:
                    {value.stateLike} <i className="fa fa-heart"></i>
                  </h4>
                  <h4 className="card-title">Tên: Lê Thị A</h4>
                  <p className="card-text">Tuổi: 18</p>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
