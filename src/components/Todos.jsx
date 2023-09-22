import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import Footer from './Footer';

function UserTodos() {
    const { userId } = useParams();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    }, [userId]);

    return (
        <>
            <div className='todos-container'>
                <h1 className='todos-header'>User's Todos</h1>
                <hr></hr>
                <ul className='todo-list'>
                    {todos.map(todo => (
                        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            {todo.title}
                        </li>
                    ))}
                </ul>
                <NavLink className='goBack' to='/' > ←Back to Homepage</NavLink>
            </div>

            <hr />

            <Footer />

        </>
    );
}

export default UserTodos;