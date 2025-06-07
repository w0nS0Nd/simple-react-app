import React, { useState, useEffect } from "react";

function Card({ expenses }) {
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [monthlyExpenses, setMonthlyExpenses] = useState(Array(12).fill(0));

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        const uniqueYears = [...new Set(storedExpenses.map(item => new Date(item.date).getFullYear()))];
        setYears(uniqueYears.sort((a, b) => b - a));
    }, [expenses]);

    useEffect(() => {
        const filteredExpenses = expenses.filter(
            (item) => new Date(item.date).getFullYear() === selectedYear
        );
        const monthlyTotals = Array(12).fill(0);
        filteredExpenses.forEach((item) => {
            const month = new Date(item.date).getMonth();
            monthlyTotals[month] += item.amount;
        });

        setMonthlyExpenses(monthlyTotals);
    }, [selectedYear, expenses]);

    const totalExpenses = monthlyExpenses.reduce((acc, curr) => acc + curr, 0);

    return (
        <div style={{ padding: "20px", backgroundColor: "#1c1c1c", borderRadius: "10px" }}>
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "white",
                    justifyContent: "space-between",
                    display: "flex",
                }}
            >
                <label style={{ fontSize: "18px" }}>Filter by year</label>
                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    style={{
                        marginLeft: "10px",
                        padding: "5px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                >
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    backgroundColor: "#E6D5F5",
                    padding: "15px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "200px",
                }}
            >
                {monthlyExpenses.map((expense, index) => {
                    const fillHeight = totalExpenses ? (expense / totalExpenses) * 100 : 0;
                    return (
                        <div
                            key={index}
                            style={{
                                width: "30px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                position: "relative",
                                border: "1px solid black",
                                backgroundColor: "#F5B7E1",
                                borderRadius: "15px",
                                overflow: "hidden",
                                margin: "0 5px",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: `${fillHeight}%`,
                                    backgroundColor: "#7B2CBF",
                                    position: "absolute",
                                    bottom: 0,
                                }}
                            ></div>
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#E6D5F5",
                    marginTop: '-5px',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    paddingBottom: '10px',
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                }}
            >
                {monthlyExpenses.map((expense, index) => (
                    <span
                        key={index}
                        style={{
                            fontSize: "13px",
                            color: "black",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        {new Date(0, index).toLocaleString("en-US", { month: "short" })}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Card;
