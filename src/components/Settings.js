import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSaveChanges = () => {
        alert("Settings updated successfully!");
        console.log({
            firstName,
            lastName,
            phoneNumber,
            address,
            email,
            password,
        });
    };

    return (
        <div className="settings-page">
            <h2>Account Settings</h2>
            <form className="settings-form">
                <div className="settings-section">
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="settings-section">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                    />
                </div>
                <div className="settings-section">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="settings-section">
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                    />
                </div>
                <div className="settings-section">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="settings-section">
                    <label>Change Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                    />
                </div>
                <button type="button" onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;