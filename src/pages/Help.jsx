import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Help() {
  return (
    <>
      <div>
        <h1>How to Use the To-Do List App</h1>
        <p>Follow these simple steps to manage your tasks:</p>

        <h2>1. Add a Task</h2>
        <p>Type a task in the input field and click the <strong><AddCircleIcon /></strong> button.</p>

        <h2>2. Mark as Completed</h2>
        <p>Click on a task to apply a <strong>line-through</strong> effect, showing it’s done.</p>

        <h2>3. Delete a Task</h2>
        <p>Click the <strong><DeleteIcon /></strong> button next to a task to remove it.</p>

        <h2>4. Navigation</h2>
        <p>Click <Link className="nav-link" to="/">Home</Link> to return to the main page.</p>
      </div>
    </>
  );
}

export default Help;
