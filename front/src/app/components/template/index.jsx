"use client"
import { useEffect, useState } from "react";
import Link from "next/link"
import { Inter } from "next/font/google";
const inter = Inter({subsets: ['latin'], weight: '500'});

export function TemplateCartDashBoard({ imgSvg, title }) {
    return <Link href={"/createTurn"} className="text-black flex items-center justify-between p-4 border-[1px] border-[#ddd] rounded-lg w-[400px] h-[112px] max-md:w-[350px] max-md:h-[90px] shadow-[0_0_5px_1px_#ddd] hover:scale-105">
        <div className="flex gap-4 items-center">
            <img src={imgSvg} alt={title} />
            <h2 className="text-xl text-[#111928]">{title}</h2>
        </div>
        <div>
            <img src="/arrow-right.svg" alt="arrowRight" />
        </div>
    </Link>
}

export function TemplateCartService({imgSvg, title,description}) {
    return <div href={"/"} className="text-center text-black flex flex-col gap-4  items-center justify-between p-4 border-[1px] border-[#ddd] rounded-lg w-[301px] h-[185px] shadow-[0_0_5px_1px_#ddd] ">
        <div className="flex gap-4 items-center justify-center  w-[76px] h-[76px] bg-[#01519026] rounded-full ">
            <img src={imgSvg} alt={title} />
        </div>
        <div>
        <h2 className="font-semibold text-[#111928]">{title}</h2>
        <p className="text-[0.8rem]">{ description}</p>
</div>
    </div>
}

export function TemplateCreateTurn({ title, id, dataDefault, position }) {

    return (<div  className="flex max-md:flex-row-reverse gap-2 items-center hover:opacity-90" id={id}>
        <span  id={id} className={`${inter.className} ${dataDefault ? "bg-[#015190]" : "bg-[#9E9E9E] "} text-white  h-[30px] w-[30px]  rounded-full flex justify-center items-center`}>{position}</span>
        <p  id={id} className={`${inter.className}  ${dataDefault ?" text-[#015190]" :" text-[#9E9E9E]"}  text-[#015190]`}>{ title}</p>
    </div>)
}

export function TemplateInputCreateTurn({ type ,dataArray,modData,dataDefault}) {
    const [selectedEspecialidad, setSelectedEspecialidad] = useState(dataDefault);
    useEffect(() => {
      modData(selectedEspecialidad)
    },[selectedEspecialidad])
    const handleEspecialidadChange = (e) => {
      setSelectedEspecialidad(e.target.value);
    };
  
    const arrowColor = selectedEspecialidad ? 'text-black' : 'text-gray-500';

    return (
      <div className={`relative w-full max-lg:w-[90%] ${arrowColor}`}>
        <select
          id={type}
          value={selectedEspecialidad}
          onChange={handleEspecialidadChange}
          className="w-full border-[1px] border-gray-500 p-4 rounded-lg appearance-none"
        >
          <option value="" disabled className="text-[#757575]">
            {type}
          </option>
          {dataArray.map((especialidad, index) => (
            <option key={index} value={especialidad.name}>
              {especialidad.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className={`w-5 h-5 ${arrowColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>)
}
