import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [volunteerDropdownVisible, setVolunteerDropdownVisible] = useState(false);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

    return (
        <nav className="navbar">
            <h1>Algoma University</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>

                {/* Profile Dropdown */}
                <li
                    className="dropdown"
                    onMouseEnter={() => setProfileDropdownVisible(true)}
                    onMouseLeave={() => setProfileDropdownVisible(false)}
                >
                    <a href="#" className="dropdown-button">Profile</a>
                    {profileDropdownVisible && (
                        <ul className="dropdown-menu">
                            <li><Link to="/performance">Performance</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                            <li><Link to="/login">Logout</Link></li>
                        </ul>
                    )}
                </li>

                {/* Communication Dropdown */}
                <li
                    className="dropdown"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                    <a href="#" className="dropdown-button">Communication</a>
                    {dropdownVisible && (
                        <ul className="dropdown-menu">
                            <li><Link to="/membership-management">Membership Management</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                            <li><Link to="/payment">Payment</Link></li>
                            <li><Link to="/notifications">Notifications</Link></li>
                        </ul>
                    )}
                </li>

                {/* Volunteer Dropdown */}
                <li
                    className="dropdown"
                    onMouseEnter={() => setVolunteerDropdownVisible(true)}
                    onMouseLeave={() => setVolunteerDropdownVisible(false)}
                >
                    <a href="#" className="dropdown-button">Volunteer</a>
                    {volunteerDropdownVisible && (
                        <ul className="dropdown-menu">
                            <li><Link to="/volunteer-history">Volunteer History</Link></li>
                            <li><Link to="/volunteer-management">Volunteer Management</Link></li>
                        </ul>
                    )}
                </li>

                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;