import Aos from "aos"
import { useEffect } from "react"
import "./Services.css"
export default function Services() {

    useEffect(()=>{
        Aos.init({duration:300})
    },[])
    return (
        <div className="services mt-40 mx-12">
            <div className="services-content">
                <div className="service-title mb-10 text-4xl md:text-7xl border-orange-800 pl-6 text-sky-900 font-semibold text-left" data-aos="fade-right">
                    Amit nyújtunk
                </div>
                <div className="services-grid w-full grid grid-flow-row gap-x-20 grid-rows-3 grid-cols-0 md:grid-cols-3 md:grid-rows-0 gap-y-10 text-left" data-aos="fade-up-right">
                    <div className="tervezes">
                        <p className="text-2xl text-sky-900 underline mb-2 font-medium">Tervezés</p>
                        <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo pariatur reiciendis esse exercitationem laboriosam corporis temporibus, voluptatem beatae velit.</div>
                    </div>
                    <div className="design">
                        <p className="text-2xl text-sky-900 underline mb-2 font-medium">Konstruckció</p>
                        <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo pariatur reiciendis esse exercitationem laboriosam corporis temporibus, voluptatem beatae velit.</div>
                    </div>
                    <div className="kivitelezés">
                        <p className="text-2xl text-sky-900 underline mb-2 font-medium">Kivitelezés</p>
                        <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo pariatur reiciendis esse exercitationem laboriosam corporis temporibus, voluptatem beatae velit.</div>
                    </div>

                </div>
            </div>

        </div>
    )
}