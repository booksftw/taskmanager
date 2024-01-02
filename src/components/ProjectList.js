import '../App.css';
import { useContext } from "react";
import { ProjectContext } from "../store/ProjectContext";
import { useNavigate } from "react-router-dom";

export default function ProjectList({selectProject}) {

    const projects = useContext(ProjectContext)
    const navigate = useNavigate();

    function onSelectProject(id) {
        // console.log(id);
        // selectProject(id);
        navigate(`project/${id}`);
    }

    return (
        <div>
            {projects.items.map(project => <div className="project-detail-container" key={project.id}>
                <button className="project-detail-button"
                        onClick={() => onSelectProject(project.id)}>{project.name}</button>
            </div>)}
        </div>
    );
}