import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
            borderRadius: '12px',
            backgroundColor: 'gray',
            color: 'white'
        }}>
            <div style={{
                display: 'flex'
            }}>
                <ExpenseDate date={props.date} />
                <h2 style={{marginLeft: '20px'}}>{props.title}</h2>
            </div>
            <div style={{
                display: 'flex',
                backgroundColor: 'darkviolet',
                borderRadius: '12px',
                border: '2px solid white',
                paddingLeft: '20px',
                paddingRight: '20px',
            }}>
                <p>${props.amount}</p>
            </div>
        </div>
    );
}

export default ExpenseItem;