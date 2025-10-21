// src/components/ExpenseItem.js
import React, { useState } from 'react';

export default function ExpenseItem({ expense, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const save = () => {
    onUpdate(expense._id, { title, amount: Number(amount), category, date: expense.date, notes: expense.notes });
    setEditing(false);
  };

  return (
    <div className="expense-item">
      {editing ? (
        <>
          <div style={{flex:1}}>
            <input value={title} onChange={e=>setTitle(e.target.value)} />
            <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" />
          </div>
          <div>
            <button onClick={save}>Save</button>
            <button onClick={()=>setEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <div><strong>{expense.title}</strong> <small>({expense.category})</small></div>
            <div>{new Date(expense.date).toLocaleDateString()}</div>
          </div>
          <div>
            <div>₹{Number(expense.amount).toFixed(2)}</div>
            <div>
              <button onClick={()=>setEditing(true)}>Edit</button>
              <button onClick={()=>onDelete(expense._id)}>Delete</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
