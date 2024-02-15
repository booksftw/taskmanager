import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";
import { ProjectContext } from "../store/ProjectContext";

export default function ProjectDetail() {
  const params = useParams();
  const id = params.projectId;
  const [selectedProject, setSelectedProject] = useState({
    name: "",
    description: "",
    date: "",
  });
  // const ProjectContext = useContext(ProjectContext);

  // console.log(ProjectContext, "!_!");

  useEffect(() => {
    async function getProject() {
      const res = await fetch("http://localhost:3200/projects", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      const projects = await res.json();
      console.log(projects);
      const selectedProject = projects.projects.filter((el) => {
        return el.id === id;
      })[0];
      setSelectedProject(selectedProject);
      console.log(selectedProject, "selectedProject");
    }
    getProject();
  }, []);

  async function deleteProject() {
    // const res = await fetch("http://localhost:3200/deleteProject", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify(id), // body data type must match "Content-Type" header
    // });
    // const projects = await res.json();
    // console.log(projects);
  }

  return (
    <>
      <div className="proj-detail-wrapper">
        <div className="proj-detail-name">{selectedProject.name}</div>
        <div className="proj-detail-date">{selectedProject.date}</div>
        <div className="proj-detail-description">
          {selectedProject.description}
        </div>

        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={deleteProject}
        >
          Delete
        </button>
      </div>
    </>
  );
}
