import React from "react";
import './Title.css'

export default function Title() {
    return (<div className={"title"} >
            <div className={"title_text"}>
                <div className={"title_first_name"}>
                    Michael
                </div>
                <div className={"title_last_name"}>
                    Wilson
                </div>
            </div>
            <div className={"title_sub_text"}>
                <div style={{color:"#acacd5"}}>
                    Full-Stack
                </div>
                <div style={{color:"#d836cb"}}>
                    Engineer
                </div>
            </div>
        </div>
    )
}
