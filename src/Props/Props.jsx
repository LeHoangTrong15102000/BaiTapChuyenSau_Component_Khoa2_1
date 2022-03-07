import React, { Component } from 'react'
import DanhSachSanPham from '../ProductPhone/DanhSachSanPham'
import Parent from './Parent'

export default class Props extends Component {

    // Bài học thứ 1

    // Props - truyền dữ liệu giữa các component 
    // Props là một thuộc tính của thẻ (ta có thể hiểu props là property của thẻ). Ví dụ thẻ input bên dưới ta có các props ClassName, type, placeHolder

    // Props đối với components
    // props là thuộc tính mặc định của component để nhận dữ liệu từ các giá trị component cha truyền vào => để binding dữ liệu ra component con tại HTML tương ứng
    // Props của component chỉ nhận các thuộc tính được truyền vào từ component cha của nó và không thể bị chỉnh sửa bên trong component
    // Đối với stateful và stateless component có các cách sử dụng props khác nhau.


    //  Tóm lại có thể truyền dữ liệu qua props hoặc là children

    // DOM tới component con
    refParent = React.createRef();


    // Hàm sự kiện ở đây sẽ gọi tới hàm sự kiện changeTitle ở component con
    changeTitle = () => {
      this.refParent.current.changeTitle();
    }

    
  render() {
    return (
      <div>
        {/* Truyền component dưới dạng props */}       
        {/* <Parent component={DanhSachSanPham}/> */}


        {/* Chúng ta sẽ thực hiện nâng cao hơn một chút là truyền component thông qua cách là gọi hàm đó */}
        {/* <Parent component={() => {return <DanhSachSanPham />}}/> */}

        {/* Thông thường truyền props com,ponent người ta thường truyền ở giữa cặp HTML */}
        <button className="btn btn-info" onClick={this.changeTitle}>Change Title</button>
        {/* DOM tới component con, Component là mốt đối tượng thì component cha DOM tới sẽ sở hữu tất cả các phương thức và thuộc tính */}
        <Parent ref={this.refParent}>
          {/* Thì có nghĩa là bên đây chúng ta t ruyền bao nhiêu cái children ở đây thì bên phía bên kia nó sẽ hốt hết tất cả các children */}
          {/* <DanhSachSanPham />
          <h3>Hello CyberLearn</h3>
          <DanhSachSanPham /> */}
          <DanhSachSanPham />
        </Parent>
        {/* this.props.children còn có cái ưu điểm nữa là ở kết quả mà nó trả về cho mình còn là một cái mảng nữa , mảng danhsach của các sản phẩm children 
        mà chúng ta truyền vào*/}

      </div>
    )
  }
}
