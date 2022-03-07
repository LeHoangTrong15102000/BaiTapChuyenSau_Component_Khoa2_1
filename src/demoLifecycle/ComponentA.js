import React, { Component } from 'react';
import ComponentB from './ComponentB';

export default class ComponentA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: 'Hello Lifecycle',
    };

    console.log('Run constructor');
  }

  // Hàm này sẽ tự động được chạy 1 lần sau khi render
  // Thông thường dùng để truy cập tới DOM: addEventListener,...
  // Thực hiện side effect: call API, setTime, setInterval,...
  componentDidMount() {
    console.log('Run componentDidMount');

    // Delay 5s và setState lại cho biến counter
    // Timer là hàm có sẵn ở trong React
    this.timer = setTimeout(() => {
      this.setState((state) => ({ counter: state.counter + 1 }));
    }, 5000);
  }

  // Hàm này sẽ tự động được chạy sau mỗi lần render thứ 2 trở đi
  // Khi muốn thực hiện một hành động gì sau khi state hoặc props thay đổi ta sẽ thực hiện trong hàm này(dùng cái giá trị thay đổi thực thi một hành động gì đó).

  // Một số hành động:
  // - Dựa vào state hoặc props mới để call API
  // - Dựa vào state hoặc props mới để setState
  // componentDidUpdate: cung cấp 2 params là giá trị trước khi thay đổi của props và state
  componentDidUpdate(prevProps, prevState) {
    // - Chú ý quan trọng: khi setState trong componentDidUpdate phải có điều kiện dừng
    // Kiểm tra props cũ và props mới khác nhau để đi gọi API

    // if(prevProps.data !== this.props.data) {
    //   this.setState({})
    // }

    console.log('Run componentDidUpdate');
    console.log('State hiện tại', this.state);
    console.log('State trước khi thay đổi', prevState);
  }

  // Chạy 1 lần trước khi component bị huỷ bỏ\
  // Trước khi thằng component này bị hủy bỏ th ì nó sẽ để lại 1 lời trăn trối -> cụ thể là hành động gì đó -> điều này đảm bảo không bị rò rỉ bộ nhớ
  // Reset data, clearTimeout, removeEventListener
  componentWillUnmount() {
    // Clear này đi có nghĩa là khi mà thời gian setInterval chưa hết thì nó cũng sẽ huy setTimeout đi luôn và nó không cần phải chạy cai callback nữa
    clearTimeout(this.timer);
  }

  increase = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  render() {
    console.log('Run render');
    return (
      <div>
        <div>
          <span>Counter: {this.state.counter}</span>
          <button onClick={this.increase}>+</button>
        </div>

        <div>
          <label>Message:</label>
          <input
            type="text"
            value={this.state.message}
            onChange={(evt) => this.setState({ message: evt.target.value })}
          />
        </div>

        <ComponentB message={this.state.message} />
      </div>
    );
  }
}
