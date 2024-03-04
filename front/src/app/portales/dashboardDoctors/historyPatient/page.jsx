"use client"
import { DoctorSidebar } from "../DoctorSidebar"
import { SearchBar } from "../../../ui/SearchBar"
import { Clock } from "../../../ui/Clock"
import { Notifications } from "../../../ui/svg/Notifications"
import { Footer } from "../../../components/footer"
import Image from "next/image"
const listDocts = [
    { name: "Dra. Amanda Pozo", especialidad: "Cardiología", img: "/docPozo.svg" },
    { name: "Dr. Lucas Peña", especialidad: "Nefrología", img: "/docPeña.svg" },
    { name: "Dr. Mario Estevez", especialidad: "Traumatólogo", img: "/docEstevez.svg" },
    { name: "Dra. Melany Villa", especialidad: "Pediatría", img: "/docVilla.svg" },

]
export default function HistoryPatient() {
    const handleClick = (e) => {
        e.preventDefault()
        const link = document.createElement('a');
        link.href = "/cardiogramaExample.pdf";
        link.download = '/cardiogramaExample.pdf';
        document.body.appendChild(link);
        link.click();
    }
    return (
        <div className="flex h-screen flex-col">
            <div className="flex flex-1">
                {/* Sidebar según el tipo de usuario */}
                {/* {userType === "medico" ? <PatientSidebar /> : <DoctorSidebar />} */}
                {/* {userType === "medico" ? <DoctorSidebar />: <PatientSidebar /> } */}
                <DoctorSidebar />
                <div className="flex-1 p-4 ">
                    <div className="m-4 flex justify-between items-center">
                        <SearchBar />
                        <Clock />
                        <button>
                            <Notifications />
                        </button>
                        <div className="border rounded-[15px] border-gray-300 p-2">
                            <div className="flex items-center">
                                <Image
                                    width={60}
                                    height={60}
                                    src="/assets/doctor.png"
                                    alt="doc img"
                                    className="mr-4 h-12 w-12 bg-blue-300 rounded-full"
                                />
                                <span className="text-lg font-semibold text-gray-900">
                                    Dr. Ottoneli
                                </span>
                            </div>
                        </div>


                    </div>
                    <div className="text-black mt-8">
                        <div className="flex justify-between gap-4 max-md:flex-col">
                            <div className="p-4 border-[1px] border-[#E8E7E7] shadow-[0px_1px_50px_0px_#00000014] rounded-lg">
                                <div className="flex justify-between gap-4 items-center mb-4">
                                    <h2 className="font-semibold text-2xl ">Tomas Juarez</h2>
                                    <p>Email: tomas.juarez@email.com</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Fecha de nacimiento: <span className="font-normal">15 /5/1985</span></p>
                                    <p className="font-semibold">DNI : <span className="font-normal">30.123.456</span></p>
                                    <p className="font-semibold"> ID del paciente<span className="font-normal"> TJ2024001</span></p>
                                    <p className="font-semibold">Teléfono:<span className="font-normal"> +54 9 11 2345-6789</span></p>
                                    <p className="font-semibold">Legajo número: <span className="font-normal">LJ2024-7890</span></p>
                                    <p className="font-semibold">factor sanguíneo:<span className="font-normal"> A positivo (A+)</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between w-full h-auto bg-[#FFF2E0] rounded-lg p-4">    
                                <span className="w-max text-[#DB8E21] bg-white p-2">NOTAS</span>
                                <div className="text-[0.9rem]">
                                    <p>El paciente presenta síntomas y hallazgos consistentes con un cuadro clínico sugestivo de diabetes, como se detalla en la sección de "Síntomas Actuales" y los resultados de los análisis de sangre, que indican niveles elevados de glucosa u otros parámetros relacionados con la diabetes</p>
                                </div>
                                <button className="w-max flex gap-4 items-center  rounded-lg bg-[#FFFFFF] border-[1px] border-dashed border-[#FFA000] p-2 hover:opacity-80"> <span className="text-[#FFA000] font-bold text-2xl">+</span>Añadir receta medica <span className="text-[#ddd]  text-2xl">{">"}</span> </button>
                            </div>
                        </div>
                        <div className="mt-8 mb-8">
                            <button className="bg-[#015190] text-white p-4 rounded-lg hover:opacity-90">Ver antecedentes médicos <span className="text-[#D0D0D0]">{">"}</span></button>
                        </div>
                        <div>
                            <h2 className="w-max border-b-[2px] border-b-[#000] font-bold ">Estudios medicos </h2>       
                            <div className="flex gap-4 flex-wrap mt-8 mb-8 max-md:justify-center">
                                {
                                    listDocts.map((item) => (
                                        <div className="w-[283px] bg-[#F8F8F8] rounded-lg p-4 flex flex-col items-center gap-2" key={item.especialidad}>
                                            <div className="w-full flex gap-[0.1rem] items-center justify-end"><img src="/hospital.svg" alt="hospital" className="h-[22px]" /><p className="text-end text-[0.8rem]">Hospital italiano</p></div>
                                            <div className="w-full flex gap-4">
                                                <img src={item.img} alt={item.name} height={"54px"} className="h-[54px]"/>
                                                <div>
                                                    <span className="text-[0.9rem]">{item.especialidad}</span>
                                                    <h3 className="font-bold">{item.name}</h3>
                                                </div>
                                            </div>
                                            <div>
                                                <img src="https://images.ctfassets.net/zlnfaxb2lcqx/3F5B2sjo9D4LkL5QpW1BqN/6a35c1be2ac971c9fa04f081bee2dfe3/Captura-de-pantalla-2016-11-17-a-las-18.png?fm=webp&w=367&q=75" alt="electro" className="h-[153px] w-full"/>
                                            </div>
                                            <div>
                                                <button onClick={handleClick} className="bg-white border-[1px] border-#00000040] p-4 flex gap-4 items-center hover:opacity-80"><img src="/pdf.svg" alt="pdf" />Descargar <img src="/descarga.svg" alt="descargar" /></button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>        
    )
}