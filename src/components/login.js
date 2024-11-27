import React, { useState, useEffect } from "react";
import "./login.css"; // Import styles for the login page

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        // Add class to the body when the login page is displayed
        document.body.classList.add("login-page");

        // Cleanup function to remove the class when the component is unmounted or changed
        return () => {
            document.body.classList.remove("login-page");
        };
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for handling login (e.g., API call) goes here
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="login-btn">
                    Login
                </button>
                <p className="reset-password">
                    <a href="/reset-password">Forgot your password?</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
