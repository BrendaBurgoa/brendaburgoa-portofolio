const SingleTeamCard = ({member}) => {
    const name = member.name; 
    const departments = member.departments;
    const position = member.position;
    const headShot = member.headShot
    const bio = member.bio;
    const socials = member.socials;
  return (
      <div className="teamCard">
        <div className="topPartMember">
        {
            departments.map((tag)=>{
              var bg  = tag.replace(" ", "-");
              return (
                  <span className = { 'tag '+ bg}                  
                  >
                      {tag}
                  </span>
                  )
              } )
            }
            <div className="team-details">
              <div className="memberName" >

                <h5>{name}</h5>
                <h6>{position}</h6>
              </div>
              <div className="memberPicContainer">
                <img alt="member logo" src={"/images/team/"+headShot} className="memberPic"/>
              </div>
            </div>
        </div>
        <div className="team-content">
          <p>{bio}</p>
          <div className="memberSocials">

          {
            socials.length > 0 ? 
              socials.map((social)=>{
                var icon  = social.social.replace(" ", "-");
                return (
                    <a href={social.url} className="memberSocial">
                      <div className="memberSocialIcon">
                        <img alt="member logo" src={"/images/icons/"+icon+".svg"} className="memberPic"/> 
                      </div>
                      <div className="memberSocialName">
                        <span>{social.social}</span>
                      </div>
                    </a>
                )
              })
            : ""
          }
          </div>
        </div>
      </div>
    );
  };
  
export default SingleTeamCard;