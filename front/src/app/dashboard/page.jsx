import { TemplateCartDashBoard,TemplateCartService } from "../components/template"
import { Footer } from "../components/footer"
import Navbar from "../components/Navbar"

export const metadata = {
    title: 'Dashboard | HealthMate',
    description: 'Dashboard',
};
  
const dashboard = [{imgSvg:"/turno.svg",title:"Sacar un turno"},{imgSvg:"/tramite.svg",title:"Iniciar un tramite"},{imgSvg:"/cartilla.svg",title:"Cartilla medica",onClick:true}] 
const dashboardService = [{imgSvg:"/doctor.svg",title:"Llamando al Doctor",description:"Realizá consultas médicas por videollamada desde tu celular "},{imgSvg:"/turno.svg",title:"Turnos",description:"Sacá Turnos para nuestros Centros Médicos de forma simple y rápida"},{imgSvg:"/test.svg",title:"Laboratorio",description:"Accedé a los resultados que te realizaste en nuestros Centros "},{imgSvg:"/hospital.svg",title:"Guardia",description:"Sacá turno en la guardia de nuestros Sanatorios "}] 

export default function DashBoard() {
    return <>
        <Navbar/>
        
        <div className="text-black flex flex-col gap-20 m-auto mt-20 mb-8 w-[80%] max-md:w-[95%] max-md:items-center">
            <div className="flex gap-12 flex-col max-md:items-center">
                <h2 className="text-[#0234A1] text-3xl font-semibold ">¡Bienvenido Tomas!</h2>
                <div  className="flex gap-4 flex-wrap max-md:items-center max-md:justify-center">
                    {[1, 2].map((item, position) =>
                        (<div key={position} className="border-[1px] border-gray-400 rounded-lg w-[240px] h-[160px]">
                            <div className="h-[60%] p-4"><h2 className="font-bold">Tomas</h2><p className="text-[#637381]">Dermatologia</p></div>
                            <div className="h-[40%] border-[1px] border-[#0D99FF] bg-[#0234A1] text-white  rounded-br-lg rounded-bl-lg flex items-center"><p className="indent-4">Mier 01 de Marzo</p></div>
                        </div>)
                    )}
            </div>
            </div>
            <div className="flex gap-12 flex-col max-md:items-center">
                <h2 className="text-[#0234A1] text-3xl font-semibold">¿Qué necesitás hoy?</h2>
                <div className="flex gap-8 flex-wrap max-md:items-center max-md:justify-center">
                    {dashboard.map(item => <TemplateCartDashBoard title={item.title} imgSvg={item.imgSvg} key={item.title} onClick={ item.onClick} />)}
                </div>
            </div>
            <div className="flex gap-12 flex-col max-md:items-center">
                <h2 className="text-[#0234A1] text-3xl font-semibold max-md:text-center">Disfrutá de todos nuestros servicios</h2>
                <div className="flex gap-8 flex-wrap max-md:items-center max-md:justify-center">
                    {dashboardService.map(item => <TemplateCartService title={item.title} imgSvg={item.imgSvg} key={ item.title} description={item.description}/>)}
                </div>
            </div>
        </div>
        <Footer/>
    </>
}
