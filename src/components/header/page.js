
import React from "react";
import style from "./header.module.css"

const Header = ()=>{
    return(
        <>
            <div id="header" className={`${style.container} relative top-20 md:top-0 flex md:flex-row flex-col md:justify-around items-center  m-auto`}>
                <div className=" flex md:flex-row flex-col md:justify-around items-center w-full">
                <div className={`${style.leftTitle} font-semibold text-white`}>
                    <p className="text-lg md:text-2xl">Hello, I'am</p>
                    <p className="text-3xl md:text-5xl">Rival Fahrezi Saputra</p>
                </div>
                <div className={`${style.rightImage} mt-10 md:mt-0`}>
                    <img className="#" src="img/profile/pp.jpg"></img>
                </div>
                </div>
            </div>
        </>
    )
}

export default Header;