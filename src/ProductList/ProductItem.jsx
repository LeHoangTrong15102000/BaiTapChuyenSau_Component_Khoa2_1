import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    // Nếu khách hàng có thêm bớt button hay gì đó thì chỉ cần vào đây mà sửa thôi
    // Làm front end quan trọng là giao diện

    let { image, name, price, description } = this.props.dataProductItem;
    return (
      <div className="card text-left" style={{ width: '350px' }}>
        <img src={image} alt={image} />
        <div className="card-body bg-primary">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Giá tiền: {price}</p>
          <button className="w3-button w3-black text-white">
            Add to cart
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    );
  }
}

{
  /* Nếu mà để như vậy thì cái đôi giầy cũng không chiếm hết được cái card, nên chúng ta sẽ canh cái style ngay chỗ cái card */
}
