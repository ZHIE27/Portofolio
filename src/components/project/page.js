'use client'

import React from "react";
import style from "./project.module.css"
import Image from "next/image";
import Link from "next/link";

const Project = () => {
    const projectList = [
        {
            id: 1,
            imgUrl: '/img/img.jpg',
            desc: 'Tetris',
            link: 'https://tetris-8f5xsspbu-ejis-projects.vercel.app'
        },
        {
            id: 2,
            imgUrl: '/img/img.jpg',
            desc: 'Dashboard',
            link: 'https://dashboard-unfinished.vercel.app/'
        },
        {
            id: 3,
            imgUrl: '/img/img.jpg',
            desc: 'Chart',
            link: 'https://chart-dashboard-penjualan-tahunan.vercel.app/'
        },
        {
            id: 4,
            imgUrl: '/img/img.jpg',
            desc: 'Login Page',
            link: 'https://login-page-eight-murex.vercel.app/'
        }
    ];

    return (
        <>
            <div id="projects" className={`${style.container} relative m-auto dark:bg-white bg-slate-100`}>
                <h1 className={`${style.titlePage} p-6 text-slate-700 text-center`}>
                    My Projects
                </h1>
                <div className={`${style.cardsGrid} cursor-pointer grid grid-cols-3 md:grid-cols-4 md:gap-4 w-full`}>
                    {projectList.map((item) => (
                        <div key={item.id} className={`border-slate-700 border-2  ${style.card}`}>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src={item.imgUrl} 
                                    alt={item.desc || 'Project Image'} 
                                    className={`w-full h-auto ${style.img}`}
                                    width={240}
                                    height={140}
                                />
                                <span className={`${style.span} text-4xl relative block bg-slate-700 opacity-70 text-center`}>
                                    {item.desc}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
