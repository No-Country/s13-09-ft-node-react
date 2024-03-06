import { useState } from "react"
import Link from "next/link"
export function Perfil({ data }) {
    const [isOpenUser, setIsOpenUser] = useState(false)
    const handleCerrar = (e) => {
        e.preventDefault()
        localStorage.removeItem("id")
        window.location.href = '/';
    }
    return <div className="relative">
    <button onClick={()=>setIsOpenUser(!isOpenUser)} className="text-black flex gap-2 items-center px-3 py-2 max-md:flex-row-reverse	justify-start">
        <h2>{data.patient.name}</h2>
        <div className="rounded-full border-[1px] border-[#57bcff] p-2 bg-[#ddd]">
            <img src="/user.svg" alt="user" className="w-[28px] h-[28px]"/>
        </div>
        </button>
        {
            isOpenUser ? 
                <div className="absolute right-0 left-0 font-semibold top-[90%] z-[110] bg-gradient-to-t from-[#415DF9]  to-[#1745E8] rounded-lg p-2 flex flex-col gap-2">
                    <Link href="/dashboard" className="hover:opacity-80">Panel</Link>
                    <Link href="/portales/dashboardPatient" className="hover:opacity-80">Historial</Link>
                    <button onClick={handleCerrar} className="text-[#ff5656] font-bold hover:opacity-80">Cerrar Sesión</button>
                </div>
            : null
        }
    </div>
}