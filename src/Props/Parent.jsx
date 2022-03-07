import React, { Component } from 'react';
import Child from './Child';
import ChildFunctional from './ChildFunctional';
// import Parent from './Parent'

export default class Parent extends Component {
  src =
    'https://images.foody.vn/res/g73/720857/prof/s640x400/foody-mobile-hfghfgh-jpg.jpg';

  name = 'Hủ Tiếu Sa Đéc';

  product = {
    id: 1,
    name: 'Hủ Tiếu Sa Đéc',
    price: '20$',
    desc: 'Hủ Tiếu Sa Đéc là số một',
    img: 'https://images.foody.vn/res/g73/720857/prof/s640x400/foody-mobile-hfghfgh-jpg.jpg',
    size: [36, 37, 38, 39],
  };

  size = [36, 37, 38, 39];

  // Còn muốn truyền funciton thì sao
  showInfo = (name) => {
    alert(name);
  };

  // Tóm lại thì props có thể  giúp chúng ta truyền chuỗi , mảng , object và function
  // props là thuộc tính từ component con nhận giá trị từ component cha truyền qua thông qua các propsName.


  state = {
    title: "Cyberlearn Xin chào các bạn"
  }


  changeTitle = () => {
    this.setState({
      title: "Lê Hoàng Trọng"
    })
  }

  render() {
    // có thể truyền vào là một cái object gom lại các thuộc tính như source ảnh, giá , tên sản phẩm , mô tả
    let propChild = {
      id: 1,
      name: 'Hủ Tiếu Sa Đéc',
      price: '20$',
      desc: 'Hủ Tiếu Sa Đéc là số một',
      img: 'https://images.foody.vn/res/g73/720857/prof/s640x400/foody-mobile-hfghfgh-jpg.jpg',
    };
    // Thay vì truyền nhiều thuộc tính  thì chúng ta sẽ truyền ít lại dưới dạng thuộc tính là object

    return (
      <div>
        {/* <input type="text"/>
        <Child  propSource={this.src} propName={this.name} />
        <Child  propSource={this.src} propName={'Hủ Tiếu Sa Đéc 1'} />
        <Child  propSource={this.src} propName={'Hủ Tiếu Sa Đéc 2'} /> */}

        {/* <ChildFunctional propSource={this.src} propName={this.name}/> */}

        <div className="container">
          <h3>Product Detail</h3>
          <Child
            // Truyền giá trị là hàm vào để binding ra thì không cần 2 dấu ngoặc "()" vì khi () thì nó đã chạy hàm đó
            showAlert={this.showInfo}
            propObject={this.product}
            showSize={this.size}
          />
        </div>

        <div className="container">
          <h3>Product Sa Đéc</h3>
          <ChildFunctional productItem={this.product} />

          {/* Truyền đưới dạng thẻ thì ghi ra component dưới dạng thẻ */}
          {/* <this.props.component /> */}

          {/* Truyền dưới dạng là hàm => gọi hàm thì sẽ trả về là component */}
          {/* {this.props.component()} */}

          {/* Muốn lấy thuộc tính children thì chúng ta gọi tới phương thức là this.props.children */}
          {/* {this.props.children.map((component , index) => {
            return component
          })} */}

          {this.props.children}
        </div>

        <div className='container'>
          <h1>{this.state.title}</h1>
          <button className="btn btn-info" onClick={this.changeTitle}>change title</button>
        </div>
      </div>
    );
  }
}
