
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TodoList from './TodoList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>To-Do List</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
