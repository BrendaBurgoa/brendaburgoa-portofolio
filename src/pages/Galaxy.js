import SingleGameCard from "../components/SingleGameCard";
import '../assets/css/Galaxy.css';

const Galaxy = () => {
  return(
    <div className="content-container">
            
      <section id="home-hero" className="row">
        <div className="col-left-hero">
          <h3>Welcome to our Galaxy Sports Metaverse</h3>
          <p>We're reinventing games through the power of blockchain. Our Sports Universe series offers a dynamic range of games where players can experience their favorite sports in immersive and innovative ways.</p>
        </div>
        <div className="col-right-hero">
          <img alt="hero illustration" src={"/images/galaxymetaverse/money.png"} className="heroIllus"/>
        </div>
      </section>

      <section className="row" id="real-meta">
        <div className="col-right-hero">
          <img alt="hero illustration" src={"/images/galaxymetaverse/realMetaverse.svg"} className="heroIllus"/>
        </div>
        <div className="col-left-hero">
          <h3>The real metaverse experience</h3>
          <h3 className="accent-color-font">-</h3>
          <p>Galaxy Metaverse is the result of combining sports, exotic characters and polished casual gameplay. Play the Galaxy Metaverse games for free while you earn experience and compete against a worldwide audience.</p>
        </div>
      </section>
      <section >
        <a href="#project-section"> <img alt="see more" src={"/images/icons/blue-border-blue-down-arrow.svg"} className="down-arrow-icon centered-arrow"/></a>
      </section>
      
      <section id="our-games">
        <h3 className="title">Our Games</h3>
        <div className="game-card-container">
          <SingleGameCard project={{"title":"Fulbo", "cardBanner":"fulbo_cover.png", "comingSoon":false}} key={1} />
          <SingleGameCard project={{"title":"Golf", "cardBanner":"golfGalaxy_cover.png", "comingSoon":false}} key={1} />
        </div>
        <div className="game-card-container">
          <SingleGameCard project={{"title":"Hoops", "cardBanner":"hoopsgalaxy.png", "comingSoon":true}} key={1} />
          <SingleGameCard project={{"title":"Cricket", "cardBanner":"cricket_cover.png", "comingSoon":true}} key={1} />
          <SingleGameCard project={{"title":"Rugby", "cardBanner":"rugby_cover.png", "comingSoon":true}} key={1} />
        </div>
      </section>

      <section id="one-coin">
        <div className="row">
          <div className="col-left">
            <img alt="see more" src={"/images/icons/blue-border-blue-right-arrow.svg"} className="down-arrow-icon"/>
            <h3>One token to rule them all</h3>
            <h3 className="accent-color-font">-</h3>
            <p>Your tokens are not confined to a single game. They have access to the whole Galaxy Metaverse.</p>
          </div>
          <div className="col-right">
            <img alt="see more" src={"/images/galaxymetaverse/coin.svg"} className="crypto phone"/>
          </div>
        </div>
      </section>

      <section >
        <a href="#project-section"> <img alt="see more" src={"/images/icons/blue-border-blue-down-arrow.svg"} className="down-arrow-icon centered-arrow"/></a>
      </section>

      <section id="benefits">
        <h3>Benefits of a Metaverse Game</h3>
        <div className="benefits-container">
          <ul>
            <li>Trade NFT Players.</li>
            <li>Trade Stadium Shares.</li>
            <li>Buy consumable boosters.</li>
            <li>Get exclusive customization items for your club.</li>
            <li>Rent Characters.</li>
          </ul>
          <ul>
            <li>Boost stats/Buy equipment.</li>
            <li>Enter Tournaments.</li>
            <li>Pay player contracts.</li>
            <li>Auctions for special players.</li>
          </ul>
        </div>
      </section>

      <section id="benefit-cards">
          <div className="benefit-card">
            <img alt="see more" src={"/images/galaxymetaverse/crossgameCollectibles.svg"} className="benefit-img"/>
            <h6>Crossgame collectibles</h6>
            <p>Our players adapt so take them anywhere.</p>
          </div>
          
          <div className="benefit-card">
            <img alt="see more" src={"/images/galaxymetaverse/crossgameCoin.svg"} className="benefit-img"/>
            <h6>Crossgame Token</h6>
            <p>Earn and purchase with one universal token.</p>
          </div>
          
          <div className="benefit-card">
            <img alt="see more" src={"/images/galaxymetaverse/split.svg"} className="benefit-img"/>
            <h6>Split Progression of Stats and Levels</h6>
            <p>Each game has its own career system.</p>
          </div>
          
          <div className="benefit-card">
            <img alt="see more" src={"/images/galaxymetaverse/prestige.svg"} className="benefit-img"/>
            <h6>Prestige & Status</h6>
            <p>Face off against people around the world in the quest for glory.</p>
          </div>
      </section>
    </div>
  )};
  
export default Galaxy;