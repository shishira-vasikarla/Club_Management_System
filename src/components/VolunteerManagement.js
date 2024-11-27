import React, { useState } from "react";
import "./Volunteer.css";

const VolunteerManagement = () => {
    const [volunteers, setVolunteers] = useState([]);

    const handleCreateOpportunity = () => {
        // Logic to create a volunteer opportunity
    };

    const handleAssignRoles = () => {
        // Logic to assign roles and email volunteers
    };

    return (
        <div className="volunteer-page">
            <h2>Volunteer Management</h2>
            <div className="management-section">
                <h3>Create Volunteer Opportunities</h3>
                <form>
                    <label>Event Name:</label>
                    <input type="text" placeholder="Event Name" />
                    <label>Role Descriptions:</label>
                    <textarea placeholder="Describe roles needed"></textarea>
                    <label>No. of Volunteers Needed:</label>
                    <input type="number" placeholder="Number of Volunteers" />
                    <label>Skills Required:</label>
                    <input type="text" placeholder="Skills (e.g., communication, organization)" />
                    <button type="button" onClick={handleCreateOpportunity}>Create</button>
                </form>
            </div>

            <div className="management-section">
                <h3>Assign Roles and Notify Volunteers</h3>
                <button onClick={handleAssignRoles}>Assign and Notify</button>
            </div>
        </div>
    );
};

export default VolunteerManagement;
