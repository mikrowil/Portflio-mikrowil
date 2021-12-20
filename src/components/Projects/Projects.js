import React, {useEffect, useState} from "react";
import './Projects.css'
import Project from "./Project/Project";
import portfolioApi from "../../api/portfolioApi";
import Modal from "./Modal/Modal";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState({})

    const getProjects = async () => {
        const res = await portfolioApi.get('/projects')
        setProjects(res.data)
    }

    useEffect(() => {
        getProjects()
    }, [])

    const toggleModal = (project={}) => {
        setSelectedProject(project)
        setModalOpen(!modalOpen)
    }

    return (
        <div className={"projects"}>
            <SectionHeader title={"projects"}/>
            <hr/>
            <div className={"projects_container"} style={{backgroundImage:''}}
                 uk-scrollspy="cls: uk-animation-fade; target: .project; delay: 200; repeat: false">
                {
                    projects.map((project, index) => (

                        <Project key={index} project={project} showModal={toggleModal}/>

                    ))
                }
                {
                    modalOpen ? <Modal toggleModal={toggleModal} project={selectedProject}/> :
                        null
                }

            </div>
            <hr/>
        </div>
    )
}
