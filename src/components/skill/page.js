

import React from "react";
import style from "./skill.module.css"

const Skill = ()=> {
    return (
        <>
        <div id="skill" className={`${style.container} m-auto text-center bg-gray-700  md:-h-full rounded-lg`}>
            <div className={`${style.wrapping} m-auto py-6`}>
                <h1 className={`${style.title}`}>My Skill</h1>
                <div className={`${style.wrap} grid md:grid-cols-4 grid-cols-3 gap-3 md:gap-4 w-full m-auto p-6 rounded-md`}>
                    <div><img className={`${style.bgImg}`} src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"></img>
                    </div>
                    <div><img className={`${style.bgImg}`} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"></img>
                    </div>
                    <div><img className={`${style.bgImg}`} src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"></img>
                    </div>
                    <div><img className={`${style.bgImg}`} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817"></img>
                    </div>
                    <div><img className={`${style.bgImg}`} src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"></img>
                    </div>
                    <div><img className={`${style.bgImg}`} src="https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png"></img>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Skill;