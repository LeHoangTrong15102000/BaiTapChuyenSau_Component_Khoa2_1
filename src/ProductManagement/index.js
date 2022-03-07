import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
// import data from './data.json';
import ProductForm from './ProductForm';
import axios from 'axios';

export default class ProductManagement extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProduct: null,
    };
  }

  // Muốn gọi API lấy products ta cần làm gì, thì mình sẽ làm việc đó cho thằng componentDidMount
  componentDidMount = () => {
    // Thằng này là một cái hàm nó sẽ tự động được khởi chạy, khi mà cái Component cha được khởi tạo ra
    axios
      .get('https://6225cc6d6c0e3966205bc790.mockapi.io/api/Products')
      .then((result) => {
        // khi mà thành công thì nó sẽ nhảy vào hàm Then, nhận được kết quả từ API gọi setState để set lại kết quả
        this.setState({
          products: result.data,
        });
      });
  };

  // Nếu làm việc với API thì không nhất thiết phải truyền hết sản phẩm lên, chỉ cần truyền API thôi là được


  handleSelect = (productID) => {
    // this.setState({ selectedProduct: product });

    // gọi API
    axios.get(`https://6225cc6d6c0e3966205bc790.mockapi.io/api/Products/${productID}`).then(result => {
      this.setState({
        selectedProduct: result.data,
      })
    })
  };

  // Với việc thêm sản phẩm vào thì chúng ta không cần phải thêm ID 
  handleSubmit = (product) => {
    // Không làm: this.state.products.push(product)

    // Cách 1:
    // const products = [...this.state.products, product];
    // this.setState({ products });

    // Cách 2:
    this.setState((state) => ({
      // Clone lại cái mảng products rồi thêm sản phẩm product mới vào
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
