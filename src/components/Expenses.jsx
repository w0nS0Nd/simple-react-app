import React, { useState, useEffect } from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

const defaultExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function Expenses() {
    const [expenses, setExpenses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            setExpenses(JSON.parse(storedExpenses).map((expense) => ({
                ...expense,
                date: new Date(expense.date),
            })));
        } else {
            setExpenses(defaultExpenses);
            localStorage.setItem('expenses', JSON.stringify(defaultExpenses));
        }
    }, []);
    const handleAddExpenseClick = () => {
        setShowForm(true);
    };

    const handleCancelClick = () => {
        setShowForm(false);
        setTitle('');
        setAmount('');
        setDate('');
    };

    const handleSubmit = () => {
        const newExpense = {
            id: `e${Math.random().toString(36).substr(2, 9)}`,
            title,
            amount: parseFloat(amount),
            date: new Date(date),
        };
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

        setShowForm(false);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <div
            style={{
                backgroundColor: 'black',
                paddingTop: '5px',
                paddingBottom: '5px',
                margin: '10px',
                borderRadius: '12px',
            }}
        >
            {!showForm && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px',
                        paddingTop: '30px',
                        paddingBottom: '30px',
                        backgroundColor: 'darkviolet',
                        borderRadius: '8px',
                        color: 'white',
                        alignItems: 'center',
                        margin: '10px',
                    }}
                >
                    <button
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            padding: '20px',
                        }}
                        onClick={handleAddExpenseClick}
                    >
                        Add New Expense
                    </button>
                </div>
            )}
            {showForm && (
                <div
                    style={{
                        margin: '10px',
                        padding: '20px',
                        backgroundColor: '#333',
                        borderRadius: '8px',
                        color: 'white',
                    }}
                >
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Amount
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Date
                        </label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: '#7B2CBF',
                                color: 'white',
                                padding: '8px 15px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                        <button
                            style={{
                                backgroundColor: '#7B2CBF',
                                color: 'white',
                                padding: '8px 15px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                            onClick={handleSubmit}
                        >
                            Add Expense
                        </button>
                    </div>
                </div>
            )}
            <Card expenses={expenses} />
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default Expenses;
