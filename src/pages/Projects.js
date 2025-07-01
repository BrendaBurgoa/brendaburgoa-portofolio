import SingleProjectCard from "../components/SingleProjectCard";
import Data from "../json/data.json";
import DataExternal from "../json/data-externalprojects.json";
import { useState } from "react";
import '../assets/css/Projects.css';
import Modal from "../components/Modal"

const Projects = () => {
    const originalData = Data;
    const [filteredData, setFilteredData ] = useState(originalData);
    const [filters, setFilters ] = useState([]);
    const setNewFilter = (newfilter) => {
        if (filters.includes(newfilter)===false) {
            setFilters(oldFilters => [...oldFilters,newfilter] );
        }
        else {
            setFilters(oldFilters => [...oldFilters,newfilter] );
                const name = newfilter;
                setFilters(filters.filter(item => item !== name));
                
        }
    }

    const originalData2 = DataExternal;
    const [filteredData2, setFilteredData2 ] = useState(originalData2);
    const [filters2, setFilters2 ] = useState([]);
    const setNewFilter2 = (newfilter) => {
        if (filters2.includes(newfilter)===false) {
            setFilters2(oldFilters => [...oldFilters,newfilter] );
        }
        else {
            setFilters(oldFilters => [...oldFilters,newfilter] );
                const name = newfilter;
                setFilters2(filters2.filter(item => item !== name));
                
        }
    }




    const [modal, setModal] = useState({ show: false, data: null });


    const handleClose = () => {
        setModal({ show: false, data: null });
      };
    

    


    return (
        <div className="content-container">
            {modal.show && modal.data && <Modal closeModal={handleClose} data={modal.data} />}
            <section className={modal.show ? " no-scroll" : ""}>
                <h6 className="intro">HI! I'm Brenda Burgoa. Im a Multimedia Designer and these are the projects that i have been worked on ❤️.</h6>
            
                <div  className="projectCardsContainer">
                {
                    filteredData.map( project => {
                        if (filters.length === 0 || filters.includes(project.developmentType[0])) {
                            return(
                                <div onClick={()=>{setModal({show:true, data:project})}} className="card-container">
                                    <SingleProjectCard 
                                        key={project.id}
                                        project={project}
                                    />
                                </div>
                             )
                             
                        }
                    })
                }
                </div>
            </section>


            <section className={modal.show ? "no-scroll" : ""}> 
                <div className="projectCardsContainer">
                {
                    filteredData2.map( project => {
                        if (filters.length === 0 || filters2.includes(project.developmentType[0])) {
                            return(
                                <div onClick={()=>{setModal({show:true, data:project})}}  className="card-container">
                                    <SingleProjectCard 
                                        key={project.id}
                                        project={project}
                                    />
                             </div>)
                        }
                    })
                }
                </div>
            </section>

            
                

        </div>
    )
  };
  
  export default Projects;