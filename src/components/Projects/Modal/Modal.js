import React from "react";
import './Modal.css'

export default function Modal({project}){
    return(
        <div className={'modal'}>
            <div className={"modal-content"}>

                <div className={"modal_title"}>
                    {project.title}
                </div>
                <div className={"modal_description"}>
                    {project.description}
                </div>
                <div className={"modal_technology_container"}>
                    {project.technologies.map((tech, i)=>(
                        <div className={"uk-heading-bullet"}>{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
