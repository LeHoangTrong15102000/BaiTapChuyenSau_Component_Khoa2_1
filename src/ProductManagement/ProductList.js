import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  handleSelect = (product) => {
    const { onSelect } = this.props;
    onSelect(product);
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
