const SingleProjectCard = ({project}) => {
    const title = project.title; 
    const year = project.year;
    const bannerUrl = project.cardBanner;
    const shortdescription = project.shortdescription;
    const tags = project.developmentType;
    const projectLogo = project.client.logo_color;
    const popular = project.popular;
  return (
      <div className="projectCard" >
        <div className="project-card-banner" style={{ backgroundImage: `url(/images/projects/${bannerUrl})`}}>
          { projectLogo === "" ? null :
            <div className="cardProjectLogoContainer">
              <img src={"/images/logos/"+projectLogo} className="cardProjectLogo" />
            </div>
          }
        </div>
        <div className="project-card-content">
          {
            tags.map((tag)=>{
              var tagClass  = tag.replace(" ", "-").toLowerCase();
              
              return <span className={"tag " + tagClass }>{tag}</span>
            } )
          }
          <div className="prize-icon-container">
          {
            project.prizes[0]!=="" ? <img src={"/images/icons/prize-icon.svg"} className="prize-icon" /> : null
          }
          {
            popular ? <img src={"/images/icons/popular-icon.svg"} className="prize-icon" /> : null
          }
          </div>
          <h6>{year}</h6>
          <h5>{title}</h5>
          <p>{shortdescription}</p>
        </div>
      </div>
    );
  };
  
export default SingleProjectCard;