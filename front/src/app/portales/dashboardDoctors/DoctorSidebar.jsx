import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const DoctorSidebar = () => {
    return (
        <div className="h-full hidden lg:flex flex-col  bg-blue-200 lg:w-1/4" style={{ backgroundColor: '#CFE7FD' }}>
            <div>
                {/* Logo de la clínica */}
                <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 ml-2">
                        <Link href="/">
                            <Image
                                width={100}
                                height={100}
                                src="/assets/Logo.png"
                                alt="logo de la clínica"
                            />
                        </Link>
                    </div>
                    <p className="text-xl font-semibold text-blue-600">HealthMate</p>
                </div>

                {/* Título del dashboard con icono de menú */}
                <div className="flex items-center bg-gray-400 p-4 mb-4">
                    <div className="flex-shrink-0 mr-2 ml-2">
                        <Image
                            width={50}
                            height={50}
                            src="/assets/dashboard.png"
                            alt="icon dashboard"
                        />
                    </div>
                    <p className="text-lg p-4 text-white font-semibold w-full">Dashboard</p>
                </div>

                {/* Links */}
                <ul className="pl-8">
                    <li className="my-2 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 mr-2 ml-2">
                            <Image
                                width={30}
                                height={30}
                                src="/assets/equipo.webp"
                                alt="icon equipo"
                            />
                        </div>
                        <Link href="/" className="ml-2">Equipo</Link>
                    </li>

                    <li className="my-2 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 mr-2 ml-2">
                            <Image
                                width={20}
                                height={20}
                                src="/assets/paciente.png"
                                alt="icon paciente"
                            />
                        </div>
                        <Link href="/" className="ml-4">Pacientes</Link>
                    </li>

                    <li className="my-2 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 mr-2 ml-2">
                            <Image
                                width={25}
                                height={25}
                                src="/assets/mensage.webp"
                                alt="icon mensajes"
                            />
                        </div>
                        <Link href="/" className="ml-2">Mensajes</Link>
                    </li>

                    <li className="my-2 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 mr-2 ml-2">
                            <Image
                                width={30}
                                height={30}
                                src="/assets/ajustes.png"
                                alt="icon ajustes"
                            />
                        </div>
                        <Link href="/" className="ml-2">Ajustes</Link>
                    </li>
                </ul>

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

