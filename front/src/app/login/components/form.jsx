'use client';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { displaySuccessMessage, displayFailedMessage } from '../../components/Toastify/Toastify';
import baseURL from '../../utils/baseUrl';

export function FormLogin() {
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email,
        password
      });
      console.log('Login success:', response.data);
      displaySuccessMessage("Sesión Iniciada 👌")
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 3000);
    } catch (error) {
      console.error('Login error:', error);
      displayFailedMessage("Hubo un problema para iniciar sesión 😕")

    }
  };

  return (
    <form action='' className='flex flex-col gap-4 mt-8 mb-8' onSubmit={handleSubmit}>
      <input
        type='email'
        className='w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        placeholder='HealthMate@gmail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='flex items-center bg-white border border-gray-300 rounded-md'>
        <input
          type={isOpenPassword ? 'text' : 'password'}
          className='w-full h-12 px-4 appearance-none  focus:outline-none border-none'
          placeholder='******'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isOpenPassword ? (
          <button type='button' onClick={() => setIsOpenPassword(false)}>
            <img
              src='/eye-open.svg'
              alt='Mostrar contraseña'
              className='ml-2 cursor-pointer mr-2'
              width={23}
              height={16}
            />
          </button>
        ) : (
          <button type='button' onClick={() => setIsOpenPassword(true)}>
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
        className='text-xl font-bold bg-gradient-to-r from-[#0234A1] to-[#415DF9] text-white h-[50px] hover:opacity-90'>
        Ingresar
      </button>
      <ToastContainer style={{ marginTop: "20px" }} />
    </form>
  );
}
