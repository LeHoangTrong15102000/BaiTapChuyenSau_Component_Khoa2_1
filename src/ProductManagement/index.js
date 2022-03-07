import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import data from "./data.json";
import ProductForm from "./ProductForm";

export default class ProductManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data,
      selectedProduct: null,
    };
  }

  handleSelect = (product) => {
    this.setState({ selectedProduct: product });
  };

  handleSubmit = (product) => {
    // Không làm: this.state.products.push(product)

    // Cách 1:
    // const products = [...this.state.products, product];
    // this.setState({ products });

    // Cách 2:
    this.setState((state) => ({
      products: [...state.products, product],
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Product Management</h1>
        <ProductForm onSubmit={this.handleSubmit} />

        <ProductList
          products={this.state.products}
          onSelect={this.handleSelect}
        />

        <ProductDetails product={this.state.selectedProduct} />
      </div>
    );
  }
}
