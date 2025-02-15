import React from "react";
import { motion } from "framer-motion";
import "./features.css";

const stats = [
  {
    id: 1,
    value: "Realtime Faculty Self Appraisal",
  },
  {
    id: 2,
    value: "Comprehensive Academic Tracking",
  },
  { id: 3, value: "Secure and Role Based Access" },
  {
    id: 4,
    value: "Data Driven Performance Analytics",
  },
  { id: 5, value: "Paperless Automated Process" },
  {
    id: 6,
    value: "Cloud Based and Mobile Friendly",
  },
];

export default function Features() {
  return (
    <div className="stats-container" id="stats-container">
      <div className="stats-wrapper">
        <dl className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <dd className="stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
