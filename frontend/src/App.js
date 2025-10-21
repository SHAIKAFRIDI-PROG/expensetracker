// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE from './api';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`${API_BASE}/expenses`);
      setExpenses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchExpenses(); }, []);

  const addExpense = async (expense) => {
    try {
      const res = await axios.post(`${API_BASE}/expenses`, expense);
      setExpenses(prev => [res.data, ...prev]);
    } catch (err) { console.error(err); }
  };

  const updateExpense = async (id, updated) => {
    try {
      const res = await axios.put(`${API_BASE}/expenses/${id}`, updated);
      setExpenses(prev => prev.map(e => e._id === id ? res.data : e));
    } catch (err) { console.error(err); }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${API_BASE}/expenses/${id}`);
      setExpenses(prev => prev.filter(e => e._id !== id));
    } catch (err) { console.error(err); }
  };

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <div className="total">Total: ₹{total.toFixed(2)}</div>
      <ExpenseList items={expenses} onDelete={deleteExpense} onUpdate={updateExpense} />
    </div>
  );
}

export default App;
