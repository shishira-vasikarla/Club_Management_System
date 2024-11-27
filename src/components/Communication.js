import React, { useState, useEffect } from "react";
import "./Communication.css"; // Add custom styles for Communication page

const Communication = () => {
    const [message, setMessage] = useState("");

    // Add a background class to the body when the component is mounted
    useEffect(() => {
        // Add class when the page is rendered
        document.body.classList.add("communication-page");

        // Cleanup when the component is unmounted
        return () => {
            document.body.classList.remove("communication-page");
        };
    }, []);

    const handleSendEmail = () => {
        alert(`Email Sent: ${message}`);
    };

    const handlePostSocialMedia = (platform) => {
        alert(`Posted to ${platform}: ${message}`);
    };

    return (
        <div className="communication">
            <h2>Communication Center</h2>

            {/* Event and Membership Notifications */}
            <div className="email-section">
                <h3>Send Notifications</h3>
                <textarea
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button onClick={handleSendEmail}>Send Email</button>
            </div>

            {/* Event Reminders */}
            <div className="reminder-section">
                <h3>Send Reminders</h3>
                <button onClick={() => alert("Reminder sent for upcoming events!")}>
                    Send Event Reminder
                </button>
                <button onClick={() => alert("Reminder sent for membership renewals!")}>
                    Send Membership Reminder
                </button>
            </div>

            {/* Social Media Integration */}
            <div className="social-media-section">
                <h3>Post to Social Media</h3>
                <button onClick={() => handlePostSocialMedia("Instagram")}>
                    Post to Instagram
                </button>
                <button onClick={() => handlePostSocialMedia("LinkedIn")}>
                    Post to LinkedIn
                </button>
                <button onClick={() => handlePostSocialMedia("Algoma Portal")}>
                    Post to Algoma Portal
                </button>
            </div>
        </div>
    );
};

export default Communication;
