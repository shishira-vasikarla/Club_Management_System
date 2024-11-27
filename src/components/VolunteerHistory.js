import React from "react";
import "./Volunteer.css";

const VolunteerHistory = () => {
    return (
        <div className="volunteer-page">
            <h2>Volunteer History</h2>
            <p>Admins can view the history of past volunteer events and manage volunteer performance records here.</p>
            {/* Example table */}
            <table className="volunteer-table">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Role</th>
                        <th>Volunteers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Annual Fest</td>
                        <td>2024-10-15</td>
                        <td>Setup</td>
                        <td>John Doe, Jane Smith</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default VolunteerHistory;
