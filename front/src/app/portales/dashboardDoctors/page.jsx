import React from "react";
import Image from "next/image";
import Link from 'next/link';
import {DoctorSidebar} from "./DoctorSidebar";
import {PatientSidebar} from "../dashboardPatient/PatientSidebar";
import SearchBar from "../../ui/SearchBar";
import Clock from "../../ui/Clock";
import Notifications from '../../ui/svg/Notifications';
import { Footer } from "../../components/footer";






export const DashboardPage = ({ userType }) => {
    return (
        <div className="flex h-screen flex-col">
            {/* Contenido principal */}
            <div className="flex flex-1">
                {/* Sidebar según el tipo de usuario */}
                {/* {userType === "medico" ? <PatientSidebar /> : <DoctorSidebar />} */}
                {/* {userType === "medico" ? <DoctorSidebar />: <PatientSidebar /> } */}
                <DoctorSidebar />
                {/* Contenido del Dashboard */}
                <div className="flex-1 p-4">
                    {/* Contenido superior */}
                    <div className="m-4 flex justify-between items-center">
                        {/* Aquí colocamos el SearchBar */}
                        <SearchBar />

                        {/* Aquí está el AnalogClock */}
                        <Clock />

                        <button>
                            <Notifications />
                        </button>


                        {/* Div que contiene la imagen del doctor y su nombre */}

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

                    {/* Tarjeta de tareas asignadas */}
                    <h2 className="font-medium text-xl text-gray-900">Bienvenido <span className="text-blue-600 font-bold">Dr. Ottoneli!</span></h2>

                    <div className="p-4 bg-blue-300 border rounded-lg shadow-md text-white items-center">
                        <h3 className="text-lg font-semibold flex text-white mb-4">
                            Tareas asignadas recientes: <div className="bg-white text-blue-300 border rounded-lg pr-1 pl-1 ml-2"> 23</div>
                        </h3>
                        <Link href="#">
                            <p className="text-center text-white underline mb-4">Ver todo</p>
                        </Link>
                        <div className="flex">
                            <table className="w-full text-gray-500">
                                <tbody>
                                    <tr className="m-2">
                                        <td className="flex border bg-white rounded border-gray-300 p-2 items-center">

                                            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white text-3xl font-bold mr-4">P</div>
                                            <div>
                                                <p className="font-semibold text-black"> Rondas de pacientes  </p>
                                                <p> 25 de enero de 2024 | 9:00 </p>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="m-2">
                                        <td className="flex border bg-white rounded border-gray-300 p-2 items-center">
                                            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white text-3xl font-bold mr-4">P</div>

                                            <div>
                                                <p className="font-semibold text-black"> Revision de resultados de laboratorio </p>
                                                <p> 25 de enero de 2024 | 15:00 </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="m-2">
                                        <td className="flex border bg-white rounded border-gray-300 p-2 items-center">
                                            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white text-3xl font-bold mr-4">P</div>
                                            <div>
                                                <p className="font-semibold text-black"> Procedimientos quirurgicos </p>
                                                <p> 25 de enero de 2024 | 16:00 </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                            {/* Foto del médico */}
                            <div className="ml-auto">
                                <Image
                                    width={400}
                                    height={400}
                                    src="/assets/doctor.png"
                                    alt="doc img"
                                    className="w-auto h-full p-4"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
};

