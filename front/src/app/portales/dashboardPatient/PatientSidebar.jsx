import React from "react";
import Image from "next/image";
import Link from "next/link";

export const PatientSidebar = ({ paciente }) => {
    return (
        <div className="hidden lg:flex flex-col h-screen bg-blue-200 lg:w-1/4" style={{ backgroundColor: '#CFE7FD' }}>
            <div className="p-4">
                {/* Logo de la clínica */}
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="mr-2 ml-2">
                                <Image
                                    width={100}
                                    height={100}
                                    src="/assets/Logo.png"
                                    alt="logo de la clínica"
                                />
                            </div>
                        </Link>
                    </div>
                    <p className="text-xl l font-semibold text-blue-600">HealthMate</p>
                </div>

                {/* Separador */}
                <hr className="my-4 mt-0 border-spacing-1 border-blue-600" />

                {/* Información del paciente */}
                <div className="m-4 mt-8 flex items-center">
                    <div className="flex-shrink-0">
                        <Image
                            width={80}
                            height={80}
                            src="/assets/perfil.jpg"
                            alt="Foto del paciente"
                            className="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="ml-2">
                        <p className="font-semibold text-gray-900">Tomas Juarez</p>
                    </div>
                </div>

                {/* Links */}
                <div className="ml-2 pl-4">
                    <ul>
                        <li className="my-2">
                            <Link href="/" className="text-gray-900">Información del paciente</Link>
                        </li>
                        <li className="my-2">
                            <Link href="/" className="text-gray-900">Parámetros Médicos</Link>
                        </li>
                        <li className="my-2">
                            <Link href="/" className="text-gray-900">Estudios</Link>
                        </li>
                    </ul>
                </div>

                {/* Enlace de logout */}
                <div className="absolute bottom-8 left-8 flex items-center">
                    <div className="flex-shrink-0 mr-2 ml-2">
                        <Image
                            width={30}
                            height={30}
                            src="/assets/logout.png"
                            alt="icon logout"
                        />
                    </div>
                    <Link href="/logout" className="text-gray-900">Cerrar sesión</Link>
                </div>
            </div>
        </div>
    );
};

