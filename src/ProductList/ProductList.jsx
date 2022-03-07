import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  // Kiểm tra file json

  // Từ cái mảng trên thì sẽ xây dựng cái ứng dụng bán giầy
  //   bài này sẽ render dữ liệu thông qua props

  renderProductItem = () => {
    // để render ra được component thì chúng ta sẽ sử dụng đối tượng là props luôn
    return this.props.arrProduct.map((item, index) => {

      // Trong vòng lặp cứ mỗi lần duyệt phần tử thì nó sẽ tạo ra 1 components
      return (
        // Nếu mà chia col-4 ở dưới giao diện thì các đôi giày nó sẽ không có khoảng trống và nó full luôn phần div của thẻ, thì thằng bên trong nó sễ không chiếm hết thằng bên ngoài
        // do bootstrap có những cái div column nó có margin lẫn nhau

        // ProductItem phải yêu cầu tổ chức riêng luôn để sau này nó còn sử dụng riêng cho trang tìm kiếm hay trang nào đó


        // Truyền object trong vòng lặp luôn
        // Product sẽ truyền props qua thằng con của nó
        <div
          className="col-4 mt-3 w3-container w3-center w3-animate-zoom"
          key={index}
        >
          <ProductItem dataProductItem={item} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
