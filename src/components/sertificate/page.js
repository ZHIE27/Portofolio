'use client';

import React, { useState } from "react";
import Image from "next/image";
import style from "./sertificate.module.css";

const Sertificate = () => {
    const projectList = [
        { id: 1, imgUrl: '/img/certificate/sololearn.jpg', desc: 'SoloLearn' }
    ];

    const [selectImg, setSelectImg] = useState(null);

    return (
        <>
            <div id="certificates" className={`${style.container} relative m-auto bg-gray-700`}>
                <div className={`${style.wrapping} m-auto py-6`}>
                    <h1 className={`${style.title} text-center`}>Certificate</h1>
                    <div className={`${style.cardsList} cursor-pointer grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-4`}>
                        {projectList.map((item) => (
                            <div
                                key={item.id}
                                className={`${style.card} bg-slate-500 m-auto`}
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
