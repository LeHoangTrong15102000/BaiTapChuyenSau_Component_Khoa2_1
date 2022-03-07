import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { flushSync } from "react-dom";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
      
    },

    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
      
    },
  };

  // Viết hàm lấy value của thẻ input
  // handleChangeValue = (name , value) => {
  //   // thử xem -> name nào thì sẽ trả về value đó
  //   console.log(name,value)
  //   // Thì ở đây thằng nào truyền giá trị vào sẽ ứng với cái name của thằng đó
  //   this.setState({
  //     // lấy động về mặt thuộc tính
  //     [name]: value, // dùng ES6, ứng với name nào thì value tương ứng của name đó
  //   }, () => {
  //     console.log(this.state);// xem sau khi thực hiện setState thì giá trị của state là như nào
  //   })
  // }

  // Thay vì phải viết liên tực ở trong form input ta đem ra thành một cái hàm -> Viết như vậy thì nó sẽ gắn ngọn và clean code hơn nhiều
  handleChangeValue = (event) => {
    // Trong đây là bốc tách ra từng thuộc tính của thẻ input
    let { name, value, type } = event.target;
    // this.setState(
    //   {
    //     // setState nó lại bằng cách là giá trị của thằng input nào thì được nhập và ô của input đó
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );

    console.log(name, value)

    // Phương thức setState là phương thức bất đồng bộ
    // this.setState({
    //   values: {...this.state.values,[name]: value},// Mình sẽ gán động thuộc tính như vậy, các giá trị người dùng nhập vào sẽ đè lên các giá trị rỗng ban đầu
    // })
    // console.log(this.state.values)
    // this.setState({
    //   errors: {...this.state.errors, [name]: 'lỗi'}
    // })
    // if (value === '') {
    //   this.setState({
    //     errors: {...this.state.errors,[name]: 'không được bỏ trống!'}
    //   })
    // } else {
    //   // Ngược lại nếu mà không bỏ trống thì không gán lỗi
    //   this.setState({
    //     errors: {...this.state.errors, [name]: ''} 
    //   })
    // }
    let newValues = {...this.state.values, [name]: value};// Xử lý riêng cho 2 thằng này

    let newErrors = {...this.state.errors}

    if (value.trim() === '') {
      newErrors[name] = name + ' is required !'
    } else {
      newErrors[name] = ''
    }
    
    // Bóc tách thêm thuộc tính để kiểm tra cho trường email
    if (type === 'email') {
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      // Nếu gia trị của email hiện tại pass qua được cái chuỗi "re" thì email đó là đúng
      // Chuỗi test giá trị đầu vào của mình
      if (!regexEmail.test(value)) {
        newErrors[name] =  name + ' is invalid!!'
      } else {
        newErrors[name] = ''
      }
    }

    // Kiểm tra cho giá trị độ dài của pass, kiểm tra xem password nhập lại có trùng với pass đặt ra hay không, đại loại là kiểm tra như vậy
    if (name === 'passWordConfirm') {
      // Kiểm tra giá trị của passWordConfirm có trùng với giá trị của passWord hay không
      if (!(value === newValues['passWord'])) {
        // Nếu không trùng thì trả ra lỗi
        newErrors[name] = name + ' Không chính xác'
      } else {
        // Ngược lại thì trả ra lại rỗng
        newErrors[name] = ''
      }
    }
   
    this.setState({
      values: newValues,
      errors: newErrors,
    })
  };

  render() {
    // Đặt thêm thuộc tính name trong ô input để người dùng biết là đang gõ vào ô input nào
    return (
      <div
        className="container-fluid d-flex justify-content-center align-item-center"
        style={{
          backgroundColor: "#EEEEEE",

          height: "100%",
        }}
      >
        <form
          style={{
            fontFamily:
              "'Google Sans' , 'Noto Sans Myanmar UI', arial, sans-serif",
            width: 600,
          }}
          className=" bg-white p-5 m-5"
        >
          <h1 className="text-center mt-0 mb-5">User Profile</h1>

          <div className="row">
            <div className="col-sm-6">
              <div className="group">
                <input
                  value={this.state.values.firstName}
                  type="text"
                  name="firstName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
                <span className="text text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="group">
                <input
                  value={this.state.values.lastName}
                  type="text"
                  name="lastName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
                <span className="text text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  type="text"
                  name="userName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
                <span className="text text-danger">
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input
                  value={this.state.values.email}
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className="text text-danger">
                  {this.state.errors.email}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="group">
                <input
                  value={this.state.values.passWord}
                  type="password"
                  name="passWord"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passWord</label>
                <span className="text text-danger">
                  {this.state.errors.passWord}
                </span>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="group">
                <input
                  value={this.state.values.passWordConfirm}
                  type="password"
                  name="passWordConfirm"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passWordConfirm</label>
                <span className="text text-danger">
                  {this.state.errors.passWordConfirm}
                </span>
              </div>
            </div>
          </div>

          {/* Button xác nhận */}
          <div className="row">
            <div className="col-12">
              <button
                className="btn text-white bg-dark w-100 p-4"
                style={{ fontSize: 25 }}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
