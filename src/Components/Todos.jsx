import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Features/Todos/todoSlice.js'

const Todos = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id));
    }

    return (
        <div className='todo-items'>
            <ul>
                {todos.map((todo) => (
                    <li className='' key={todo.id}>
                        <p>{todo.title}</p>
                        <button
                            onClick={() => removeTodoHandler(todo.id)}
                            className='btn btn-danger'
                        >Delete todo</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;