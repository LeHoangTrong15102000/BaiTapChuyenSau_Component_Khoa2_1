import React, { Component } from "react";
import {  ModelContext } from '../_Context/ModelContext'


export default class ModelStateProvider extends Component {
  // Tạo cai component cho Provider, Thì cái component này nó sẽ sử dụng ModelContext

  state = {
      like: 1,
  }

  setLike = () => {
      this.setState({
          like: this.state.like + 1
      })
  }

  // Nguồn dữ liệu chia sẻ thì mình sẽ đặt nó trong biến là value
  render() {
    return <ModelContext.Provider value={{stateLike: this.state.like, setLike: this.setLike}}>
        {/* Nó sẽ chứa bên trong những thằng nào mà được bao bọc bởi thằng này thì có thể sử dụng được nó
            lấy component này bao phủ thz nào thì thằng đó có thể sử dụng context này
         */}
        {this.props.children}
    </ModelContext.Provider>;
  }
}
