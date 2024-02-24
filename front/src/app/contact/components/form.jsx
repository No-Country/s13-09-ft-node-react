"use client"
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
export function FormComponent() {
    const [value, setValue] = useState()

    return <form className="flex flex-col gap-4">
        <div className="flex justify-between gap-2">
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Maria" className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" required/>
            </div>
            <div>
                <label htmlFor="lastName">Apellido</label>
                <input type="text" name="lastName" id="lastName" placeholder="Gomez" className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" required/>
            </div>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="tunombre@hotmail.com" className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" required/>
        </div>
        <div>
            <label htmlFor="tlf">Número celular</label>
            {/* <input type="number" name="tlf" id="tlf" placeholder="+593 96 698 8754" className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" /> */}
            <PhoneInput
       
                placeholder="Enter phone number"
                value={value}
                onChange={(e) => setValue(e)}
                className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2"
                />
        </div>
        <div>
            <label htmlFor="comentario">Comentario</label>
            <textarea  id="comentario"  className="block h-[120px] max-h-[120px] w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" required/>
        </div>
        <div className="flex gap-2">
            <input type="checkbox" required/>
            <label htmlFor="checkbox" className="block">Estoy de acuerdo con la política de privacidad</label>
        </div>
        <div>
            <button className="w-full h-[48px] max-md:h-[40px] text-white border-[#576eef] bg-gradient-to-l from-[#1745E8] to-[#06207C] hover:opacity-90 rounded-lg font-bold">Enviar</button>
        </div>
    </form>
}