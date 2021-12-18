import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"




export const Footer = () =>{



    return(
        <div id="footer" className="bg-zinc-800 text-slate-300 place-items-center lg:grid grid-cols-2 lg:text-2xl ">

            <div className="grid gap-x-20 gap-y-12 place-items-center md:grid-cols-2 p-10 border-b lg:w-[600px] lg:border-0 lg:ml-12 xl:grid-cols-3 xl:w-[900px]">
                <div id="f-col1" className="grid grid-cols-1 place-items-center gap-y-10 underline cursor-pointer text-xl md:place-items-start">
                    <div>Rólunk</div>
                    <div>Szolgáltatások</div>
                    <div>Projektek</div>
                    <div>Kapcsolat</div>
                    <div>Csapatunk</div>
                </div>

                <div id="f-col2" className="grid grid-cols-1 place-items-center gap-y-10 underline cursor-pointer text-xl md:place-items-start">
                    <div>Mit csinálunk</div>
                    <div>Hogyan működünk</div>
                    <div>Történet</div>
                    <div>Árak</div>
                    <div>FAQ</div>
                </div>

                <div className="grid grid-cols-1 place-items-center gap-y-20 text-xl lg:place-items-start lg:m-12">
                    <select className="h-fit w-fit bg-transparent" name="" id="">
                        <option value="Magyar">Magyar</option>
                        <option value="English">English</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Italiano">Italiano</option>
                    </select>

                    <div className="flex flex-row space-x-[50px] cursor-pointer text-3xl">
                        <FontAwesomeIcon icon={faFacebook} className="lg:text-4xl hover:text-blue-700"/>
                        <FontAwesomeIcon icon={faInstagram} className="lg:text-4xl hover:text-red-400"/>
                        <FontAwesomeIcon icon={faTwitter} className="lg:text-4xl hover:text-blue-400"/>
                    </div>
                </div>
            </div>


            <div id="form" className="p-12 grid grid-cols-1 gap-y-8 lg:space-y-[50px] text-xl ">

                <div className="lg:text-2xl">Kapcsolat</div>
                <input type="text" className="md:w-[300px]" placeholder="Név"/>

                <input type="text" className="md:w-[300px]" placeholder="E-mail"/>

                <textarea name="" id="textarea" ></textarea>

                <button id="send-btn">Küldés</button>
            </div>



        </div>
    );
}