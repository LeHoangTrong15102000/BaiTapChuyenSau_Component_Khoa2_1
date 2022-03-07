import React , { useState , useEffect} from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import axios from 'axios'


export const TodoApp = () => {

    const [todos , setTodos] = useState([])

    // Gọi hàm fetchTodo để gọi API todo render lại todo
    const fetchTodo = async () => {

        // Dùng try - catch để call API
        try {
            const result = await axios.get('https://62260a202dfa524018fa3e05.mockapi.io/api/todos');
        setTodos(result.data)
        
        } catch (error) {
            console.log('error' , error.response.data)
        }           
    }

    // useEffect
    useEffect(() => {
        // Gọi API một lần thì để array rỗng vào tham số thứ 2
        // await axios.get('https://62260a202dfa524018fa3e05.mockapi.io/api/todos')
      
        // Gọi lại hàm call API
        fetchTodo();
        
    }, [])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h1 className="text-center">Todo App</h1>

            <AddTodo onAddSuccess={fetchTodo}/>
            <TodoList todos={todos} onUpdateSuccess={fetchTodo}/>
          </div>
        </div>
      </div>
    </div>
  );
};
