import React from "react";
import style from "./footer.module.css"
const Footer =()=>{
    return(
        <>
        <div className={`${style.container} flex justify-center items-center bg-slate-900`}>
            <p className="text-white">CreateByLove @Rival Fahrezi Saputra</p>
        </div>
        </>
    )
}

export default Footer;