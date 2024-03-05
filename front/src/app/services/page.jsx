import { Footer } from "../components/footer"
import Navbar from "../components/Navbar"

const listDocts = ["Salud mental", "Diabetología", "Fisiatría", "Hematología", "Infectología", "Deportología", "Medicina familiar", "Nefrología", "Neumología", "Psícología", "Ginecología", "Dermatología"]
export default function  Services(){
    return <>
        <Navbar></Navbar>
        
    <div className="text-black max-w-[1295px] m-auto mt-16 bg-[#fff] max-xl:w-[90%]">
        <div className="relative">
            <img src="/services.svg" alt="services" />
            <h2 className="text-[#1745E8] absolute left-[5%] top-[40%] text-4xl font-semibold leading-normal max-md:top-[20%] max-md:text-2xl">Conoce nuestros <br className="mt-4"/> Servicios</h2>
        </div>
        <div className="mt-8 mb-8 flex flex-col gap-8">
            <h3 className="text-[#1745E8] border-b-[1px] border-[#1745E8] w-max	">Especialidades de nuestros profesionales</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {listDocts.map((item, position) => <div key={position} className="flex items-center gap-2 flex-wrap w-[400px] h-[110px] shadow-[0px_12px_48px_0px_#0134821A] p-4 rounded-lg">
                    <div className="h-[70px] w-[70px] bg-[#415DF9] flex justify-center items-center "><img src="/services-icon.svg" alt="services-icon" height={"40px"}/></div>
                    <p>{item}</p>
                </div>)}
            </div>
        </div>
        </div>
        <Footer></Footer>
    </>
}