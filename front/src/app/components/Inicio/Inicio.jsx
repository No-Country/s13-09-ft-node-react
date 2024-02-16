import React from "react";
import Image from "next/image";

const Inicio = () => {
  return (
    <div>
      <div className="relative mx-auto my-4">
        <Image
          src="/banner-home.jpg"
          width={1366}
          height={210}
          alt="banner-home"
          className="w-screen"
        />
        <div className="absolute inset-0 mx-24 flex items-center text-black">
          <div className="w-4/12 text-start">
            <h2 className="my-4 text-3xl font-semibold">
              Tenemos una amplia infraestructura de servicios médicos internos.
            </h2>
            <p className="text-xl">
              La mejor calidad de Sanatorios en Argentina, preparados para
              cuidarte.
            </p>
          </div>
        </div>
      </div>
      <h4 className="mx-24 my-10 text-2xl font-semibold text-blue-600 underline">
        Centros Médicos de Excelencia
      </h4>
      <div className="mx-8 my-12 grid grid-cols-4 gap-10 text-black">
        <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
          <Image
            src="/palermo.jpg"
            width={297}
            height={237}
            alt="palermo"
            className="m-2 rounded-lg"
          />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Palermo</p>
          <div className="mb-2 flex justify-center">
            <Image src="/location.svg" width={14} height={20} alt="pin" />
            <p className="ml-2 text-sm text-gray-400">Av. Cerviño 4720, CABA</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
          <Image
            src="/mitre.jpg"
            width={297}
            height={237}
            alt="mitre"
            className="m-2 rounded-lg"
          />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Mitre</p>
          <div className="mb-2 flex justify-center">
            <Image src="/location.svg" width={14} height={20} alt="pin" />
            <p className="ml-2 text-sm text-gray-400">
              Bartolomé Mitre 2553, CABA
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
          <Image
            src="/quilmes.jpg"
            width={297}
            height={237}
            alt="quilmes"
            className="m-2 rounded-lg"
          />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Quilmes</p>
          <div className="mb-2 flex justify-center">
            <Image src="/location.svg" width={14} height={20} alt="pin" />
            <p className="ml-2 text-sm text-gray-400">
              C. Pellegrini 499, Quilmes
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
          <Image
            src="/san-isidro.png"
            width={297}
            height={237}
            alt="sanisidro"
            className="m-2 rounded-lg"
          />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">San Isidro - Thames</p>
          <div className="mb-2 flex justify-center">
            <Image src="/location.svg" width={14} height={20} alt="pin" />
            <p className="ml-2 text-sm text-gray-400">
              Fondo de la Legua 851, San Isidro
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
          <Image
            src="/san-isidro-2.png"
            width={297}
            height={237}
            alt="sanisidro2"
            className="m-2 rounded-lg"
          />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">San Isidro - Fleming</p>
          <div className="mb-2 flex justify-center">
            <Image src="/location.svg" width={14} height={20} alt="pin" />
            <p className="ml-2 text-sm text-gray-400">
              Av. Fleming 590, San Isidro
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
          <Image
            src="/ramos.jpg"
            width={297}
            height={237}
            alt="ramos"
            className="m-2 rounded-lg"
          />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Ramos Mejía</p>
          <div className="mb-2 flex justify-center">
            <Image src="/location.svg" width={14} height={20} alt="pin" />
            <p className="ml-2 text-sm text-gray-400">
              Av. Rivadavia 13280, Ramos Mejía
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
          <Image
            src="/dupuytren.jpg"
            width={297}
            height={237}
            alt="dupuytren"
            className="m-2 rounded-lg"
          />
          <p>Sanatorio</p>
          <p className="font-bold">Dupuytren</p>
          <div className="mb-2 flex justify-center text-sm">
            <Image src="/location.svg" width={14} height={20} alt="pin" />
            <p className="ml-2 text-gray-400">Av. Belgrano 3402, CABA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
