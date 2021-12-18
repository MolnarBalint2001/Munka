import React from "react"
import intro from "../../images/intro.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "./Intro.css"


export const Intro = () =>{


    return(
        <div className="grid place-items-center m-12 lg:grid-cols-3 bg-slate-100">

            <div className="m-12 grid grid-cols-1 gap-y-8 place-items-start">
                <div className="text-orange-800 lg:text-8xl text-left font-semibold text-sky-900 ">Mi építjük a jövőt</div>
                <div className="text-justify lg:w-[400px] lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quaerat rerum magni debitis in eaque iure? Ab incidunt consequatur officiis quibusdam nostrum perferendis dolorum sequi ipsam amet quia veniam quod repudiandae asperiores molestias voluptas, cum obcaecati sed ipsum? Quaerat velit sequi in atque! Nostrum deleniti id consequatur mollitia officiis in?</div>
                <div id="intro-btn" className="bg-sky-600 text-white p-4 flex flex-row space-x-8 items-center duration-300">
                    <div className="lg:text-3xl">Fedezze fel</div>
                    <span className="text-3xl duration-300 font-bold" id="intro-icon">
                        {">"}
                    </span>
                </div>
            </div>

            <div className="col-span-2">
                <img src={intro}  className="lg:h-[1000px] lg:w-fit transfrom"/>
            </div>
        </div>
    );
}


