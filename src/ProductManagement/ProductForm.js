import React, { Component } from "react";

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: "",
        os: "",
        display: "",
        memory: "",
        camera: "",
        price: "",
        image: "",
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

  handleSubmit = (evt) => {
    // Ngăn hành vi reload lại page khi submit form
    evt.preventDefault();
    // Đưa values lên component cha để thêm vào mảng products
    const id = Math.floor(Math.random() * 100);
    this.props.onSubmit({ ...this.state.values, id });
  };

  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="os">OS</label>
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
          <label htmlFor="display">Display</label>
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
          <label htmlFor="camera">Camera</label>
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
          <label htmlFor="memory">Memory</label>
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
          <label htmlFor="price">Price</label>
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
          <label htmlFor="image">Image</label>
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
