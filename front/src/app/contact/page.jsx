import { Footer } from "../components/footer"
import Navbar from "../components/Navbar"
import { Mapbox } from "../components/mapbox"
import { FormComponent } from "./components/form"

export default function Contact() {
    return <>
        <Navbar></Navbar>
        <div className="text-black max-w-[1295px] m-auto mt-16 bg-[#fff] max-xl:w-[95%]">
            <div className="relative">
                <img src="/contact-img.svg" alt="services" />
                <h2 className="text-[#1745E8] absolute right-[5%] top-[40%] text-4xl font-semibold leading-normal max-md:top-[20%] max-md:text-2xl">Contáctanos</h2>
            </div>
            <div className="mt-8 mb-8 flex max-md:flex-wrap gap-8">
                <div className="flex flex-col justify-between gap-4 w-3/4 max-md:w-full p-4 max-md:p-2">
                    <div className="">
                        <h2 className="text-2xl font-semibold text-[#101828]">Ponte en contacto</h2>
                        <p className="text-[#667085]">A nuestro equipo le encantaría conocerte.</p>
                    </div>
                    <div>
                    <FormComponent/>
                    </div>
                </div>
                <div className="w-full p-2 ">
                    <Mapbox height={"100%"} ubication={[-34.5750938, -58.4240719]}  direction={"Sanatorio de la Trinidad -Palermo"}></Mapbox>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
}