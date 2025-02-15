import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
} from "chart.js";
import "./attendancechart.css";

// Register necessary Chart.js components
Chart.register(LineElement, PointElement, LinearScale, CategoryScale);
Chart.register(BarElement, LinearScale, CategoryScale, Tooltip);
const data = {
  labels: ["Research", "Projects", "Publications", "Achievements", "Other"],
  datasets: [
    {
      label: "Users",
      data: [50, 80, 70, 65, 40],
      backgroundColor: ["#3b82f6", "#e11d48", "#f59e0b", "#a855f7", "#34d399"],
      borderRadius: 10, // Rounded bars
      barThickness: 20, // Controls height of bars
    },
  ],
};
const users = [
  { name: "Olivia Martin", email: "m@example.com", access: "Can edit" },
  { name: "Isabella Nguyen", email: "b@example.com", access: "Can view" },
  { name: "Sofia Davis", email: "p@example.com", access: "Can view" },
];
// Chart Options
const options = {
  indexAxis: "y", // Horizontal bar chart
  scales: {
    x: { display: false },
    y: { display: true },
  },
  plugins: { legend: { display: false }, tooltip: { enabled: true } },
};

// Sample Data
const attdata = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Attendance",
      data: [20, 15, 19, 17, 18, 20, 16],
      borderColor: "white",
      borderWidth: 2,
      pointBackgroundColor: "white",
      pointRadius: 4,
      tension: 0.3, // Smooth curve
    },
  ],
};

// Sample Data
const lecdata = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Lectures",
      data: [44, 40, 37, 41, 39, 42, 38],
      borderColor: "white",
      borderWidth: 2,
      pointBackgroundColor: "black",
      pointRadius: 4,
      tension: 0.3, // Smooth curve
    },
  ],
};

// Chart Options
const attoptions = {
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: { legend: { display: false } },
  elements: { line: { borderJoinStyle: "round" } },
};

export default function Attendance() {
  return (
    <div className="chart-div">
      <div className="charts">
        <motion.div
          className="revenue-card"
          initial={{ opacity: 0, y: 50, scale: 0.9 }} // Start from below
          animate={{ opacity: 1, y: 0, scale: 1 }} // Moves up smoothly
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth easing
        >
          <div className="revenue-header">
            <p>Current Attendence</p>
            <motion.h2
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              18
            </motion.h2>
            <motion.span
              className="growth"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              +8.1% from last month
            </motion.span>
          </div>

          <div className="chart-container">
            <Line data={attdata} options={attoptions} />
          </div>
        </motion.div>
        <motion.div
          className="revenue-card"
          initial={{ opacity: 0, y: 50, scale: 0.9 }} // Start from below
          animate={{ opacity: 1, y: 0, scale: 1 }} // Moves up smoothly
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth easing
        >
          <div className="revenue-header">
            <p>Lectures Taken</p>
            <motion.h2
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              55
            </motion.h2>
            <motion.span
              className="growth"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              +11.5% from last month
            </motion.span>
          </div>
          <div className="chart-container">
            <Line data={lecdata} options={attoptions} />
          </div>
        </motion.div>
        <motion.div
          className="bar-chart-container"
          initial={{ opacity: 0, x: -50 }} // Start from left
          animate={{ opacity: 1, x: 0 }} // Moves in smoothly
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="chart-header">
            <p>Performance Analytics</p>
            <span>Joining - Present</span>
          </div>

          <div className="chart-container">
            <Bar data={data} options={options} />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="share-box"
        initial={{ opacity: 0, y: -50, scale: 0.9, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="share-header">
          <h2>Faculty Leaderboard</h2>
          <p>Track your peers, level up your game!</p>
        </div>

        <div className="share-user-list">
          {users.map((user, index) => (
            <motion.div
              key={index}
              className="share-user-card"
              initial={{ opacity: 0, x: -50, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="share-user-avatar">
                <span>{user.name[0]}</span>
              </div>
              <div className="share-user-info">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
