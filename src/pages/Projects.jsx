import ProjectCard from '../components/ProjectCard';
import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: "Urban Velocity",
        category: "FPV Racing / Commercial",
        description: "High-speed chase sequences filmed for a leading automotive brand in downtown Shanghai.",
        image: img1
    },
    {
        id: 2,
        title: "Alpine Peaks",
        category: "Documentary / Nature",
        description: "Award-winning documentary footage capturing the raw beauty of the Swiss Alps at dawn.",
        image: img2
    },
    {
        id: 3,
        title: "Cyber City 2077",
        category: "VFX / Concept",
        description: "Aerial plates and drone scanning provided for a major sci-fi feature film production.",
        image: img3
    }
];

function Projects() {
    return (
        <div className="page-content container">
            <h1 className="page-title">Featured Projects</h1>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
