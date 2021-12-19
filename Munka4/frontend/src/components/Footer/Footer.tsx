import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"




export const Footer = () => {


    return (
        <div id="footer" className="bg-zinc-700 grid grid-cols-1 gap-y-20 xl:grid-cols-2">

            <div className="m-8 grid grid-cols-1 text-slate-200 gap-y-20 lg:grid-cols-2 place-items-center lg:gap-x-20 lg:m-20">

                <div className="m-2 text-left grid grid-cols-2 place-items-center gap-x-6  text-md sm:text-xl md:gap-x-28 lg:text-2xl lg:gap-x-[200px] lg:m-12">
                    <div className="flex flex-col space-y-4 items-start">
                        <div>Rólunk</div>
                        <div>Munkáink</div>
                        <div>Szolgáltatások</div>
                        <div>Kapcsolat</div>
                    </div>

                    <div className="flex flex-col space-y-4 items-start">
                        <select className="bg-transparent">
                            <option value="Magyar">Magyar</option>
                            <option value="English">English</option>
                            <option value="Deutsch">Deutsch</option>
                        </select>
                        <div>Áraink</div>
                        <div>Értékelések</div>
                        <div>Partnereink</div>
                    </div>
                </div>

                <div className="flex flex-row space-x-12 mx-auto text-3xl md:text-4xl xl:text-5xl">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                </div>

            </div>


            <div className="grid grid-cols-1 gap-y-12 place-items-center">
                <div className="text-slate-200 text-xl">Megjegyzések</div>
                <input type="text" placeholder="Név"  className=""/>
                <input type="text" placeholder="E-mail" />
                <textarea placeholder="Tartalom"></textarea>
                <button className="text-slate-200">Küldés</button>
            </div>
        </div>
    );
}



