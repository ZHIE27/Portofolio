import React from "react";
import style from "./about.module.css"

const About = ()=> {
    return (
        <>
        <div id="about" className={`${style.container} relative m-auto text-center p-6 bg-slate-100   rounded-lg`}>
            <div className={`${style.wrapping} m-auto py-6 w-full h-full`}>
                <h1 className={`${style.title} text-slate-700`}>About Me</h1>
                <div className={`${style.wrap} py-6  flex m-auto flex-col-reverse md:flex-row md:justify-evenly items-center`}>
                    <div className={`${style.desc} p-6 rounded-xl`}>
                        <p>I am a Junior Front-End Web Developer who has good skills and understanding in developing user interfaces for web applications. By mastering the basics of front-end technologies such as HTML, CSS, and JavaScript, I am able to build responsive, visually attractive, and functional web pages.</p>
                    </div>
                    <div className={`${style.img}`}>
                        <img src="img/profile/pp.jpg"></img>
                    </div>
                </div>
            </div>
        </div>

        </>
    )

}

export default About;