// src/components/ExpenseForm.js
import React, { useState } from 'react';

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert('Title and amount required');
    onAdd({ title, amount: Number(amount), category, date: date || new Date(), notes });
    setTitle(''); setAmount(''); setNotes(''); setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title (eg. Coffee)" />
        <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount" type="number" step="0.01" />
      </div>
      <div className="form-row">
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option>Food</option>
          <option>Transport</option>
          <option>Rent</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
        <input value={date} onChange={e=>setDate(e.target.value)} type="date" />
      </div>
      <div className="form-row">
        <input value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Notes (optional)" />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
