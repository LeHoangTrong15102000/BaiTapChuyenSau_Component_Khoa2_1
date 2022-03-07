import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {

  // thì chỉ cần truyền vào "mã" của sản phẩm đó là ta có thể xem được chi tiết sản phẩm đó rồi 
  handleSelect = (productID) => {
    const { onSelect } = this.props;
    onSelect(productID  );
  };

  render() {
    const { products } = this.props;
    return (
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-4">
            <ProductItem product={product} onSelect={this.handleSelect} />
          </div>
        ))}
      </div>
    );
  }
}
