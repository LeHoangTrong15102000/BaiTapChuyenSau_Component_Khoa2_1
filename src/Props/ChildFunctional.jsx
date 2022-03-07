import React from 'react';

// Thì props nó sẽ nhận vào thuộc tính ở trên đầu cái hàm này

// Đối với react Functional thì props nó sẽ nhận thông qua thuộc tính là param của dữ liệu
export default function ChildFunctional(props) {
  // dùng destructuring để bóc tách phần tử, nên đặt trùng tên với tên của thuộc tính trong object cha
  let { img, name, desc } = props.productItem; // không có dùng từ khóa this trong functional

  const renderSize = () => {

    // lấy ra giá trị size từ productItem
    let { size } = props.productItem;

    return size.map((number, index) => {
      return (
        <button key={index} className="bnt btn-danger p-1 ml-1">
          {number}
        </button>
      );
    });
  };

  return (
    <div>
      {/* <img
          style={{ width: "100px" }}
          src={props.propObject.img}
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
          <p className="card-text">{desc}</p>
          {renderSize()}
        </div>
      </div>
    </div>
  );
}
