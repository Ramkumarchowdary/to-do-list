
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchTodos, selectTodoStatus, selectTodos, toggleTodo, deleteTodo, addTodo } from './TodoSlice';

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  const status = useAppSelector(selectTodoStatus);
  const [taskInput, setTaskInput] = useState<string>('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: taskInput, completed: false }));
      setTaskInput('');
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
