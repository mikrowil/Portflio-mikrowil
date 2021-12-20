import React from "react";
import './Project.css'

export default function Project({project, showModal}){

    return<div
        onClick={() => showModal(project)}
        className={'project'}
        uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false"
        style={{backgroundImage:`url(${project.selectedFile})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
        <div className={'overlay'}>
            <div id={"text"}>{project.title}</div>
        </div>


    </div>
}
