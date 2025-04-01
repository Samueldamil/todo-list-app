import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Help from "./pages/Help";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  //Load items from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
   
  //Saves items to localStorage 
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("todoItems", JSON.stringify(items));
    }
  }, [items]);

  function updateInput(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    if (inputText.trim() === "")
      return;
    const newTask = {
      text: inputText,
      completed: false,
      timestamp: new Date().toLocaleString(),
    };
    setItems((prevItems) => {
      return [newTask, ...prevItems];
    });
    setInputText("");
  }
  
  function toggleComplete(index) {
    setItems(items.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    ));
  }

  function deleteItem(index) {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("todoItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  }

  return (
    <>
      <Router>
        <div className="container">
          <nav>
	    <Link className="nav-link" to="/">Home</Link>
	    <Link className="nav-link" to="/help">Help</Link>
	  </nav>
	
	  <Routes>
	    <Route path="/" element={
	      <>
                <div className="heading">
                  <h1>TO-Do List</h1>
                  <p>Always Stay on Track</p>
                </div>
                <div className="form">
	          <input onChange={updateInput} type="text" placeholder="Type here" value={inputText} />
	          <IconButton className="add" onClick={addItem}>
	            <AddCircleIcon />
	          </IconButton>
                </div>
                <div>
                  <ul>
	            {items.map((item, index) => (
	              <li key={index} onClick={() => toggleComplete(index)} style={{textDecoration: item.completed ? "line-through" : "none", cursor: "pointer"}}>
	                {item.text}
			<span className="time">{item.timestamp}</span>
	                <IconButton className="delete" onClick={(e) =>{ 
		          e.stopPropagation();
         	          deleteItem(index); }}>
			    <DeleteIcon />
	                </IconButton>
	               </li>
		    ))}
	          </ul>
                </div>
	      </>
            } />
	    <Route path="/help" element={<Help />} />
	  </Routes>
        </div>
      </Router> 
      <Footer />
    </>
  );
}

export default App;
