import React from "react"
import intro from "../../images/intro.png"

import "./Intro.css"



export const Intro = () =>{


    return(

      <div className="bg-slate-100 mt-[10vh] grid grid-cols-1 gap-y-8 place-items-center xl:grid-cols-2 xl:m-12 xl:gap-y-20">

        <div className="m-12 grid grid-cols-1 gap-y-10 place-items-center w-[240px] md:w-[400px] lg:w-[500px] 2xl:w-[700px] xl:place-items-start xl:text-left">

            <div className="text-2xl font-semibold text-sky-900 md:text-4xl lg:text-6xl xl:text-8xl">Mi építjük a jövőt</div>
            <div className="text-justify md:text-xl xl:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe magnam, itaque ipsam nam beatae exercitationem numquam. Ipsum, facere accusamus molestias magni minima delectus consectetur quisquam aspernatur officia vero maiores, quas blanditiis quaerat! Temporibus, commodi minima? Amet mollitia quia expedita!</div>
            <div className="bg-sky-600 text-white p-2 text-xl md:text-2xl hover:bg-orange-400">Fedezze fel</div>

        </div>

        <div className="xl:place-self-end">
            <img src={intro} />
        </div>

      </div>
    );
}


