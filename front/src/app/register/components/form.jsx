"use client";
import { useState } from "react";
import baseURL from '../../utils/baseUrl';
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { displayFailedMessage, displaySuccessMessage } from "../../components/Toastify/Toastify";

export function FormLogin() {
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    identity_card: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hola')
    try {
      const response = await axios.post(
        `${baseURL}/patients/register`,
        formData
      );
      displaySuccessMessage("Usuario Registrado 👌")
      console.log(response.data);
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      displayFailedMessage("Hubo un error al registrar al usuario 😕")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 mt-6 flex flex-col gap-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="h-12 w-full rounded-md border border-gray-300 px-4 focus:border-blue-500 focus:outline-none"
        placeholder="Nombre"
      />
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        className="h-12 w-full rounded-md border border-gray-300 px-4 focus:border-blue-500 focus:outline-none"
        placeholder="Apellido"
      />
      <input
        type="text"
        name="identity_card"
        value={formData.identity_card}
        onChange={handleChange}
        className="h-12 w-full rounded-md border border-gray-300 px-4 focus:border-blue-500 focus:outline-none"
        placeholder="Documento"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="h-12 w-full rounded-md border border-gray-300 px-4 focus:border-blue-500 focus:outline-none"
        placeholder="Email"
      />
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="h-12 w-full rounded-md border border-gray-300 px-4 focus:border-blue-500 focus:outline-none"
        placeholder="Teléfono"
      />
      <div className="flex items-center rounded-md border border-gray-300 bg-white">
        <input
          type={isOpenPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="h-12 w-full appearance-none border-none  px-4 focus:outline-none"
          placeholder="Contraseña"
        />

        {isOpenPassword ? (
          <button type="button" onClick={() => setIsOpenPassword(false)}>
            <img
              src="/eye-open.svg"
              alt="Mostrar contraseña"
              className="ml-2 mr-2 cursor-pointer"
              width={23}
              height={16}
            />
          </button>
        ) : (
          <button type="button" onClick={() => setIsOpenPassword(true)}>
            <img
              src="/eye-close.svg"
              alt="Mostrar contraseña"
              className="ml-2 mr-2 cursor-pointer"
              width={23}
              height={16}
            />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="h-[50px] bg-gradient-to-r from-[#0234A1] to-[#415DF9] text-xl font-bold text-white hover:opacity-90"
      >
        Regístrate
      </button>
      <ToastContainer style={{ marginTop: "20px" }} />
    </form>
  );
}
