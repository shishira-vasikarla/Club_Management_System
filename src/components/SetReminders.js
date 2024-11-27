import React, { useState } from "react";
import "./SetReminders.css";

const SetReminders = () => {
    const [reminders, setReminders] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [reminderText, setReminderText] = useState("");

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleSetReminder = () => {
        if (selectedDate) {
            setReminders((prev) => ({ ...prev, [selectedDate]: reminderText }));
            setSelectedDate(null);
            setReminderText("");
        }
    };

    const generateCalendar = () => {
        const calendar = [];
        for (let month = 0; month < 12; month++) {
            const daysInMonth = new Date(2025, month + 1, 0).getDate();
            calendar.push(
                <div key={month} className="month">
                    <h3>{new Date(2025, month).toLocaleString("default", { month: "long" })}</h3>
                    <div className="days">
                        {Array.from({ length: daysInMonth }, (_, day) => {
                            const date = `${2025}-${String(month + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
                            const isReminderSet = reminders[date];
                            return (
                                <button
                                    key={date}
                                    className={`day ${isReminderSet ? "reminder-set" : ""}`}
                                    onClick={() => handleDateClick(date)}
                                >
                                    {day + 1}
                                </button>
                            );
                        })}
                    </div>
                </div>
            );
        }
        return calendar;
    };

    return (
        <div className="set-reminders">
            <h2>2025 Calendar</h2>
            <div className="calendar">{generateCalendar()}</div>
            {selectedDate && (
                <div className="reminder-popup">
                    <h3>Set Reminder for {selectedDate}</h3>
                    <textarea
                        value={reminderText}
                        onChange={(e) => setReminderText(e.target.value)}
                        placeholder="Enter reminder note here..."
                    ></textarea>
                    <button onClick={handleSetReminder}>Set Reminder</button>
                </div>
            )}
        </div>
    );
};

export default SetReminders;
