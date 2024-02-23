import React from "react";
import Image from "next/image";
import PatientSidebar from "./PatientSidebar";
import SearchBar from "../../ui/SearchBar";
import Clock from "../../ui/Clock";
import Mas from "@/app/ui/svg/Mas";
import Exclamacion from "@/app/ui/svg/Exclamacion";

const PatientPage = ({ userType }) => {
    return (
        <div className="flex h-screen flex-col">
            {/* Contenido principal */}
            <div className="flex flex-1">
                {/* Sidebar del paciente */}
                <PatientSidebar />

                {/* Contenido del Dashboard */}
                <div className="flex-1 p-4">
                    {/* Contenido superior */}
                    <div className="m-4 flex justify-between items-center">
                        {/* Aquí colocamos el SearchBar */}
                        <SearchBar />

                        {/* Aquí está el AnalogClock */}
                        <Clock />

                        {/* Div que contiene la imagen del paciente y su nombre */}
                        <div className="flex items-center">
                            <Image
                                width={60}
                                height={60}
                                src="/assets/perfil.jpg"
                                alt="patient img"
                                className="mr-4 h-8 w-8 rounded-full"
                            />
                            <span className="text-lg font-semibold text-gray-900">
                                Tomas Juarez
                            </span>
                        </div>
                    </div>

                    {/* Contenido específico del paciente */}
                    <div className="p-4 flex justify-between">
                        {/* Primera tarjeta */}
                        <div className="bg-white w-397 h-315 relative p-6 rounded-lg border shadow-md mr-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Información del Paciente
                            </h3>
                            {/* Datos del paciente */}
                            <p className="text-gray-900 mb-2">
                                <span className="font-semibold">Email:</span>{" "}
                                <span>tomas.juarez@email.com</span>
                            </p>
                            <p className="text-gray-900 mb-2">
                                <span className="font-semibold">Fecha de nacimiento:</span>{" "}
                                <span>15/5/1985</span>
                            </p>
                            {/* Otros datos del paciente... */}
                        </div>

                        {/* Segunda tarjeta */}
                        <div className="bg-white w-437 h-64 relative p-4 rounded-lg border shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Antecedentes
                            </h3>
                            {/* Datos de antecedentes */}
                            <div className="flex items-center mb-2">
                                <Exclamacion />
                                <p className="text-gray-900 ml-2">
                                    <span className="text-red-500">Otras alergias :</span> Sensible al
                                    Polen de plantas y flores
                                </p>
                            </div>
                            <p className="text-gray-900 mb-2">
                                <span className="font-semibold">Antecedentes Patológicos:</span>{" "}
                                Diabetes, Hipertensión, Cardiopatías, etc.
                            </p>
                            {/* Otros datos de antecedentes... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientPage;
