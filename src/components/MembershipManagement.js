import React, { useState } from "react";
import "./MembershipManagement.css";

const MembershipManagement = () => {
    // Mock data for membership plans and members
    const membershipPlans = [
        { name: "Bronze Monthly", price: "$20/month", members: 25 },
        { name: "Silver Semester", price: "$100/semester", members: 50 },
        { name: "Gold Yearly", price: "$180/year", members: 75 },
    ];

    const members = [
        { name: "John Doe", username: "johndoe", expiry: "2024-12-01" },
        { name: "Jane Smith", username: "janesmith", expiry: "2025-05-15" },
        { name: "Emily Davis", username: "emilydavis", expiry: "2024-11-30" },
    ];

    const handleRenew = (username) => {
        alert('Membership for ${username} renewed!');
    };

    const handleCancel = (username) => {
        alert('Membership for ${username} canceled!');
    };

    return (
        <div className="membership-management">
            <h2>Membership Management</h2>

            {/* Membership Plans */}
            <div className="membership-plans">
                {membershipPlans.map((plan, index) => (
                    <div key={index} className="membership-plan">
                        <h3>{plan.name}</h3>
                        <p>Price: {plan.price}</p>
                        <p>Members: {plan.members}</p>
                    </div>
                ))}
            </div>

            {/* Member Details Table */}
            <h3>Manage Members</h3>
            <table className="member-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Membership Expiry Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.username}</td>
                            <td>{member.expiry}</td>
                            <td>
                                <button
                                    className="renew-button"
                                    onClick={() => handleRenew(member.username)}
                                >
                                    Renew
                                </button>
                                <button
                                    className="cancel-button"
                                    onClick={() => handleCancel(member.username)}
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MembershipManagement;