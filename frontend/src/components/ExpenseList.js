// src/components/ExpenseList.js
import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ items, onDelete, onUpdate }) {
  if (!items || items.length === 0) return <p>No expenses yet.</p>;
  return (
    <div>
      {items.map(item => (
        <ExpenseItem key={item._id} expense={item} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}
