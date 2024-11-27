import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import EventManagement from "./components/EventManagement";
import MembershipManagement from "./components/MembershipManagement";
import Feedback from "./components/Feedback";
import Payment from "./components/Payment";
import Notifications from "./components/Notifications";
import SetReminders from "./components/SetReminders";
import VolunteerHistory from "./components/VolunteerHistory";
import VolunteerManagement from "./components/VolunteerManagement";
import Performance from "./components/Performance";
import Settings from "./components/Settings";
import Layout from "./components/Layout"; // Added Layout component for background management
import "./App.css";

function App() {
    return (
        <Router>
            <Layout>
                <Navbar />
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <div className="home-page">
                                <header className="App-header">
                                    <h1>Welcome to COSC Club Management System!</h1>
                                    <p>
                                        Explore and manage clubs, events, memberships, and more!
                                    </p>
                                </header>
                            </div>
                        }
                    />

                    {/* Login Page */}
                    <Route path="/login" element={<Login />} />

                    {/* Dashboard and Other Pages */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/:clubName" element={<EventManagement />} />
                    <Route path="/membership-management" element={<MembershipManagement />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/set-reminders" element={<SetReminders />} />
                    <Route path="/volunteer-history" element={<VolunteerHistory />} />
                    <Route path="/volunteer-management" element={<VolunteerManagement />} />
                    <Route path="/performance" element={<Performance />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
