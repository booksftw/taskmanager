import React from "react";
import { Outlet } from "react-router-dom";

export default function IndexPage() {
  let [projects, setProjects] = useState([{ name: "test" }]);

  useEffect(() => {
    async function getProjects() {
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
      projects = await res.json();
      setProjects(projects.projects);
      console.log(projects);
    }
    getProjects();
    //Runs only on the first render
  }, []);

  const listItems = projects.map((d) => (
    <li key={d.name}>
      <a href={d.id}>{d.name}</a>
    </li>
  ));

  function deleteProject(id) {
    projects.filter((el) => {
      return el.id !== id;
    });
  }

  const ProjectContextValue = {
    projects: projects,
    deleteProject: deleteProject,
  };

  const addProject = () => {
    router.navigate("/create");
  };
  return (
    <>
      <h1>Howdy Indexpage</h1>
      <ProjectContext.Provider value={ProjectContextValue}>
        <div id="wrapper">
          <div id="sidebar">
            <button
              onClick={addProject}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Add Project
            </button>
            <ul>{listItems}</ul>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </ProjectContext.Provider>
    </>
  );
}
