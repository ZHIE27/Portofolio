import React from "react";
import style from "./project.module.css"

const Project = ()=>{

    const projectList = [
        {
            id: 1,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
        {
            id: 2,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
        {
            id: 3,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
        {
            id: 4,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
        {
            id: 5,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
        {
            id: 6,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
        {
            id: 7,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
        {
            id: 8,
            imgUrl: 'img/img.jpg',
            desc: 'Project'
        },
    ]

    return (
        <>
        <div id="projects" className={`${style.container} relative m-auto dark:bg-white bg-slate-100`}>
            <h1 className={`${style.titlePage} p-6 text-slate-700 text-center`}>
                    My Projects
            </h1>
            <div className={`${style.cardsList} cursor-pointer grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-3 w-full`}>
                {projectList.map((item) =>{
                    return (
                        <div key={item.id} className={`${style.card} bg-slate-500`}>
                            <a href="#">
                                <img src={item.imgUrl} alt="#"></img>    
                            </a>
                            <span className={`${style.Title}  text-4xl relative block bg-gray-400 opacity-50 text-center`}>{item.desc}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Project;