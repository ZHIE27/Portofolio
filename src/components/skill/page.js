

import React from "react";
import Image from "next/image";
import style from "./skill.module.css";

const Skill = () => {


    return (
        <>

            <div
                id="skill"
                className={`${style.container} m-auto text-center bg-gray-700 md:h-full rounded-lg`}
            >
                <div className={`${style.wrapping} m-auto py-6`}>
                    <h1 className={`${style.title}`}>My Skill</h1>
                    <div
                        className={`${style.wrap} grid md:grid-cols-4 grid-cols-3 gap-3 md:gap-4 w-full m-auto p-6 rounded-md`}
                    >
                        <div>
                            <Image
                                className={`${style.bgImg}`}
                                src="img/skill/js.png" 
                                alt="JavaScript Logo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <Image
                                className={`${style.bgImg}`}
                                src="img/skill/react.png" 
                                alt="React Logo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <Image
                                className={`${style.bgImg}`}
                                src="img/skill/html.png" 
                                alt="HTML5 Logo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <Image
                                className={`${style.bgImg}`}
                                src="img/skill/css1.png" 
                                alt="CSS3 Logo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <Image
                                className={`${style.bgImg}`}
                                src="img/skill/tailwind.png" 
                                alt="Tailwind CSS Logo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <Image
                                className={`${style.bgImg}`}
                                src="img/skill/bootstrap.png" 
                                alt="Bootstrap Logo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <Image
                                className={`${style.bgImg}`}
                                src="img/skill/next.png" 
                                alt="Next JS Logo"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
