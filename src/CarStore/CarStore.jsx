import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class CarStore extends Component {
  // Thuộc tính product của components
  products = [
    { id: 1, name: "black car", img: "./products/black-car.jpg", price: 1000 },
    { id: 1, name: "red car", img: "./products/red-car.jpg", price: 2000 },
    {
      id: 1,
      name: "silver car",
      img: "./products/silver-car.jpg",
      price: 3000,
    },
    { id: 1, name: "steel car", img: "./products/steel-car.jpg", price: 4000 },
  ];

  state = {
    productDetail: {
      id: 1,
      name: "black car",
      img: "./products/black-car.jpg",
      price: 1000,
    },
  };

  setStateModal = (newProduct) => {
    this.setState({
      productDetail: newProduct,
    });
  };
  // Nên đặt cái model ở ngay component cha để khi mà làm giao diện lớn thì không bị ảnh hưởng đến tốc độ trình duyệt
  // Modal đặt tại đây thì nguồn dữ liệu cũng phải đặt tại đây
  // 2 điều kiện để xây dựng setState cho giao diện thứ 1 : là giao diện nó phải nằm tại đó và chứa cái state tại đó, thứ 2: là cái giao diện phải có nút xử lý để gọi được phương thức đó

  // Ở component ProductList thì chúng ta sẽ truyền cái props là productData
  // Video sau sẽ tìm hiểu làm sao để chúng ta xác định được cái state của modal này nằm ở component nào và sẽ xử lý khi nút "Xem chi tiết được click"

  // Bài kế tiếp sẽ xây dựng giỏ hàng cho cái bài tập giầy
  render() {
    return (
      <div>
        <h3 className="display-4 text-center">DANH SÁCH SẢN PHẨM</h3>
        {/* Modal phải để trong đây thì nó mới tối ưu được code và clean code hơn */}
        <Modal content={this.state.productDetail} />
        <ProductList
          setStateModal={this.setStateModal}
          productsData={this.products}
        />
      </div>
    );
  }
}
