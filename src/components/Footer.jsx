import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <small>&copy; {currentYear} To-Do List</small>
      <p>By Edun Damilare</p>
    </footer>
  );
}

export default Footer;
