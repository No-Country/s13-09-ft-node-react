"use client"
import React, {useState} from "react";
import Image from "next/image";
import HospitalCard from "../HospitalCard";
const Inicio = () => {


  const [hospitales, setHospitales] = useState([
    {
      image: "/palermo.jpg",
      name: "Sanatorio de la Trinidad",
      place: "Palermo",
      location: "Av. Cerviño 4720, CABA",
    },
    {
      image: "/mitre.jpg",
      name: "Sanatorio de la Trinidad",
      place: "Mitre",
      location: "Bartolomé Mitre 2553, CABA",
    },
    {
      image: "/quilmes.jpg",
      name: "Sanatorio de la Trinidad",
      place: "Quilmes",
      location: "C. Pellegrini 499, Quilmes",
    },
    {
      image: "/san-isidro.png",
      name: "Sanatorio de la Trinidad",
      place: "San Isidro - Thames",
      location: "Fondo de la Legua 851, San Isidro",
    },
    {
      image: "/san-isidro-2.png",
      name: "Sanatorio de la Trinidad",
      place: "San Isidro - Fleming",
      location: "Av. Fleming 590, San Isidro",
    },
    {
      image: "/ramos.jpg",
      name: "Sanatorio de la Trinidad",
      place: "Ramos Mejía",
      location: "Av. Rivadavia 13280, Ramos Mejía",
    },
    {
      image: "/dupuytren.jpg",
      name: "Sanatorio",
      place: "Dupuytren",
      location: "Av. Belgrano 3402, CABA",
    },
  ]);

  return (
    <div>
   <div className="relative mx-auto my-4">
      <Image
        src="/banner-home.jpg"
        width={1366}
        height={210}
        alt="banner-home"
        className="w-screen hidden md:block"
      />
      <div className="md:absolute inset-0 mx-4 md:mx-24 flex items-center text-black text-center">
        <div className="w-full md:w-4/12 text-center md:text-start">
          <h2 className="my-4 text-3xl font-semibold">
            Tenemos una amplia infraestructura de servicios médicos internos.
          </h2>
          <p className="text-xl">
            La mejor calidad de Sanatorios en Argentina, preparados para
            cuidarte.
          </p>
        </div>
      </div>
    </div>
      <h4 className="mx-24 my-10 text-2xl font-semibold text-blue-600 underline text-center md:text-start">
        Centros Médicos de Excelencia
      </h4>
      <div className="mx-8 my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-black">
        {hospitales.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
