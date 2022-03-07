import userEvent from '@testing-library/user-event';
import React, { useReducer, useState } from 'react'

const COLORS = ['red', 'yellow' , 'green', 'pink' , 'purple']

export const State = () => {
    // khai báo 1 biến state mới và đặt tên là count
    // useState trả về một cặp giá trị
    // Giá trị ban đầu là trạng thái hiện tại của State
    // Giá trị thứ 2 là một hàm dùng để thay đổi giá trị của state
    const [count , setCount] = useState(0);// giá trị trong useState là Default value
    // Khi muốn khai báo nhiều state ta chỉ cần khai báo useState nhiều lần
    const [color , setColor] = useState('red');// Thì biến thứ 2 setColor nó sẽ set lại giá trị cho biến "color"

    const handleChangeColor = () => {
      let idx = Math.floor(Math.random() * COLORS.length);
      
      setColor(COLORS[idx])
    }

    // Khai báo state là một array
    const [todos , setTodos] = useState(['homeWork', 'houseWork'])

    

    const removeTodo = (index) => {
        // Khi thay đổi state là array hay object thì phải luôn luôn nhớ phải clone ra array hoặc object mới

        // C1
        // const newTodos = [...todos]
        // newTodos.splice(index, 1)
        // setTodos(newTodos);

        // C2 Dùng hàm filter để xóa phần tử
        const newTodos = todos.filter((_, idx) => idx !== index)
        setTodos(newTodos)
        // Hàm filter sẽ tạo ra cho chúng một mảng mới phần tử như mảng cũ
        // Hàm filter trả ră true thì phần tử đó sẽ được giữ lại, khi là false thì nó sẽ không thêm phần tử đó vào mảng mới
    };

    // Khai báo state là một object

    const [user , setUser] = useState({name: 'JOHN', age: '25'})

    // Một sự kiện xảy ra trong js nó sẽ trả ra đối tượng evt, nó trả ra cho chúng ta name và value
    const handleChange = (event) => {
        const { name , value} = event.target;
        // Nếu chỉ muốn thay đổi 1 giá trị trong object, luôn nhớ phải sao chép lại những giá trị khác
        // state sẽ chứa giá trị hiện tại của user
        setUser(state => ({...state, [name]: value}))
    }
  return (
    <div>
        <p>You clicked {count} times</p>
        {/*  Khi giá trị trong state thay đổi thì component nó sẽ re render lại và trả ra giá trị mới cho chúng ta */}
        <button onClick={() => setCount(count + 1)}>Click</button>


        <p>Random color {color}</p>
        <button onClick={handleChangeColor}>Change Color</button>

        <p>Todo List</p>
        <ul>
            {todos.map((item, index) => (
                <li key={index} onClick={() => removeTodo(index)}>{item}</li>
            ))}
        </ul>

        <p>User Information</p>
        <p>Name: {user.name} - Age: {user.age}</p>

        <div>
            <label>Name</label>
            <input  type="text" name="name" value={user.name} onChange={handleChange}/>
            <label>Age</label>
            <input type="text" name="age" value={user.age} onChange={handleChange}/>
        </div>
        
    </div>
  )
}
