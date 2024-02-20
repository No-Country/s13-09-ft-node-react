'use client';
import {useState} from 'react';
export function FormLogin() {
  const [isOpenPassword, setisOpenPassword] = useState(false);

  return (
    <form action='' className='flex flex-col gap-4 mt-6 mb-8'>
      <input
        type='email'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='Email'
      />
      <div className='flex items-center bg-white border border-gray-300 rounded-md'>
        <input
          type={isOpenPassword ? 'text' : 'password'}
          className='w-full h-12 px-4 appearance-none  focus:outline-none border-none'
          placeholder='Contraseña'
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
      <input
        type='number'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='Edad'
      />
      <input
        type='gender'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='Genero'
      />
      <input
        type='number'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='Telefono'
      />
      <input
        type='text'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='Dirección'
      />
      <input
        type='text'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='Provincia'
      />
      <input
        type='number'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='Codigo Postal'
      />
      <button
        type='submit'
        className='text-xl font-bold bg-gradient-to-r from-[#0234A1] to-[#415DF9] text-white h-[50px] hover:opacity-90'>
        Registrate
      </button>
    </form>
  );
}
