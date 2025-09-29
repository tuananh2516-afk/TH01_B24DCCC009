import {useState} from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{padding: 20}}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={addTodo}>Thêm</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
