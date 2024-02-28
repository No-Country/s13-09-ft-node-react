
import React from "react";
import Image from "next/image";
import PatientSidebar from "./PatientSidebar";
import SearchBar from "../../ui/SearchBar";
import Clock from "../../ui/Clock";
import Mas from "../../ui/svg/Mas";
import Exclamacion from "../../ui/svg/Exclamacion";
import Cruz from "../../ui/svg/Cruz";
import Check from "../../ui/svg/Check";
import { Footer } from "../../components/footer";

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
                    <div className="m-4 flex items-center justify-between">
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
                    <div className="flex justify-between p-4">
                        {/* Primera tarjeta */}
                        <div className="w-397 h-315 relative mr-4 rounded-lg border bg-white p-6 shadow-md">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                Información del Paciente
                            </h3>
                            {/* Datos del paciente */}
                            <p className="mb-2 text-gray-900">
                                <span>Email: </span>{" "}
                                <span className="font-semibold">tomas.juarez@email.com</span>
                            </p>
                            <p className="mb-2 text-gray-900">
                                <span>Fecha de nacimiento: </span>{" "}
                                <span className="font-semibold">15/5/1985</span>
                            </p>
                            <p className="mb-2 text-gray-900">
                                <span>DNI: </span>{" "}
                                <span className="font-semibold">30.123.456</span>
                            </p>
                            <p className="mb-2 text-gray-900">
                                <span>ID del paciente: </span>{" "}
                                <span className="font-semibold">TJ2024001</span>
                            </p>
                            <p className="mb-2 text-gray-900">
                                <span>Teléfono: </span>{" "}
                                <span className="font-semibold">+54 9 11 2345-6789</span>
                            </p>
                            <p className="mb-2 text-gray-900">
                                <span>Legajo número: </span>{" "}
                                <span className="font-semibold">LJ2024-7890</span>
                            </p>
                            <p className="mb-2 text-gray-900">
                                <span>Factor sanguíneo: </span>{" "}
                                <span className="font-semibold">A positivo (A+)</span>
                            </p>
                            <p className="mb-2 text-gray-900">
                                <span>Peso: </span> <span className="font-semibold">75 kg</span>
                            </p>
                        </div>

                        {/* Segunda tarjeta */}
                        {/* <Selector /> */}



                        {/* Tercer tarjeta */}

                        {/* Cuarta tarjeta */}
                        <div className="w-437 relative h-full rounded-lg border bg-white p-4 shadow-md">
                            <h3 className="mb-2 text-lg  text-gray-900">
                                Antecedentes
                            </h3>
                            <div className="mb-2 flex items-center">
                                <Mas />
                                <span className="text-blue-900 font-semibold ">Alergias</span>
                            </div>
                            {/* Datos de antecedentes */}
                            <div className="mb-2 p-2 bg-red-100 flex items-center">
                                <Exclamacion />
                                <span className="text-red-500">Otras alergias: </span>{" "}
                                <p className="ml-2 text-red-500 block mb-auto">
                                    Sensible al Polen de plantas y flores
                                </p>
                            </div>

                            <div className="mb-2 flex items-center">
                                <Mas />
                                <span className="text-blue-900 font-semibold">Antecedentes Patológicos:</span>
                            </div>

                            <div className="mb-2 p-2 flex items-start">
                                <div className="flex items-center">
                                    <span className="text-blue-900 mr-4 w-60">Antecedentes Negados</span>
                                    <div className="flex items-center ml-auto">
                                        <Cruz />
                                        <p className="ml-2 text-gray-500 flex-1">Diabetes, Hipertensión, Cardiopatías, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 p-2 flex items-start">
                                <div className="flex items-center">
                                    <span className="text-blue-900 mr-4 w-60">Cirugías Previas </span>
                                    <div className="flex items-center ml-auto">
                                        <Check />
                                        <p className="ml-2 text-gray-500 flex-1">Hospitalizado por bronquitis, Enero 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 p-2 flex items-start">
                                <div className="flex items-center">
                                    <span className="text-blue-900 mr-4 w-60">Enfermedades Tiroideas</span>
                                    <div className="flex items-center ml-auto">
                                        <Check />
                                        <p className="ml-2 text-gray-500 flex-1">Hipertirodismo controlado</p>
                                    </div>
                                </div>
                            </div>



                            <div className="mb-2 flex items-center">
                                <Mas />
                                <span className="text-blue-900 font-semibold">Antecedentes NO Patológicos:</span>
                            </div>
                            <div className="mb-2 p-2 flex items-start">
                                <div className="flex items-center">
                                    {/* Simulando un input */}
                                    <span className="text-blue-900 mr-4 w-60  py-1">Antecedentes Negados</span>
                                    <div className="flex items-center ml-auto">
                                        <Cruz />
                                        {/* Contenedor para las etiquetas p */}
                                        <div className="flex flex-col ml-2">
                                            <p className="text-gray-500 w-60">Otros</p>
                                            {/* Agrega más etiquetas p aquí si es necesario */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 p-2 flex items-start">
                                <div className="flex items-center">
                                    {/* Simulando un input */}
                                    <span className="text-blue-900 mr-4 w-60  py-1">Actividad física</span>
                                    <div className="flex items-center ml-auto">
                                        <Check />
                                        {/* Contenedor para las etiquetas p */}
                                        <div className="flex flex-col ml-2">
                                            <p className="text-gray-500 w-60">Corre 5 km / 3 veces x semana</p>
                                            {/* Agrega más etiquetas p aquí si es necesario */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-2 p-2 flex items-start">
                                <div className="flex items-center">
                                    {/* Simulando un input */}
                                    <span className="text-blue-900 mr-4 w-60  py-1">Tabaquismo</span>
                                    <div className="flex items-center ml-auto">
                                        <Check />
                                        {/* Contenedor para las etiquetas p */}
                                        <div className="flex flex-col ml-2">
                                            <p className="text-gray-500 w-60">Fuma</p>
                                            {/* Agrega más etiquetas p aquí si es necesario */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PatientPage;
