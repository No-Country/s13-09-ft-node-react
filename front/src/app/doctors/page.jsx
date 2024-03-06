import { Footer } from "../components/footer"
import Navbar from "../components/Navbar"
const listDocts = [
    { name: "Dra. Amanda Pozo", especialidad: "Cardiología", img: "/docPozo.svg" },
    { name: "Dr. Lucas Peña", especialidad: "Nefrología", img: "/docPeña.svg" },
    { name: "Dr. Mario Estevez", especialidad: "Traumatólogo", img: "/docEstevez.svg" },
    { name: "Dra. Melany Villa", especialidad: "Pediatría", img: "/docVilla.svg" },
    { name: "Dr. Angel Passini", especialidad: "Dermatología", img: "/docPassini.svg" },
    { name: "Dra. Amanda Pozo", especialidad: "Neumología", img: "/docPozo.svg" }
]
export default function  Doctors(){
    return <>
        <Navbar/>
    <div className="text-black max-w-[1295px] m-auto mt-16 bg-[#fff] max-xl:w-[90%]">
        <div className="relative">
            <img src="/doctors-img.svg" alt="services" />
            <h2 className="text-[#1745E8] absolute left-[5%] top-[40%] text-4xl font-semibold leading-normal max-md:top-[20%] max-md:text-2xl">Conoce nuestros <br className="mt-4"/> Doctores</h2>
        </div>
        <div className="mt-8 mb-8 flex flex-col gap-8">
            <h3 className="text-[#1745E8] border-b-[1px] border-[#1745E8] w-fit	">Especialidades de nuestros profesionales</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {listDocts.map((item, position) => <div key={position} className="flex flex-col items-center gap-2  shadow-[0px_12px_48px_0px_#0134821A]  rounded-lg">
                    <div className=" flex justify-center items-center bg-[#BDE3FF]"><img src={ item.img} alt={item.name} height={"40px"}/></div>
                    <div className="text-center p-6 flex flex-col gap-4">
                        <p className="text-[#0234A1] font-semibold text-xl">{item.name}</p>
                        <span>{item.especialidad}</span>
                    </div>
                </div>)}
            </div>
        </div>
        </div>
        <Footer></Footer>
    </>
}