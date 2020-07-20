import React from "react";
import "./style.css";



export function EmployeeList({ children }) {
  return (
    <div className="EmployeeList-overflow-container">
      <ul className="EmployeeList-group">{children}</ul>
    </div>
  );
}

export function EmployeeListItem({ children }) {
  return <li className="EmployeeListItem-group-item">{children}</li>;
}

export default EmployeeList