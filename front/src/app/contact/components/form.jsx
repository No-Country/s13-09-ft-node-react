"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
export function FormComponent() {
    const router = useRouter();
    const [value, setValue] = useState()
    const [openCart, setOpenCart] = useState(false)

    return <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setOpenCart(true) }}>
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
        {
            openCart ? <div className='fixed inset-0 z-10 backdrop-blur-2xl	 '>
                <div className='w-[90%] h-[90%] relative bg-white rounded-lg flex justify-center flex-col items-center gap-8  p-4 text-center m-auto mt-8'>
                    <button onClick={()=>{setOpenCart(false);location.reload()}} className='absolute top-[2%] right-[2%]'>  <img src="/close.svg" alt="close" width={40}/></button>
                    <div>
                        <img src="/check.svg" alt="check" />
                    </div>
                    <h2 className='text-2xl font-semibold'>Gracias por ponerte en contacto con nosotros </h2>
                    <p>Tu opinión es muy valiosa para nosotros y nos esforzaremos por responderte lo más pronto posible</p>
                </div>
            </div>: null
        }
    </form>
}