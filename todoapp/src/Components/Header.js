import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return <header>
      <Link to="/">Form</Link>
      <Link to="/life">Life Cycle Events</Link>
      <Link to="/list">List</Link>
  </header>;
}
