import React, { Component } from 'react';
import { connect } from 'react-redux';

class XucXac extends Component {
  // làm React thì làm layout đã chiêm rất nhiều thời gian
  // React giải quyết component thì rất là tốt.

  // Viết hàm render xúc xắc
  renderXucXac = () => {
    // lấy props từ Reducer về,
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          style={{ width: '50px', height: '50px' }}
          src={xucXac.hinhAnh}
          className="ml-2"
          alt={xucXac.hinhAnh}
        />
      );
    });
  };
  render() {
    return (
      <div>
        {/* <img
          style={{ width: '50px', height: '50px' }}
          src="./img_XucXac/1.png"
          className="ml-2"
          alt="GameXucXac"
        />
        <img
          style={{ width: '50px', height: '50px' }}
          src="./img_XucXac/2.png"
          className="ml-2"
          alt="GameXucXac"
        />
        <img
          style={{ width: '50px', height: '50px' }}
          src="./img_XucXac/3.png"
          className="ml-2"
          alt="GameXucXac"
        /> */}
        {/* Dưới render hình ảnh xúc xắc ra giao diện */}
        {this.renderXucXac()}
      </div>
    );
  }
}

// Viết hàm lấy dữ liệu từ store về render ra giao diện
const mapStateToProps = (state) => {
  return {
    // Khi mà nó load lên thì sẽ có props là mangXucXac,từ cái mảng này cho hiển thị ra giao diện
    // Props lấy từ store về;
    mangXucXac: state.BaiTapXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
