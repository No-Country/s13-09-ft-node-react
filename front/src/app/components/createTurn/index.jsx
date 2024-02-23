"use client"
import { useState } from "react";
import { TemplateCreateTurn, TemplateInputCreateTurn } from "../template";
import {Mapbox} from "../mapbox"
import Link from "next/link";
import Calendar from 'react-calendar';
import { especialidades,hospitalDirection,practicaMedica } from "../createTurn/turn";

import 'react-calendar/dist/Calendar.css';
import "./style.css"

const createTurn = [{ title: "Especialidad y lugar",default:true,id:"especialidad" }, { title: "Profesional y horario",default:false,id:"profesional" }, { title: "Confirmacion",default:false,id:"confirmacion" }]

export function CreateTurnComponent() {
    const [isOpenEspecialidad, setIsOpenEspecialidad] = useState(true)
    const [isOpenProfesional,setIsOpenProfesional]= useState(false)
    const [isOpenConfirmacion, setIsOpenConfirmacion] = useState(false)
    const [especialidad, setEspecialidad] = useState("")
    const [practMedica, setPractMedica] = useState("")
    const [centroMedico, setCentroMedico] = useState("")
    const [isSelectDoctor, setisSelectDoctor] = useState("")
    const [isSelectHorario,setisSelectHorario]= useState("")
    
    const [value, onChange] = useState(new Date());
    const handleVolver = (e) => {
        e.preventDefault()
        if (isOpenProfesional) {
            setIsOpenEspecialidad(true)
            setIsOpenProfesional(false)
            setIsOpenConfirmacion(false)
            return  
        }
        setIsOpenEspecialidad(false)
        setIsOpenProfesional(true)
        setIsOpenConfirmacion(false)
    }
    const handleClickDoct = (e) => {
        e.preventDefault();
        setisSelectDoctor(e.target.id)
    }
    const handleClickHorario = (e) => {
        e.preventDefault();
        setisSelectHorario(e.target.id)
    }
    const opciones = {
        weekday: 'long',  
        year: 'numeric',  
        month: 'long',   
        day: 'numeric'    
    };
    const handleConfirmar = (e) => {
        e.preventDefault()
        setIsOpenProfesional(true);
        setIsOpenEspecialidad(false);
        setIsOpenConfirmacion(false)
        // fetch('https://jsonplaceholder.typicode.com/posts', {
            
        // })
        // .then((response) => response.json())
        // .then((json) => console.log(json));
    }
    return <div className="text-black p-4 pt-8 pb-8 h-full flex flex-col justify-between gap-[5rem] max-w-[1080px] m-auto mt-[3.3rem] mb-[3.3rem] max-md:gap-12">
        <div className="flex justify-between gap-2 items-center">
            {
                isOpenConfirmacion || isOpenProfesional ?  <button onClick={handleVolver} className="flex gap-2 items-center hover:opacity-90 text-[#111827]"><img src="/arrow-left.svg" alt="arrow-left" />Volver</button> : <Link href={"/dashboard"} className="flex gap-2 items-center hover:opacity-90 text-[#111827]"><img src="/arrow-left.svg" alt="arrow-left" />Volver</Link>
           }
            <div className="flex gap-8 justify-end  items-center flex-wrap max-md:gap-4 max-md:justify-end">
                {
                    createTurn.map((item,position) => (
                        <TemplateCreateTurn key={item.id} title={item.title} position={position+1} dataDefault={item.id == "especialidad" ? isOpenEspecialidad : item.id == "profesional" ? isOpenProfesional : item.id == "confirmacion" ? isOpenConfirmacion : false} id={item.id}  />
                    ))
                }
            </div>
       </div>
        { isOpenEspecialidad ? <>
            <div className="flex flex-col gap-4 justify-center items-center ">
                <TemplateInputCreateTurn type="Especialidad" dataArray={especialidades} dataDefault={especialidad } modData={(dataMod)=>setEspecialidad(dataMod)}/>
                <TemplateInputCreateTurn type="Práctica Médica" dataArray={practicaMedica} dataDefault={practMedica } modData={(dataMod)=>setPractMedica(dataMod)}/>
                <TemplateInputCreateTurn type="Centro Médico" dataArray={hospitalDirection} dataDefault={centroMedico } modData={(dataMod)=>setCentroMedico(dataMod)}/>
            </div>
            <div className="flex gap-4 flex-wrap justify-between items-center max-lg:justify-center">
                <Link href={"/dashboard"} className="flex justify-center items-center w-[510px] h-[60px] max-md:w-[90%] max-md:h-[40px] text-[#015190] border-[1px] border-[#015190] hover:opacity-90 rounded-lg ">Cancelar</Link>
                <button disabled={especialidad && practMedica && centroMedico ? false:true } className={`${especialidad && practMedica && centroMedico ? "bg-[#015190]":"bg-gray-500 cursor-not-allowed"} w-[510px] h-[60px] max-md:w-[90%] max-md:h-[40px] text-white  hover:opacity-90 rounded-lg`} onClick={()=>{setIsOpenProfesional(true),setIsOpenEspecialidad(false),setIsOpenConfirmacion(false)}}>Continuar</button>
            </div></> : null}
        {isOpenProfesional ? <>
            <div className="flex  gap-4 max-md:gap-8 justify-between  max-md:justify-center max-md:items-center flex-wrap">
                <div className="flex flex-col gap-4 w-[40%] items-start">
                    <button onClick={handleClickDoct}  id="Valeria Montes" className={` w-full ${isSelectDoctor == "Valeria Montes"?"text-[#3758F9] bg-[#F5F7FD] text-center":"text-start text-[#637381] bg-transparent"}`}>Valeria Montes</button>
                    <button onClick={handleClickDoct}  id="Jose Guillermo Obregon" className={` w-full ${isSelectDoctor == "Jose Guillermo Obregon"?"text-[#3758F9] bg-[#F5F7FD] text-center":"text-start text-[#637381] bg-transparent"}`}>Jose Guillermo Obregon</button>
                    <button onClick={handleClickDoct} id="Rafael Soto" className={` w-full ${isSelectDoctor == "Rafael Soto"?"text-[#3758F9] bg-[#F5F7FD] text-center":"text-start text-[#637381] bg-transparent"}`}>Rafael Soto</button>
                    <button onClick={handleClickDoct} id="Isabella Ramírez" className={` w-full ${isSelectDoctor == "Isabella Ramírez"?"text-[#3758F9] bg-[#F5F7FD] text-center":"text-start text-[#637381] bg-transparent"}`}>Isabella Ramírez</button>
                </div>
                <div className="flex flex-col gap-12">
                    <Calendar onChange={onChange} value={value}   minDate={new Date()} />
                    <div className="flex gap-4 flex-wrap justify-between items-center max-lg:justify-center">
                        {["10:20 hs", "12:00 hs", "14:00 hs"].map(item => <button key={item} id={item} onClick={handleClickHorario} className={`${isSelectHorario == item? "text-[#3758F9] bg-[#F5F7FD] text-center" : "text-start text-[#637381] bg-[rgba(61,162,203,0.2)]"} hover:opacity-90 flex justify-center items-center  w-[87px] h-[29px] text-center`}>{ item}</button>)}
                    </div>
                    <div className="flex gap-4 flex-wrap justify-between items-center max-lg:justify-center">
                        <button disabled={isSelectHorario &&isSelectDoctor && value? false:true } className={`${isSelectHorario && isSelectDoctor && value ? "bg-[#015190]":"bg-gray-500 cursor-not-allowed"} w-[510px] h-[60px] max-md:w-[90%] max-md:h-[40px] text-white hover:opacity-90 rounded-lg `} onClick={()=>{setIsOpenProfesional(false),setIsOpenEspecialidad(false),setIsOpenConfirmacion(true)}}>Reservar</button>
                    </div>
                </div>
            </div>
          </> : null}
        {isOpenConfirmacion ? <>
            <div className="flex flex-col gap-4 justify-start items-start ">
                <div className="flex gap-8 items-center bg-[#FAFAFA] w-full p-4 ">
                    <img src="/calendar-turn.svg" alt="calendar-turn" />
                    <div>
                        <h3 className="font-semibold text-xl max-md:text-[1.1rem]">{value.toLocaleDateString('es-ES', opciones).replace(/\b\w/g, l => l.toUpperCase())} </h3>
                        <span className="text-[#2E2E2E]">{ isSelectHorario}</span>
                    </div>
                </div>
                <div className="flex gap-8 items-center bg-[#FAFAFA] w-full p-4 ">
                    <img src="/ubication-turn.svg" alt="ubication-turn" />
                    <div>
                        <h3 className="font-semibold text-xl max-md:text-[1.1rem]">{centroMedico }</h3>
                        <span className="text-[#2E2E2E]">{ hospitalDirection.find(item=>item.name == centroMedico).calle}</span>
                    </div>
              
                </div>
                <div className="w-full">
                    <Mapbox ubication={hospitalDirection.find(item=>item.name == centroMedico).ubi}  direction={centroMedico}></Mapbox>
                </div>
                <div className="flex gap-8 items-center bg-[#FAFAFA] w-full p-4 ">
                    <img src="/user-turn.svg" alt="user-turn" />
                    <div>
                        <h3 className="font-semibold text-xl max-md:text-[1.1rem]">{isSelectDoctor }</h3>
                        <span className="text-[#2E2E2E]">{especialidad}</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-between items-center max-lg:justify-center">
                <Link href={"/dashboard"} className="max-md:w-full flex justify-center items-center w-[510px] h-[60px]  max-md:h-[40px] text-[#015190] border-[1px] border-[#015190] hover:opacity-90 rounded-lg ">Cancelar</Link>
                <button onClick={handleConfirmar} className="max-md:w-full w-[510px] h-[60px] max-md:h-[40px] text-white bg-[#015190] hover:opacity-90 rounded-lg ">Confirmar</button>
            </div>
        </> : null}
    </div>
}
