import React from "react";
import { Footer } from "../components/footer";

export default function SobreNosotros() {
  return (
    <>
      <div className="text-black">NavBar</div>

      <div className="font-Inter text-black">
        <div className="flex h-[250px] w-full bg-[url('/nosotros.png')] bg-cover bg-center">
          <div className="flex flex-col gap-4 pl-4 pt-16 font-Inter text-4xl font-bold text-primary">
            <h2>Transformá tu salud.</h2>
            <h2>Descubrí HealthMate</h2>
          </div>
        </div>

        <div className="mb-32 flex flex-col gap-8 px-4 pt-8 text-[18px] font-semibold">
          <p>
            Nuestra misión es brindar atención médica de la más alta calidad,
            centrada en el paciente y basada en los últimos avances médicos y
            tecnológicos. Nos enorgullece ser líderes en el cuidado de la salud,
            ofreciendo un ambiente seguro, acogedor y profesional para nuestros
            pacientes.
          </p>
          <p>
            Nuestro equipo de profesionales altamente calificados, desde médicos
            y enfermeras hasta personal de apoyo, se dedica a proporcionar
            atención compasiva y personalizada a cada individuo que confía en
            nosotros. Priorizamos la salud y el bienestar de nuestros pacientes,
            abordando sus necesidades médicas con un enfoque integral y
            multidisciplinario.
          </p>
          <p>
            En nuestras modernas instalaciones, contamos con equipos médicos de
            última generación y adoptamos las prácticas más innovadoras para
            garantizar diagnósticos precisos y tratamientos efectivos. Además,
            nos esforzamos por crear un entorno que promueva la comodidad y la
            tranquilidad, brindando a nuestros pacientes la confianza necesaria
            para su recuperación.
          </p>
          <p>
            En HealthMate, creemos en la importancia de la prevención y la
            educación sobre la salud. Ofrecemos programas educativos y servicios
            de atención preventiva para ayudar a nuestros pacientes a mantener
            un estilo de vida saludable y prevenir enfermedades.
          </p>
          <p className="text-primary">
            Bienvenido a un lugar donde su salud es nuestra prioridad.
            HealthMate, cuidando de usted, siempre.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
