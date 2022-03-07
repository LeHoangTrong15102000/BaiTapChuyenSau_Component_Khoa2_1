import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {


    //  Thay thế cái tên bằng productItem
    renderProductItem = () => {
        return this.props.productsData.map((product, index) => {
            return <div className="col-3" key={index}>
                <ProductItem setStateModal={this.props.setStateModal} item={product} />
            </div>
        })
    }
  render() {

    // Viết hàm render ra product
    return (
      <div className="container">
        <div className='row'>
            {this.renderProductItem()}
        </div>
      </div>
    )
  }
}
