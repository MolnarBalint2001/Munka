import "./Navbar.css"


export default function Navbar() {
    return (
        <div className="navbar text-slate-900 font-medium mt-5">
            <div className="navbar-content flex flex-col md:flex-row md:space-x-4 place-items-center space-y-2">
                <div className="md:ml-10 logo grow-[12] shrink md:basis-[20vh]">
                    <span>Logo</span>
                </div>
                <div className="about grow shrink basis-0">
                    <span className="hover-underline">Rólunk</span>
                </div>
                <div className="projectek grow shrink basis-0">
                    <span className="hover-underline">Munkáink</span>
                </div>
                <div className="szolgaltatasok grow shrink basis-[10vh]">
                    
                    <span className="hover-underline"> Szolgáltatások</span>
                </div>
                <div className="kapcsolat grow shrink basis-0">

                    <span className="p-3 border-slate-800 hover:bg-slate-800 hover:text-white duration-200 md:mr-4">Kapcsolat</span>
                </div>
            </div>
        </div>
    );
}