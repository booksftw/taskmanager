import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import CreateProject from "./components/CreateProject";
import noProjectImg from "./assets/no-projects.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectList />,
  },
  {
    path: "/detail",
    element: <ProjectDetail />,
  },
  {
    path: "/create",
    element: <CreateProject />,
  },
]);

function App() {
  const addProject = () => {
    // history.push("/foo");
    router.navigate("/create");
  };
  return (
    <>
      <div id="wrapper">
        <div id="sidebar">
          <button
            onClick={addProject}
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
          {/* <img id="no-project-img" src={noProjectImg} alt="" /> */}
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
