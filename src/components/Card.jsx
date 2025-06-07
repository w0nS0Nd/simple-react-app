import React from 'react';

function ExpenseItem({ title, amount, date }) {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
            borderRadius: '12px',
            backgroundColor: 'gray',
            color: 'white'
        }}>
            <div>
                <h2>{title}</h2>
                <div>{`${month} ${day}, ${year}`}</div>
            </div>
            <div style={{
                backgroundColor: 'darkviolet',
                borderRadius: '12px',
                border: '2px solid white',
                padding: '10px',
            }}>
                <p>${amount}</p>
            </div>
        </div>
    );
}