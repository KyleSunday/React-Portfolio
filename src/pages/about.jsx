import "../styles/about.css";

const About = () => (
  <section>
    <h1>About Me</h1>
    <img
      src="../../../Public/assets/me.jpg"
      alt="Kyle Sunday"
      id="author-photo"
    />
    <div id="aboutme-text">
      <p>
        
        <br /><br />
        
      </p>
      </div>
      <div id="relevant-skills">
      <h2>Relevant Skills</h2>
      <h3>HTML, CSS, JavaScript</h3>
    
      <br />
      <h3>React, Node.js</h3>
      
      <br />
      <h3>Responsive Design</h3>
      <br />
      <h3>Version Control (Git)</h3>
    </div>
    <div id="contact-details">
      <strong>Email:</strong> kyle.sunday@yahoo.com
      <br />
      <a href="https://github.com/KyleSunday" id="github-link">
        <strong>Github</strong>
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/kyle-sunday-4b1bab84/"
        id="linkedin-link"
      >
        <strong>LinkedIn</strong>
      </a>
    </div>
  </section>
);

export default About;