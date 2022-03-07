import React from "react";
import axios from "axios";

// Bóc tách trực tiếp ở trên param luôn
export const TodoList = ({ todos, onUpdateSuccess }) => {
  // const { todos } = props;

  const handleComplete = async (todo) => {
    // call API update todos
    const { id, ...data } = todo;

    const payload = { ...data, completed: !data.completed }; // làm như vậy để toggles buntton
    await axios.put(
      `https://62260a202dfa524018fa3e05.mockapi.io/api/todos/${id}`,
      payload
    ); // put là thay đổi trạng thái

    // Call lại API lấy danh sách Todo, Bắn một tín hiệu lên Component cha để call lại API lấy danh sách todo
    onUpdateSuccess();
  };

  return (
    <ul style={{ listStyle: "none" }} className="p-0">
      {todos.map((item, index) => (
        <li
          className="d-flex justify-content-between align-items-center"
          key={index}
        >
          <span
            style={{
              textDecoration: item.completed ? "line-through" : "unset",
            }}
          >
            {item.title}
          </span>

          <div>
            <button
              className="btn btn-success"
              onClick={() => handleComplete(item)}
            >
              {item.completed ? "Uncompleted" : "Completed"}
            </button>
            <button className="btn btn-danger">DELETE</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
