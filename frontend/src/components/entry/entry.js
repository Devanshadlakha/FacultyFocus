import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./entry.css";

export default function Entry() {
  const [selectedFramework, setSelectedFramework] = useState("Select");
  const [isOpen, setIsOpen] = useState(false);

  const frameworks = [
    "Research",
    "Project",
    "Publication",
    "Achievement",
    "Other",
  ];

  return (
    <div className="entry-div">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="card-header">
          <h2>NEW ENTRY</h2>
          <p>Add your new work.</p>
        </div>

        <motion.div className="card-content">
          <form>
            {/* Custom Dropdown */}
            <div className="input-group">
              <label>Category</label>
              <div className="dropdown">
                <div
                  className="dropdown-header"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedFramework}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {frameworks.map((framework) => (
                        <li
                          key={framework}
                          onClick={() => {
                            setSelectedFramework(framework);
                            setIsOpen(false);
                          }}
                        >
                          {framework}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* Name Input */}
            <div className="input-group">
              <label htmlFor="name">Heading</label>
              <input id="name" type="text" placeholder="Heading" />
            </div>
            {/* Name Input */}
            <div className="input-group">
              <label htmlFor="name">Description</label>
              <input id="name" type="text" placeholder="Describe your work" />
            </div>
          </form>
        </motion.div>

        <div className="card-footer">
          <motion.button
            className="cancel"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Cancel
          </motion.button>
          <motion.button
            className="deploy"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Deploy
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
