'use client';

import React, { useState } from "react";
import Image from "next/image";
import style from "./sertificate.module.css";

const Sertificate = () => {
    const projectList = [
        { id: 1, imgUrl: '/img/certificate/img.jpg', desc: 'Project 1' },
        { id: 2, imgUrl: '/img/certificate/img.jpg', desc: 'Project 2' },
        { id: 3, imgUrl: '/img/certificate/img.jpg', desc: 'Project 3' },
        { id: 4, imgUrl: '/img/certificate/img.jpg', desc: 'Project 4' },
        { id: 5, imgUrl: '/img/certificate/img.jpg', desc: 'Project 5' },
        { id: 6, imgUrl: '/img/certificate/img.jpg', desc: 'Project 6' },
        { id: 7, imgUrl: '/img/img.jpg', desc: 'Project 7' },
        { id: 8, imgUrl: '/img/img.jpg', desc: 'Project 8' },
    ];

    const [selectImg, setSelectImg] = useState(null);

    return (
        <>
            <div id="certificates" className={`${style.container} relative m-auto dark:bg-white bg-gray-700`}>
                <div className={`${style.wrapping} m-auto py-6`}>
                    <h1 className={`${style.title} text-center`}>Certificate</h1>
                    <div className={`${style.cardsList} cursor-pointer grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-3 w-full`}>
                        {projectList.map((item) => (
                            <div
                                key={item.id}
                                className={`${style.card} bg-slate-500`}
                                onClick={() => setSelectImg(item.imgUrl)}
                            >
                                <Image
                                    src={item.imgUrl}
                                    alt="Certificate"
                                    width={240}
                                    height={140}
                                    className={`${style.image}`}
                                />
                                <div className={`${style.wrap} relative`}>
                                    <span className={`${style.titleCard} text-3xl text-center`}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal untuk memperbesar gambar */}
            {selectImg && (
                <div
                    className={`${style.expandImg} fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50`}
                    onClick={() => setSelectImg(null)}
                >
                    <div className="relative">
                        <Image
                            className="max-w-full max-h-[80vh] rounded-md"
                            src={selectImg}
                            alt="Expanded View"
                            width={800}
                            height={600}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <span
                            className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer hover:text-gray-400"
                            onClick={() => setSelectImg(null)}
                        >
                            X
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sertificate;
