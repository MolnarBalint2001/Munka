import { useEffect } from "react";
import "./About.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        AOS.init({ once: false, duration: 1000 })
    }, [])
    return (
        <div className="about m-12 mt-[20vh]">
            <div className="about-content flex flex-col lg:flex-row lg:space-x-[10rem]">
                <div className="images grow-[1.5] shrink basis-0 order-2 lg:order-1">
                    <div className="images-content grid">

                        <img className="con-image" src="https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/how-to-start-a-construction-company-hero.png" alt="" data-aos="fade-right" />
                    </div>
                </div>
                <div className="text-content grow shrink basis-0 order-1 lg:order-2 mb-10">
                    <div className="in-nut-shell text-3xl md:text-7xl text-sky-900 font-bold text-left" data-aos="fade-up">
                        Dióhéjban rólunk...
                    </div>
                    <div className="hr"></div>
                    <div className="about-desc text-slate-600 text-left mt-10" data-aos="fade-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia rerum, molestiae optio vitae explicabo odit dolores est culpa sit, rem natus nemo. Quos tempore sequi animi accusantium ipsam modi asperiores ut exercitationem non fugit eos suscipit vero molestiae aliquid quo ex autem cum reiciendis, mollitia molestias rerum esse. Laborum delectus distinctio nihil rerum doloremque, adipisci qui aut voluptatibus soluta atque deserunt at dolore nulla alias ullam numquam porro ea!
                    </div>
                    <div className="about-desc text-slate-600 text-left mt-10" data-aos="fade-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia rerum, molestiae optio vitae explicabo odit dolores est culpa sit, rem natus nemo. Quos tempore sequi animi accusantium ipsam modi asperiores ut exercitationem non fugit eos suscipit vero molestiae aliquid quo ex autem cum reiciendis, mollitia molestias rerum esse. Laborum delectus distinctio nihil rerum doloremque, adipisci qui aut voluptatibus soluta atque deserunt at dolore nulla alias ullam numquam porro ea!
                    </div>
                </div>

            </div>
        </div>
    );
}