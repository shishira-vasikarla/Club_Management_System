import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="with-background">
            {children}
        </div>
    );
};

export default Layout;
