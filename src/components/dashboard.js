import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./dashboard.css";

const Dashboard = () => {
    // State to manage clubs
    const [clubs, setClubs] = useState([
        { id: 1, name: "Coding Club", budget: 5000, leader: "Alice" },
        { id: 2, name: "Robotics Club", budget: 7000, leader: "Bob" },
    ]);
    const [newClub, setNewClub] = useState({ name: "", budget: "", leader: "" });
    const [editingClub, setEditingClub] = useState(null);

    // Add a new club
    const addClub = () => {
        setClubs([
            ...clubs,
            {
                id: clubs.length + 1,
                name: newClub.name,
                budget: parseFloat(newClub.budget),
                leader: newClub.leader,
            },
        ]);
        setNewClub({ name: "", budget: "", leader: "" });
    };

    // Update an existing club
    const updateClub = (id) => {
        setClubs(
            clubs.map((club) =>
                club.id === id ? { ...club, ...editingClub } : club
            )
        );
        setEditingClub(null);
    };

    // Delete a club
    const deleteClub = (id) => {
        setClubs(clubs.filter((club) => club.id !== id));
    };

    return (
        <div className="dashboard">
            <h2>Club Management</h2>

            {/* Club List */}
            <h3>Active Clubs</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Budget ($)</th>
                        <th>Leader</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clubs.map((club) => (
                        <tr key={club.id}>
                            <td>
                                <Link
                                    to={'/dashboard/${club.name}'}
                                    className="club-link"
                                >
                                    {club.name}
                                </Link>
                            </td>
                            <td>{club.budget}</td>
                            <td>{club.leader}</td>
                            <td>
                                <button
                                    onClick={() => setEditingClub(club)}
                                >
                                    Edit
                                </button>
                                <button onClick={() => deleteClub(club.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add New Club */}
            <h3>Add New Club</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addClub();
                }}
            >
                <input
                    type="text"
                    placeholder="Club Name"
                    value={newClub.name}
                    onChange={(e) =>
                        setNewClub({ ...newClub, name: e.target.value })
                    }
                    required
                />
                <input
                    type="number"
                    placeholder="Budget"
                    value={newClub.budget}
                    onChange={(e) =>
                        setNewClub({ ...newClub, budget: e.target.value })
                    }
                    required
                />
                <input
                    type="text"
                    placeholder="Leader"
                    value={newClub.leader}
                    onChange={(e) =>
                        setNewClub({ ...newClub, leader: e.target.value })
                    }
                    required
                />
                <button type="submit">Add Club</button>
            </form>

            {/* Edit Club */}
            {editingClub && (
                <div className="edit-modal">
                    <h3>Edit Club</h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            updateClub(editingClub.id);
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Club Name"
                            value={editingClub.name}
                            onChange={(e) =>
                                setEditingClub({
                                    ...editingClub,
                                    name: e.target.value,
                                })
                            }
                            required
                        />
                        <input
                            type="number"
                            placeholder="Budget"
                            value={editingClub.budget}
                            onChange={(e) =>
                                setEditingClub({
                                    ...editingClub,
                                    budget: e.target.value,
                                })
                            }
                            required
                        />
                        <input
                            type="text"
                            placeholder="Leader"
                            value={editingClub.leader}
                            onChange={(e) =>
                                setEditingClub({
                                    ...editingClub,
                                    leader: e.target.value,
                                })
                            }
                            required
                        />
                        <button type="submit">Update Club</button>
                        <button onClick={() => setEditingClub(null)}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Dashboard;