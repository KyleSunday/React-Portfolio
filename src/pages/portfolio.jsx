import Project from '../components/project.jsx'; // Importing the Project component
import '../styles/portfolio.css'; // Importing styles specific to the Portfolio component

const projects = [
  {
    title: '',
    image: '/assets/',
    deployedLink: '',
    githubLink: '',
  },
  {
    title: '',
    image: '/assets/',
    deployedLink: '',
    githubLink: '',
  },
  {
    title: '',
    image: '/assets/',
    deployedLink: '',
    githubLink: '',
  },
  {
    title: '',
    image: '/assets/',
    deployedLink: '/',
    githubLink: '',
  },
  {
    title: '',
    image: '/assets/',
    deployedLink: '',
    githubLink: '',
  },
  
  {
    title: '',
    image: 'assets/',
    deployedLink: '',
    githubLink: '',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;