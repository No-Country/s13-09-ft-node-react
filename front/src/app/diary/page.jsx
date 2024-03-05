"use client"
import { Footer } from "../components/footer"
import Navbar from "../components/Navbar"
import {useTurnStore} from "../utils/store"

export default function Diary() {
    const { turn, set } = useTurnStore()
    return <>
        <Navbar></Navbar>
        <div className="text-black max-w-[1295px] p-2 m-auto mt-24 bg-[#fff] max-xl:w-[95%] min-h-[52vh] ">
            <div className="flex gap-8">
              <button className="text-[#015190] font-medium border-b-[1px] border-b-[#015190]">Próximos</button>
              <button>Previos</button>
            </div>
            <div className="mt-8 mb-8 flex max-xl:flex-wrap gap-8">
                {
                    turn.length ? 
                    turn.map((item) => (
                            <div className="w-auto m-auto flex justify-between items-center  border-[1px] border-[#0000001F] rounded-lg text-center max-md:flex-col gap-4 max-md:p-4" key={item.especialidad}>
                                <div className="w-[95px] rounded-lg bg-[#02599E] text-white font-semibold p-4 ">
                                <p>{item.day[0].toLocaleUpperCase()}<br />{item.day[1] }</p>
                                </div>
                                <div  className="">
                                    <h2 className="font-semibold">{item.isSelectHorario}</h2>
                                    <p>Consulta</p>
                                </div>
                                <div  className="">
                                    <h2 className="font-semibold">{item.isSelectDoctor}</h2>
                                    <p>{item.especialidad}</p>
                                </div>
                                <div  className="">
                                    <h2 className="font-semibold">{ item.centroMedico}</h2>
                                <p>{ item.calle}</p>
                                </div>
                                <div className="">
                                <button onClick={() => set((state) => ({
                                    turn: state.turn.filter(i =>  item.especialidad !== i.especialidad
                                    )
                                }))} className="border-[1px] border-[#11182780] font-medium p-4 mr-4 rounded-lg hover:opacity-60">Cancelar</button>
                                </div>
                            </div>
                        ))
                    : "No hay turno "
               }
            </div>
        </div>
        <Footer></Footer>
    </>
}