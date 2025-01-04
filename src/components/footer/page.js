import React from "react";
import style from "./footer.module.css"
const Footer =()=>{
    return(
        <>
        <div className={`${style.container} relative text-center justify-center items-center bg-slate-900`}>
            <p className={`${style.p} text-white`}>CreateByLove @Rival Fahrezi Saputra</p>
        </div>
        </>
    )
}

export default Footer;