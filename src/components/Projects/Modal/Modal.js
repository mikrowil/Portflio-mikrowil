import React from "react";
import './Modal.css'

export default function Modal({project, toggleModal}){
    return(
        <div className={'modal'}>
            <div className={"modal-content"}>
                <div
                    className={"modal-btn-close"}
                    onClick={()=>toggleModal()}
                >
                    X
                </div>
                <div className={"modal_title"}>
                    {project.title}
                </div>
                <hr/>
                <div className={"modal_description"}>
                    {project.description}
                </div>
                <hr/>
                <div className={"modal_technology_container"}>
                    <div className={"modal-technologies-title"}>Technologies</div>
                    {project.technologies.map((tech, i)=>(
                        <div className={"uk-heading-bullet"}>{tech}</div>
                    ))}
                </div>
                <hr/>
                <div className={"modal-links"}>
                    <div className={"modal-github"}>
                        <a href={project.github}>Github</a>
                    </div>
                    <div className={"modal-live"}>
                        {project.live?
                            <a href={project.live}>Live</a>:
                        null}
                    </div>
                </div>
            </div>
        </div>
    )
}
