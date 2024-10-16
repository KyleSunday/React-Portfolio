const Project = ({ title, image, deployedLink, githubLink }) => {
  let hasLink = false
  const noImage = "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg";

function noDeployedLink() {
  if(deployedLink === undefined){
    return;
  }

  // set hasLink if true
hasLink = true;
}
  // call noDeployedLink
  noDeployedLink();
    return (
      <div className="project">
        <div className="project-card">
        { image !== undefined ? <img src={image} alt={title} className="project-image" /> :
        <img src={noImage} alt="No Image Available" className="project-image" width="350"  />
        }
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          { hasLink && 
            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
              View Deployed Application
            </a>
          }
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View GitHub Repo
          </a>
        </div>
        </div>
      </div>
    );
  };
  
  export default Project;