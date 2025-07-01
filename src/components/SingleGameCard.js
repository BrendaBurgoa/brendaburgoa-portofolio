const SingleGameCard = ({project}) => {
    const title = project.title; 
    const bannerUrl = project.cardBanner;
    const comingSoon = project.comingSoon
  return (
      <div className="projectCard gameCard" >
        <div className="project-card-banner" style={{ backgroundImage: `url(/images/projects/${bannerUrl})`}}>
        </div>
        <div className="project-card-content">
          {comingSoon ? 
            <img alt="see more" src={"/images/galaxymetaverse/progress.svg"} className="down-arrow-icon"/>
          :null }
          <h5>{title}</h5>
          <h5 className="accent-color-font">Galaxy</h5>
        </div>
      </div>
    );
  };
  
export default SingleGameCard;