import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';



const Todo = ({ todos,  removeTodo }) => {

    const handleRemoveTodo = (id) => {
        removeTodo(id);
      };

    return todos.map((todo, index) => (
      <div className='list-box' key={index}>
        <div className='todo-row'>
          <div key={todo.id}>
            {todo.text}
          </div>
          <RiCloseCircleLine
          onClick={() => handleRemoveTodo(todo.id)}
          className='delete-icon'
        />
        </div>
      </div>
    ));
    };

export default Todo;