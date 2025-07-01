import '../assets/css/Services.css';
const Services = () => {
    return (
      <div className="content-container">
        <section>
          <h1>A wide range of video game skills</h1>
        </section>
        <section>

          <div className='service service-blue-light'>
            <h3 className='service-title videogame-dev'>Video Game Development</h3>
            <div className='service-services-container'>
              <ul>
                <li>Wide Range of Games.</li>
                <li>Creative and Innovative Design.</li>
                <li>Advanced Technology Use.</li>
              </ul>
              <ul>
                <li>Immersive Player Experiences.</li>
                <li>Community Building.</li>
                <li>Cross-Platform Development.</li>
              </ul>
            </div>
          </div>

          
          <div className='service  service-blue'>
            <h3 className='service-title tools'>Blockchain Technology Development</h3>
            <div className='service-services-container'>
              <ul>
                <li>Blockchain Solutions.</li>
                <li>Token Creation and Management.</li>
                <li>Security Focus.</li>
              </ul>
              <ul>
                <li>Smart Contract Development.</li>
                <li>Multi-Platform Capability.</li>
                <li>Innovation in Blockchain Gaming.</li>
              </ul>
            </div>
          </div>

                    
          <div className='service  service-blue'>
            <h3 className='service-title support'>Consulting in Gaming and Token Economy</h3>
            <div className='service-services-container'>
              <ul>
                <li>Expert Game Economy Analysis.</li>
                <li>Token Distribution Strategies.</li>
                <li>Market Trend Insights.</li>
              </ul>
              <ul>
                <li>Game Design Consulting.</li>
                <li>Long-Term Project Viability.</li>
                <li>Customized Consulting Solutions.</li>
              </ul>
            </div>
          </div>

        </section>
        <section id="services-fcs" className="row">
          <div className="col-left-fcs">
            <img alt="see more" src={"/images/icons/blue-border-blue-right-arrow.svg"} className="down-arrow-icon"/>
            <h3>We are partners with FCSE</h3>
            <h3 className="accent-color-font">-</h3>
          </div>
          <div className="col-right-fcs">
            <img alt="hero illustration" src={"/images/services/services.png"} className="heroIllus"/>
          </div>
        </section>
      </div>
    )
  };
  
  export default Services;