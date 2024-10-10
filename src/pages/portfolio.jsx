import Project from '../components/project.jsx'; // Importing the Project component
import '../styles/portfolio.css'; // Importing styles specific to the Portfolio component

const projects = [
  {
    title: 'Prework Study Guide',
    image: '/assets/',
    deployedLink: 'https://kylesunday.github.io/prework-study-guide/',
    githubLink: 'https://github.com/KyleSunday/prework-study-guide.git',
  },
  {
    title: 'Horisen Challenge',
    image: '/assets/',
    deployedLink: 'https://kylesunday.github.io/Horisen-Challenge/',
    githubLink: 'https://github.com/KyleSunday/Horisen-Challenge.git',
  },
  {
    title: 'Payroll-R-US',
    image: '/assets/',
    deployedLink: 'https://kylesunday.github.io/Payroll-R-US/',
    githubLink: 'https://github.com/KyleSunday/Payroll-R-US.git',
  },
  {
    title: 'My first Portfolio',
    image: '/assets/',
    deployedLink: 'https://kylesunday.github.io/Portfolio-Time/',
    githubLink: 'https://github.com/KyleSunday/Portfolio-Time.git',
  },
  
  {
    title: 'Atog Blog',
    image: 'assets/',
    deployedLink: 'https://kylesunday.github.io/Atog-Blog/',
    githubLink: 'https://github.com/KyleSunday/Atog-Blog.git',
  },
  {
    title: 'Task Board',
    image: '/assets/',
    deployedLink: 'https://kylesunday.github.io/Task-Board/',
    githubLink: 'https://github.com/KyleSunday/Task-Board.git',
  },
  {
    title: 'Wonderful Weather',
    image: '/assets/',
    deployedLink: 'https://kylesunday.github.io/Wonderful-Weather/',
    githubLink: 'https://github.com/KyleSunday/Wonderful-Weather.git',
  },
  {
    title: 'Note Taker',
    image: '/assets/',
    deployedLink: 'https://note-taker-6el9.onrender.com',
    githubLink: 'https://github.com/KyleSunday/Note-Taker.git',
  },
  {
    title: 'SVG Generator',
    image: '/assets/',
    githubLink: 'https://github.com/KyleSunday/SVG.git',
  },
  {
    title: 'Text Editor',
    image: '/assets/',
    deployedLink: 'https://text-editor-mx83.onrender.com',
    githubLink: 'https://github.com/KyleSunday/Text-Editor.git',
  },
  {
    title: 'Employee Tracker',
    image: '/assets/',
    githubLink: 'https://github.com/KyleSunday/Employee-Tracker.git',
  },
  {
    title: 'Ecomerce Back End',
    image: '/assets/',
    githubLink: 'https://github.com/KyleSunday/E-commerce-Back-End.git',
  },
  {
    title: 'Social Network Api',
    image: '/assets/',
    githubLink: 'https://github.com/KyleSunday/Social-Network-API.git',
  },
  {
    title: 'Read ME Generator',
    image: '/assets/',
    githubLink: 'https://github.com/KyleSunday/Read-Me-Generator.git',
  },
  {
    title: 'Goat Battleship',
    image: '/assets/',
    deployedLink: 'https://massogon.github.io/goat-battleship/',
    githubLink: 'https://github.com/Massogon/goat-battleship.git',
  },
  {
    title: 'GIF Rater',
    image: '/assets/',
    deployedLink: 'https://gif-rater-b51u.onrender.com',
    githubLink: 'https://github.com/Massogon/gif-rater.git',
  },
  {
    title: 'Event Ticketing App',
    image: '/assets/',
    deployedLink: 'https://event-ticketing-app.onrender.com',
    githubLink: 'https://github.com/danielleboe/event-ticketing-app.git',
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