import React, { useState } from "react";
import "./Feedback.css"; // Import the CSS file

const Feedback = () => {
    const [template, setTemplate] = useState(
        "Dear Student,\n\nWe value your feedback. Please share your thoughts on the recent event using the following prompts:\n1. What did you like about the event?\n2. What can we improve?\n3. Additional suggestions.\n\nThank you!"
    );
    const [responses, setResponses] = useState([]);

    const handleSendTemplate = () => {
        alert("Feedback template has been sent to students!"); // Mock send action
    };

    const handleAddResponse = () => {
        const newResponse = prompt("Enter student feedback:");
        if (newResponse) {
            setResponses([...responses, newResponse]);
        }
    };

    return (
        <div className="feedback-container">
            <h2>Feedback Management</h2>
            <form>
                <h3>Feedback Template</h3>
                <textarea
                    rows="10"
                    cols="70"
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                ></textarea>
                <br />
                <button type="button" onClick={handleSendTemplate}>
                    Send Feedback Template
                </button>
            </form>

            <h3>Student Responses</h3>
            {responses.length > 0 ? (
                <ul>
                    {responses.map((response, index) => (
                        <li key={index}>{response}</li>
                    ))}
                </ul>
            ) : (
                <p>No responses yet.</p>
            )}
            <button type="button" onClick={handleAddResponse}>
                Add Response (Mock)
            </button>
        </div>
    );
};

export default Feedback;
