const ProjectModal = ({project}) => {
    const title = project.title; 
    const year = project.year;
    const bannerUrl = project.cardBanner;
    const shortdescription = project.shortdescription;
    const tags = project.developmentType;
    const projectLogo = project.projectLogo;
  return (
      <div className="projectCard" >
        <div className="project-card-banner" style={{ backgroundImage: `url(${bannerUrl})`}}>
          <img src={"/images/projects/"+projectLogo} className="cardProjectLogo"/>
        </div>
        <div className="project-card-content">
          {
            tags.map((tag)=>{
              var tagClass  = tag.replace(" ", "-").toLowerCase();
              
              return <span className={"tag " + tagClass }>{tag}</span>
            } )
          }
          <h6>{year}</h6>
          <h5>{title}</h5>
          <p>{shortdescription}</p>
        </div>
      </div>
    );
  };
  
export default ProjectModal;