import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (

        <>
            <h1 className='title'>Mini To Do App</h1>
            <hr />
            <div className='dashboard-container'>
                <h3 className='dashboard-header'>Click on a user's name to see their list of Todos:</h3>
                <ul className='user-list'>
                    {users.map(user => (
                        <li key={user.id} className='user-item'>
                            <NavLink to={`/user/${user.id}`} className='user-link'>{user.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <hr />
            </div>

            <Footer />
        </>


    );
}



export default Dashboard;
