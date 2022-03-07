import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    // let {name , id , img , price } = this.props.item;
    let { item } = this.props;

    // Chúng ta muốn nút xem chi tiết tại productItemo nó mở ra modal thì chúng ta phải
    // vì là SPA cho nên tất cả HTML của các component đều được render qua lại bằng bootstrap lẫn nhau

    // Viết sự kiện cho nút button khi mà nó render ra thông tin chi tiết của sản phẩm

    // Dùng b4-card bootstrap để render ra giao diện
    return (
      <div className="card text-left">
        <img className="card-img-top" src={item.img} alt={item.img} />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}</p>
          {/* Là cái nút button này có chức năng y hệt như thằng modal */}
          <button
            onClick={() => {
              this.props.setStateModal(item);
            }}
            data-toggle="modal"
            data-target="#modelId"
            className="btn btn-success"
          >
            Xem chi tiết
            <i
              style={{ marginLeft: '5px' }}
              className="fa fa-shopping-cart"
            ></i>
          </button>
        </div>
      </div>
    );
  }
}
