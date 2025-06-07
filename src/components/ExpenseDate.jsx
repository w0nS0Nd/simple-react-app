function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderRadius: '12px',
            textAlign: 'center',
            width: '100px',
            display: 'inline-block',
            border: '2px solid white'
        }}>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}

export default ExpenseDate;