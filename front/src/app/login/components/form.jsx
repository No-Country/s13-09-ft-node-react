'use client';
import { useState } from 'react';
export  function FormLogin() {
  const [isOpenPassword, setisOpenPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault()

  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8 mb-8'>
      <input
        type='email'
        name='email'
        onChange={(e)=>setEmail(e.target.value)}
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='HealthMate@gmail.com'
      />
      <div className='flex items-center bg-white border border-gray-300 rounded-md'>
        <input
          type={isOpenPassword ? 'text' : 'password'}
          onChange={(e)=>setPassword(e.target.value)}
          name='password'
          className='w-full h-12 px-4 appearance-none  focus:outline-none border-none'
          placeholder='******'
        />

        {isOpenPassword ? (
          <button type='button' onClick={() => setisOpenPassword(false)}>
            <img
              src='/eye-open.svg'
              alt='Mostrar contraseña'
              className='ml-2 cursor-pointer mr-2'
              width={23}
              height={16}
            />
          </button>
        ) : (
          <button type='button' onClick={() => setisOpenPassword(true)}>
            <img
              src='/eye-close.svg'
              alt='Mostrar contraseña'
              className='ml-2 cursor-pointer mr-2'
              width={23}
              height={16}
            />
          </button>
        )}
      </div>
      <div className='flex justify-end mb-8'>
        <button
          type='button'
          className='border-b-[#9e9e9e] border-b-[1px] hover:opacity-90'>
          ¿Olvidaste tu contraseña?
        </button>
      </div>
      <button
        type='submit'
        disabled={email && password ? false:true }
        className={`${email && password  ? "bg-gradient-to-r from-[#0234A1] to-[#415DF9]":"bg-gray-500 cursor-not-allowed"} text-xl font-bold  text-white h-[50px] hover:opacity-90`}>
        Ingresar
      </button>

    </form>
  );
}
