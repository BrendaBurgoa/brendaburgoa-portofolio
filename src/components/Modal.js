
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";

function Modal({ closeModal, data }) {
  
    const plugins = [new Arrow()];

    return (
      <div className="modal-container" >
        <div onClick={()=> closeModal()} id="modal-bg"></div>
        <div className="modal">
          <button className="btn-close" onClick={() => closeModal()}>
            <img alt="close" src={"/images/icons/close.svg"} className=""/>
          </button>
          <div className="modal_body">
            <section className="modal-header" style={{ backgroundImage: `url(/images/projects/${data.modalBanner})`}}>              
            </section>
            <section className="modal-content">
                <div className="modal-2-col-container">
                    <div className="col-left">
                        {
                            data.developmentType.map((tag)=>{
                            var tagClass  = tag.replace(" ", "-").toLowerCase();
                            
                            return <span className={"tag " + tagClass }>{tag}</span>
                            } )
                        }
                        <h6 className="year">{data.year}</h6>
                        <h5>
                            {data.title}
                        </h5>
                        <p>{data.description}</p>
                        {data.client.name == "" ? null :
                          <h6></h6>
                        }
                        <div className="client-info">
                          {
                            data.client.logo==""? null : <img alt={data.client.name} src={"/images/logos/"+data.client.logo} className="client-logo"/>
                          }
                          
                          {
                            data.webLink == "" ? null : 
                            
                            <a target="_blank" href={data.webLink} className="memberSocial">
                              <div className="memberSocialIcon">
                                <img alt="member logo" src={"/images/icons/Sitio-Web.svg"} className="memberPic"/> 
                              </div>
                              <div className="memberSocialName">
                                <span>Website</span>
                              </div>
                            </a> 
                            
                          }
                        </div>
                    </div>
                    <div className="col-right">
                      <div>
                      {data.videoLink?              
                        <iframe className="video-bg" src={data.videoLink} width="100" height="80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                        : null }

                          {data.prizes[0]!=="" ? 
                              data.prizes.map( prize => { return (
                              <div className="prize">
                                  <p>{prize}</p>
                              </div> 
                              ) } )
                          : null
                          }
                      </div>
                      <div className="pic-slider-container">
                        <Flicking
                          plugins={plugins}
                          circular={true}
                          onMoveEnd={e => {
                            console.log(e);
                          }}>
                            {
                              data.carruselImgs.map((imagen) => {
                                return (
                                  <img alt={imagen.alt} src={"/images/projects/"+imagen.url} className="caroursel-img"/>
                                )
                              } )
                            }
                            <ViewportSlot>
                              <span className="flicking-arrow-prev"></span>
                              <span className="flicking-arrow-next"></span>
                            </ViewportSlot>
                        </Flicking>
                      </div>
                      <div className="news">
                          {
                            data.news[0].title == "" ? null : 
                            data.news.map((newSingle) => {
                              return (
                                <div className="new-single">
                                  <div className="newsImgContainer" style={{ backgroundImage: `url(/images/projects/${newSingle.img})`}}> </div>
                                  <a target="_blank" href={newSingle.link} className="title">
                                    <p>{newSingle.title}</p>
                                  </a>
                                </div>
                              )
                            })
                          }
                      </div>
                    </div>
                </div>
                <div>
                  <h6>Areas of development:</h6>
                  <ul className="tagNav">
                    {
                        data.areas.map((tag)=>{
                        var tagClass  = tag.replace(" ", "-").toLowerCase();
                        
                        return <li className={"tag " + tagClass }>{tag}</li>
                        } )
                    }
                  </ul>
                </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  export default Modal;