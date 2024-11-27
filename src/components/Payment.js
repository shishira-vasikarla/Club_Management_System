import React from "react";
import "./Payment.css";

const Payment = () => {
    // Mock data for payments
    const payments = [
        { username: "johndoe", plan: "Bronze Monthly", amount: "$20", date: "2024-11-10" },
        { username: "janesmith", plan: "Silver Semester", amount: "$100", date: "2024-12-05" },
        { username: "emilydavis", plan: "Gold Yearly", amount: "$180", date: "2024-10-20" },
        { username: "michaeljohn", plan: "Bronze Monthly", amount: "$20", date: "2024-11-15" },
    ];

    return (
        <div className="payment-management">
            <h2>Payment Management</h2>
            <p>View and track all membership payments below.</p>
            <table className="payment-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Membership Plan</th>
                        <th>Payment Amount</th>
                        <th>Date of Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.username}</td>
                            <td>{payment.plan}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Payment;