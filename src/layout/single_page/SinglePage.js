import React from "react";
import './SinglePage.css'
import Title from "../../components/Title/Title";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import FormOMine from '../../components/FormOMine/FormOMine'
import backImg from '../../images/back.jpg'

export default function SinglePage() {

    return <div className={"single-page"}>
        <Title/>
        <Projects/>
        <About/>
        <FormOMine/>
    </div>
}
