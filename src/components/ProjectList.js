import React from "react";
import "./ProjectList.css";
import noProjectImg from "../assets/no-projects.png";

export default function ProjectList() {
  return (
    <>
      <h1>howdy project list</h1>
      <img id="no-project-img" src={noProjectImg} alt="" />
      {/* <div id="wrapper">
        <div id="sidebar">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Project
          </button>
          <ul>
            <li>Project</li>
            <li>Project</li>
            <li>Project</li>
            <li>Project</li>
          </ul>
        </div>
        <div>
          <img id="no-project-img" src={noProjectImg} alt="" />
        </div>
      </div> */}
    </>
  );
}
