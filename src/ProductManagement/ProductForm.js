import React, { Component } from 'react';
import axios from 'axios'

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: '',
        os: '',
        display: '',
        memory: '',
        camera: '',
        price: '',
        image: '',
      },
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    // Bởi vì react update state và props có thể bất đồng bộ
    // Nên setState dạng callback nếu bên trong có sử dụng lại giá trị hiện tại để tính toán cho giá trị tiếp theo để đảm bảo state luôn luôn là mới nhất
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  // Thêm sản phẩm, những bây giờ mình sẽ không thêm thủ công nữa mình sẽ gọi API
  handleSubmit = (evt) => {
    // Ngăn hành vi reload lại page khi submit form
    evt.preventDefault();
    // Đưa values lên component cha để thêm vào mảng products
    // const id = Math.floor(Math.random() * 100); // Không cần khi làm việc với APIq, vì ID sẽ tự do phía server sinh ra
    // this.props.onSubmit({ ...this.state.values, id });
    // Bây giờ gọi API chỉ cần truyền values lên thôi
    // this.props.onSubmit(this.state)

    // Gọi API thêm sản phẩm
    axios.post('https://6225cc6d6c0e3966205bc790.mockapi.io/api/Products').then(result => {
      
    })
  };

  render() {
    // bóc tách values ra
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label style={{ position: 'relative' }} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* OS */}
        <div className="form-group">
          <label style={{ position: 'relative' }} htmlFor="os">
            OS
          </label>
          <input
            type="text"
            id="os"
            name="os"
            value={values.os}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Display */}
        <div className="form-group">
          <label style={{ position: 'relative' }} htmlFor="display">
            Display
          </label>
          <input
            type="text"
            id="display"
            name="display"
            value={values.display}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Camera */}
        <div className="form-group">
          <label style={{ position: 'relative' }} htmlFor="camera">
            Camera
          </label>
          <input
            type="text"
            id="camera"
            name="camera"
            value={values.camera}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Memory */}
        <div className="form-group">
          <label style={{ position: 'relative' }} htmlFor="memory">
            Memory
          </label>
          <input
            type="text"
            id="memory"
            name="memory"
            value={values.memory}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Price */}
        <div className="form-group">
          <label style={{ position: 'relative' }} htmlFor="price">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={values.price}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Image */}
        <div className="form-group">
          <label style={{ position: 'relative' }} htmlFor="image">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={values.image}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        {/* Button Submit */}
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
