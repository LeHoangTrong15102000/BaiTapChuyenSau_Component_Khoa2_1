import React, {useState} from "react";
import axios from 'axios'
export const AddTodo = ({ onAddSuccess}) => {

    const [title, setTitle] = useState("")
    
    
    const handleAddTodo = async () => {

        const payload = {
            title,
            completed: false,
        }
        
        try {
            await axios.post("https://62260a202dfa524018fa3e05.mockapi.io/api/todos", payload);

            // Goij hàm khi thêm thành công để bắn tín hiệu lên thẻ cha
            onAddSuccess();
        } catch (error) {
            console.log(error.response.data)
        }

    }
  return (
    <div className="form-group">
      <label>Title</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(event) => setTitle(event.target.value)}
        className="form-control"
      />
      <button className="btn btn-primary" onClick={handleAddTodo}>ADD</button>
    </div>
  );
};
