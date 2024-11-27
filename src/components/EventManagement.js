import React, { useState } from "react";
import "./EventManagement.css";

const EventManagement = ({ clubName }) => {
    // State to manage events
    const [events, setEvents] = useState([
        {
            id: 1,
            name: "Coding Workshop",
            type: "Free",
            location: "Timmins",
            description: "Learn the basics of Python programming.",
        },
        {
            id: 2,
            name: "Robotics Demo",
            type: "Paid",
            location: "Brampton",
            description: "Experience cutting-edge robotics technology.",
        },
    ]);

    const [newEvent, setNewEvent] = useState({
        name: "",
        type: "Free",
        location: "",
        description: "",
    });

    const [editingEvent, setEditingEvent] = useState(null);

    // Add a new event
    const addEvent = () => {
        setEvents([
            ...events,
            {
                ...newEvent,
                id: events.length + 1,
            },
        ]);
        setNewEvent({ name: "", type: "Free", location: "", description: "" });
    };

    // Update an existing event
    const updateEvent = (id) => {
        setEvents(events.map((event) => (event.id === id ? { ...event, ...editingEvent } : event)));
        setEditingEvent(null);
    };

    // Delete an event
    const deleteEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <div className="event-management">
            <h2>Event Management for {clubName}</h2>

            {/* Event List */}
            <div className="event-list">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <h3>{event.name}</h3>
                        <p>Type: {event.type}</p>
                        <p>Location: {event.location}</p>
                        <p>{event.description}</p>
                        <button onClick={() => setEditingEvent(event)}>Edit</button>
                        <button onClick={() => deleteEvent(event.id)}>Delete</button>
                    </div>
                ))}
            </div>

            {/* Add New Event */}
            <h3>Add New Event</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addEvent();
                }}
            >
                <input
                    type="text"
                    placeholder="Event Name"
                    value={newEvent.name}
                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                    required
                />
                <select
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                    required
                >
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                </select>
                <input
                    type="text"
                    placeholder="Location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Event Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    required
                ></textarea>
                <button type="submit">Add Event</button>
            </form>

            {/* Edit Event Modal */}
            {editingEvent && (
                <div className="edit-modal">
                    <h3>Edit Event</h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            updateEvent(editingEvent.id);
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Event Name"
                            value={editingEvent.name}
                            onChange={(e) =>
                                setEditingEvent({ ...editingEvent, name: e.target.value })
                            }
                            required
                        />
                        <select
                            value={editingEvent.type}
                            onChange={(e) =>
                                setEditingEvent({ ...editingEvent, type: e.target.value })
                            }
                            required
                        >
                            <option value="Free">Free</option>
                            <option value="Paid">Paid</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Location"
                            value={editingEvent.location}
                            onChange={(e) =>
                                setEditingEvent({ ...editingEvent, location: e.target.value })
                            }
                            required
                        />
                        <textarea
                            placeholder="Event Description"
                            value={editingEvent.description}
                            onChange={(e) =>
                                setEditingEvent({ ...editingEvent, description: e.target.value })
                            }
                            required
                        ></textarea>
                        <button type="submit">Update Event</button>
                        <button onClick={() => setEditingEvent(null)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EventManagement;
