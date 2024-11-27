import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Performance.css"; // Import CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const Performance = () => {
    const data = {
        labels: ["Membership Details", "Event Details", "Volunteer Details"],
        datasets: [
            {
                data: [30, 45, 25],
                backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
                hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
            },
        ],
    };

    const handleGenerateReport = () => {
        alert(`
Overview Section:
- Event Details: Participation statistics and highlights
- Membership Details: Current memberships breakdown
- Volunteer Details: Tasks completed and volunteer count

Visualization:
- Pie chart displayed with event, membership, and volunteer proportions.`);
    };

    return (
        <div className="performance-page">
            <h2>Performance Report</h2>
            <button onClick={handleGenerateReport}>Generate Report</button>
            <h3>Visualization</h3>
            <div className="chart-container">
                <Pie data={data} />
            </div>
            <h3>Conclusion</h3>
            <p>
                The visualization above highlights the proportional contributions of
                memberships, events, and volunteers to the overall system.
            </p>
        </div>
    );
};

export default Performance;