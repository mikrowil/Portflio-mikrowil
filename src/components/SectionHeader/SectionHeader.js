import React from "react";
import './SectionHeader.css'

export default function SectionHeader({title}){
    return(
        <div className={"section_title uk-heading-bullet"}
             uk-scrollspy="cls: uk-animation-slide-left; repeat: false"
        >
            {title}
        </div>
    )
}
