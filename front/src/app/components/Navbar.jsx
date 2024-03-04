"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    const closeNavbar = () => {
        setIsClick(false);
    };

    return (
        <nav className="bg-white fixed right-0 left-0 top-0 border-b-[1px] border-b-[#ddd] z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <div className="mr-2">
                                    <Image
                                        width={80}
                                        height={80}
                                        src="/assets/Logo.png"
                                        alt="logo de la clínica"
                                    />
                                </div>
                            </Link>
                        </div>
                        <p className="text-blue-600 text-lg font-semibold">HealthMate</p>
                    </div>
                    <div className="hidden md:flex">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href="/nosotros" onClick={closeNavbar}>
                                <div className="text-slate-600 hover:text-slate-50 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">
                                    Nosotros
                                </div>
                            </Link>
                            <Link href="/services" onClick={closeNavbar}>
                                <div className="text-slate-600  hover:text-slate-50 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">
                                    Servicios
                                </div>
                            </Link>
                            <Link href="/contact" onClick={closeNavbar}>
                                <div className="text-slate-600 hover:text-slate-50  px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">
                                    Contacto
                                </div>
                            </Link>
                            <Link href="/doctors" onClick={closeNavbar}>
                                <div className="text-slate-600 hover:text-slate-50 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">
                                    Profesionales
                                </div>
                            </Link>
                            <Link href="/login" onClick={closeNavbar}>
                                <div className="text-slate-600 hover:text-slate-50 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">
                                    Ingresar
                                </div>
                            </Link>
                            <Link href="/register" onClick={closeNavbar}>
                                <div className="text-slate-600 hover:text-slate-50 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">
                                    Registrarse
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isClick ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/about" onClick={closeNavbar}>
                        <div className="text-slate-600 hover:text-slate-50 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Nosotros
                        </div>
                    </Link>
                    <Link href="/services" onClick={closeNavbar}>
                        <div className="text-slate-600 hover:text-slate-50 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Servicios
                        </div>
                    </Link>
                    <Link href="/contact" onClick={closeNavbar}>
                        <div className="text-slate-600 hover:text-slate-50 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Contacto
                        </div>
                    </Link>
                    <Link href="/doctors" onClick={closeNavbar}>
                                <div className="text-slate-600 hover:text-slate-50 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600">
                                    Profesionales
                                </div>
                    </Link>
                    <Link href="/login" onClick={closeNavbar}>
                        <div className="text-slate-600 hover:text-slate-50 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Ingresar
                        </div>
                    </Link>
                    <Link href="/register" onClick={closeNavbar}>
                        <div className="text-slate-600 hover:text-slate-50 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Registrarse
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
