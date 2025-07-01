import SingleTeamCard from "../components/SingleTeamCard";
import TeamData from "../json/data-team.json";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { useState } from "react";
import { Pagination, Perspective } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/react-flicking/dist/flicking.css";
import '../assets/css/Home.css';

const Home = () => {
  
const plugins = [new Pagination({ type: 'bullet' }),new Perspective({ rotate: 0.5 })];
const [msg, setMsg] = useState('');
const Submit = (e) => {
  setMsg("processing email ...")
  const form = document.getElementById("homeContactForm");
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwqUIDgPFRo0beAdvorK5g3PfPvoC69J9wSSTzVr6MReuUu2o3Lxc3AUdfnX2kGwBOvjQ/exec';
    e.preventDefault()
    let data = new FormData(form)
    fetch(scriptURL, { method: "POST", body: data})
      .then(res=>res.text())
      .then(data => setMsg(data))
  document.getElementById('name').value="";
  document.getElementById('msgform').value="";
  document.getElementById('email').value="";

}

    return (
      <div className="content-container">
        
        <section id="home-hero" className="row">
          <div className="col-left-hero">
            <h3>Passion, Creativity, </h3>
            <h3 className="accent-color-font">& On-time Delivery</h3>
            <h3 className="accent-color-font">-</h3>
            <p>We are a full-time team of Game Designers, Developers, and Artists who can transform your ideas into a playful experience. Let's connect.</p>
          </div>
          <div className="col-right-hero">
            <img alt="hero illustration" src={"/images/home/home-hero.png"} className="heroIllus"/>
          </div>
        </section>

        <section className="backer-logos">
          <div className="backer-logos-container">
            <img alt="cartoon network" src={"/images/logos/CN.png"} className="backer-logo"/>
            <img alt="comedy central" src={"/images/logos/comedyCentral.png"} className="backer-logo"/>
            <img alt="disney" src={"/images/logos/disney.png"} className="backer-logo"/>          
            <img alt="lego" src={"/images/logos/lego.png"} className="backer-logo"/>
            <img alt="mattel" src={"/images/logos/mattel.png"} className="backer-logo"/>
            <img alt="nick" src={"/images/logos/nickelodeon.png"} className="logo-chorizo"/>
            <img alt="rolling stones" src={"/images/logos/rollingStone.png"} className="logo-chorizo"/>
            <img alt="vh1" src={"/images/logos/VH1.png"} className="backer-logo"/>
            <img alt="southpark" src={"/images/logos/southpark.png"} className="backer-logo"/>
            <img alt="control" src={"/images/logos/control.png"} className="backer-logo"/>
            <img alt="shell" src={"/images/logos/shell.png"} className="backer-logo"/>
          </div>
          <a href="#project-section"> <img alt="see more" src={"/images/icons/blue-border-blue-down-arrow.svg"} className="down-arrow-icon centered-arrow"/></a>

        </section>

        <section id="project-section">
          <h4>Dedication and Creativity</h4>
          <h4 className="accent-color-font">at the core</h4>
          <a href="/#/projects" className="no-underline">
            <div className="projects-banner-button">
              <img alt="see more" src={"/images/icons/white-bg-blue-arrow.svg"} className="arrow-icon"/>
              <h5>See our projects</h5>
            </div>
          </a>
          <div className="project-categories-home-container">
            <div className="single-project-categories-home col_1-3 ">
              <img alt="see more" src={"/images/icons/sports.svg"} className="category-icon"/>
              <h6>Sports</h6>
              <p>Can you picture unique characters clashing in football across gravity-defying galactic stadiums? That's <span>Fulbo Galaxy</span>, a central star in our <span>Galaxy Sports Metaverse.</span></p>
            </div>
            <div className="single-project-categories-home col_1-3 ">
              <img alt="see more" src={"/images/icons/education.svg"} className="category-icon"/>
              <h6>Education</h6>
              <p>Our games promote learning within a playful and fun environment. We craft interactive adventures where every level conquered is knowledge gained.</p>
            </div>
            <div className="single-project-categories-home col_1-3">
              <img alt="see more" src={"/images/icons/crypto.svg"} className="category-icon"/>
              <h6>Crypto</h6>
              <p>We merge our passion for gaming with cutting-edge blockchain technology to become co-creators in the new wave of Web 3.0 gaming landscape.</p>
            </div>
          </div>
        </section>

        <section id="meta-crypto-game">
          <div className="row">
            <div className="col-left">
              <img alt="see more" src={"/images/icons/blue-border-blue-right-arrow.svg"} className="down-arrow-icon"/>
              <h3> We are working on the first metaverse <b className="orange-font">crypto game</b></h3>
              <a className="orange-button" href="/#/galaxy-metaverse">READ MORE</a>
            </div>
            <div className="col-right">
              <img alt="see more" src={"/images/home/crypto.png"} className="crypto phone"/>
            </div>
          </div>
        </section>
    
        <section id="meet-our-team">
          <img alt="see more" src={"/images/icons/blue-border-blue-down-arrow.svg"} className="down-arrow-icon centered-arrow"/>
          <h3>Meet our team</h3>
          
          <div className="team-container">
            <Flicking
              plugins={plugins}
              circular={true}
              onMoveEnd={e => {
                console.log(e);
              }}>
                {
                  TeamData.map((member)=>{
                    return <div className="panel"><SingleTeamCard key={member.id} member={member} /></div>
                  } )
                }
              <ViewportSlot>
                <div className="flicking-pagination"></div>
              </ViewportSlot>
            </Flicking>
          </div>
        </section>

        <section id="contact">
          <img alt="see more" src={"/images/icons/blue-border-blue-down-arrow.svg"} className="down-arrow-icon centered-arrow"/>

          <h3>We always  deliver on time</h3>
          <h3 className="accent-color-font ">See for yourself.</h3>
          
          {msg !== '' ? <h4 className="error-msg">{msg}</h4> : null}
          
          <form id="homeContactForm" onSubmit={(e)=>{Submit(e)}}>
            <div className="form-inputs">
                <input id="name" type="text" name="name" placeholder="Name:" />
                <input id="email" type="email" name="email" placeholder="Email:" />
            </div>
            <textarea id="msgform" name="message" placeholder="Tell us your needs:" />
            <div className="submit-container">
              <input type="submit" value="SEND" className="orange-button" />
            </div>
          </form>
        </section>
      </div>
    )

  };
  
  export default Home;