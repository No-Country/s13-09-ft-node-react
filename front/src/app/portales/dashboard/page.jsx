import React from "react";
import Image from "next/image";
import DoctorSidebar from "../components/DoctorSidebar";
import PatientSidebar from "../components/PatientSidebar";
import SearchBar from "../../ui/SearchBar";
import Clock from "../../ui/Clock";
import Notifications from "@/app/ui/svg/Notifications ";


const DashboardPage = ({ userType }) => {
    return (
        <div className="flex h-screen flex-col">
            {/* Contenido principal */}
            <div className="flex flex-1">
                {/* Sidebar según el tipo de usuario */}
                {userType === "medico" ? <PatientSidebar /> : <DoctorSidebar />}

                {/* Contenido del Dashboard */}
                <div className="flex-1 p-4">
                    {/* Contenido superior */}
                    <div className="m-4 flex justify-between items-center">
                        {/* Aquí colocamos el SearchBar */}
                        <SearchBar />

                        {/* Aquí está el AnalogClock */}
                        <Clock />

                        <Notifications />

                        {/* Div que contiene la imagen del doctor y su nombre */}
                        <div className="flex items-center">
                            <Image
                                width={60}
                                height={60}
                                src="/assets/doc.jpg"
                                alt="doc img"
                                className="mr-4 h-8 w-8 rounded-full"
                            />
                            <span className="text-lg font-semibold text-gray-900">
                                Dr. Ottoneli
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
