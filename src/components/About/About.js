import React from "react";
import './About.css'
import SectionHeader from "../SectionHeader/SectionHeader";

export default function About() {
    return (
        <div className={"about"}>
            <SectionHeader title={"about"}/>
            <div className={""}>
                <p
                    className={"uk-text-right"}
                    uk-scrollspy="cls: uk-animation-slide-right;delay:500 ;repeat: false">
                    <em>A fiery passion for programming.</em>
                </p>
                <hr/>
                <div className={"about-main-text"}>
                    <p>
                        While in high school, coding was something I started too follow as a hobby.
                        That hobby eventually turned into college, where A spark was ignited.
                    </p>

                    <p>
                        Since then,
                        I have been pushing myself as a programmer, to learn as much as I can while building my own
                        applications
                        and personal projects.
                    </p>

                    <p>
                        Programming to me is the perfect mix of logic and creative thinking, that allows me to always think
                        outside the box.
                    </p>
                </div>


            </div>
        </div>
    )
}
