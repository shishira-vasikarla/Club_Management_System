import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core"; // Import FontAwesome library
import { faSquareInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import specific icons
import "./Notifications.css";

// Add icons to the library
library.add(faSquareInstagram, faLinkedin);

const Notifications = () => {
    const [emailContent, setEmailContent] = useState("");
    const navigate = useNavigate();

    const handleSendEmail = () => {
        const mailto = 'mailto:?subject=Event Notification&body=${encodeURIComponent(emailContent)}';
        window.open(mailto, "_blank"); // Opens Gmail or the default email client
    };

    const handleSetReminders = () => {
        navigate("/set-reminders"); // Navigate to the reminders page
    };

    return (
        <div className="notifications">
            <h2>Notifications</h2>

            {/* Email Message Box */}
            <div className="email-section">
                <h3>Send Email</h3>
                <textarea
                    placeholder="Type your email content here..."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                ></textarea>
                <button onClick={handleSendEmail}>Send</button>
            </div>

            {/* Set Reminders */}
            <div className="reminder-section">
                <h3>Set Reminders</h3>
                <button onClick={handleSetReminders}>Set Reminders</button>
            </div>

            {/* Social Media Links */}
            <div className="social-media-section">
                <h3>Social Media</h3>
                <div className="social-icons">
                    {/* Instagram Icon */}
                    <FontAwesomeIcon
                        icon="fa-brands fa-square-instagram"
                        size="2x"
                        style={{ color: "#E1306C", margin: "0 10px" }}
                    />

                    {/* LinkedIn Icon */}
                    <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        size="2x"
                        style={{ color: "#0077B5", margin: "0 10px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Notifications;