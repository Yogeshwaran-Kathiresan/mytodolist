import { useState } from 'react';
import './App.css';
import Todoform from './components/Todoform';
import Todo from './components/Todolist';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    console.log("Addtodo Id" + todo.id);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    console.log("inp ID" +id);

    setTodos(removedArr);
  }

  return (
    <div className="App">
      <h1>What's your plan for the day!</h1>
      <Todoform onSubmit={addTodo} />
      <h2 className='list-head'>Todo List</h2>
      <Todo todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
