import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todos from './components/Todos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/user/:userId" element={<Todos />} />
    </Routes>
  </BrowserRouter>
);



