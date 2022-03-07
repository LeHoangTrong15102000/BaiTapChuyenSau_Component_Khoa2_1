import React, { Component } from 'react';

export default class Child extends Component {
  // Child là cái thẻ mà do chúng ta tự định nghĩa
  // Ví dụ chngs ta có nguồn dữ liệu từ parent và chúng ta muốn binding sang thẻ cha

  // Muốn lấy dữ liệu từ thằng cha qua thì chúng ta chỉ cần gọi nó thông qua thuộc tính props của thằng cha
  // Nhận props từ component cha thì cú pháp như sau this.props.{prop Name}

  // Sau này chúng ta sẽ chạy vòng lặp và quét các cái mảng để tạo ra n component tương ứng => lúc đó nó sẽ tạo động hay hơn
  // Phải đặt đúng tên của props thì nó mới nhận được giá trị từ thằng cha của nó
  // Thuộc tính props nhận vào thông qua this.props

  // Đối với size giầy ta viết riêng một cái hàm để render ra giao diện

  renderSize = () => {
    // Mình bóc tách thuộc tính size của object cũng được

    let { size } = this.props.propObject;

    // mỗi size là một cái button,
    return size.map((number, index) => {
      return (
        <button key={index} className="btn btn-primary p-1 ml-1">
          {number}
        </button>
      );
    });
  };

  render() {
    // chỉ có thể khai báo biến trong đoạn code render
    let { img, name, desc, price } = this.props.propObject; // Nếu nó là mảng thì mới cần ghi propsName vào

    let { showSize } = this.props; // À nếu là cái mảng không có thuộc tính bên trong thì không cần phải truyền propsName vào => nó sẽ hiểu lấy cái biến của mảng gán ngược lại

    return (
      <div>
        {/* <img
          style={{ width: "100px" }}
          src={this.props.propSource}
          alt="ImgHuTieu"
        /> */}

        <div style={{ width: '200px' }} className="card text-left">
          <img
            style={{ width: '200px' }}
            className="card-img-top"
            src={img}
            alt={img}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <span className="card-text">{desc}</span>
            <p className="card-text">{price}</p>
            {this.renderSize()}
            {showSize.map((number, index) => {
              return (
                <button key={index} className="btn btn-success p-1 ml-1">
                  {number}
                </button>
              );
            })}
            {/* Hàm không được định nghĩa trong đây nhưng vẫn có thể truyền vào
            thông qua props 
              Tại vì bản chất cái component này không có cái hàm đó
            */}
            <button
              onClick={() => {
                // Bên đây mình gọi hàm thì bắt buộc phải có dấu đóng mở ngoặc "()" và tên hàm là tên propsName
                this.props.showAlert(desc);
              }}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
