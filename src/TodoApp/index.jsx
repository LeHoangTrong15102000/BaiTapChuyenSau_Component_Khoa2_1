import React , { useState , useEffect} from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import axios from 'axios'
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";


export const TodoApp = () => {

    const [todos , setTodos] = useState([])

    // tạo state lưu trữ trạng thái filter
    const [type, setType] = useState('all');// mặc định ban đầu vào sẽ là all

    // tạo state lưu trữ trạng thái search
    const [search, setSearch] = useState('')

    // Gọi hàm fetchTodo để gọi API todo render lại todo
    const fetchTodo = async () => {
        

        const typeMapping = {
          completed: true,
          uncompleted: false,
          all: undefined
        }
        // Dùng try - catch để call API
        try {
            const result = await axios.get('https://62260a202dfa524018fa3e05.mockapi.io/api/todos', {
              params : {
                completed: typeMapping[type],// lấy trực tiếp type từ state về sử dụng khoogn cần phải tạo params default trong hàm nữa
                title: search || undefined // thêm giá trị search vào
              }
            });
        setTodos(result.data)
        
        } catch (error) {
            console.log('error' , error.response.data)
        }           
    }

    const handleChangeFilter = (type) => {
      setType(type)
    }

    // Hàm xử lý việc search
    const handleSearch = (value) => {
      setSearch(value)
    }

    // useEffect
    // useEffect này sẽ chạy sau lần render đầu tiên, và sau mỗi lần render khi type thay đổi
    useEffect(() => {
        // Gọi API một lần thì để array rỗng vào tham số thứ 2
        // await axios.get('https://62260a202dfa524018fa3e05.mockapi.io/api/todos')
      
        // Gọi lại hàm call API
        fetchTodo();
        
    }, [type, search]);// Chạy lại khi mà type thay đổi, type hay search thay đổi đều render lại
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h1 className="text-center">Todo App</h1>

            <AddTodo onAddSuccess={fetchTodo}/>
            {/*  truyền state là search xuống để nó đồng bộ với component cha và component con */}
            <SearchTodo value={search} onSearch={handleSearch}/>
            <TodoList todos={todos} onUpdateSuccess={fetchTodo}/>
            {/* Để mà thay đổi theo thuộc tính task mà chúng ta chọn thì phải để nó trong state */}
            <FilterTodo onFilter={handleChangeFilter}/>
          </div>
        </div>
      </div>
    </div>
  );
};
