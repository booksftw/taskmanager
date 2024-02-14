import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const params = useParams();
  const id = params.projectId;
  const [selectedProject, setSelectedProject] = useState();

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

  function deleteProject() {}

  return (
    <>
      <div className="proj-detail-wrapper">
        <div className="proj-detail-name">{selectedProject.name}</div>
        <div className="proj-detail-date">{selectedProject.date}</div>
        <div className="proj-detail-description">
          {selectedProject.description}
        </div>

        <button onClick={deleteProject}>Delete</button>
      </div>
    </>
  );
}
