import React from "react";
import "./notes.css";
// Don't import Navbar or Footer initially to isolate the issue

function Notes() {
  return (
    <div className="notes-test">
      <h1>CSIT Notes Page</h1>
      <p>This is a test to see if the Notes page is rendering properly.</p>
    </div>
  );
}

export default Notes;