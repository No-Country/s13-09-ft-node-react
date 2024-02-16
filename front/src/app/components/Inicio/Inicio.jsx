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
        <div className="absolute mx-24 inset-0 flex items-center text-black">
          <div className="w-4/12 text-start">
            <h2 className="text-3xl my-4 font-semibold">
              Tenemos una amplia infraestructura de servicios médicos internos.
            </h2>
            <p className="text-xl">
              La mejor calidad de Sanatorios en Argentina, preparados para
              cuidarte.
            </p>
          </div>
        </div>
      </div>
      <h4 className="mx-24 my-10 text-blue-600 text-2xl font-semibold underline">
        Centros Médicos de Excelencia
      </h4>
      <div className="mx-8 my-12 grid grid-cols-4 gap-10 text-black">
        <div className="flex flex-col rounded-lg shadow-xl justify-center mx-auto text-center">
          <Image src="/palermo.jpg" width={297} height={237} alt="palermo" className="rounded-lg m-2" />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Palermo</p>
          <div>
            <p className="text-gray-400">Av. Cerviño 4720, CABA</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl justify-center mx-auto text-center">
          <Image src="/mitre.jpg" width={297} height={237} alt="mitre" className="rounded-lg m-2" />
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Mitre</p>
          <div>
            <p className="text-gray-400">Bartolomé Mitre 2553, CABA</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl justify-center mx-auto text-center">
          <Image src="/quilmes.jpg" width={297} height={237} alt="quilmes" className="rounded-lg m-2"/>
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Quilmes</p>
          <div>
            <p className="text-gray-400">Av. Cerviño 4720, CABA</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl justify-center mx-auto text-center">
          <Image src="/san-isidro.png" width={297} height={237} alt="sanisidro" className="rounded-lg m-2"/>
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">San Isidro - Thames</p>
          <div>
            <p className="text-gray-400">Av. Cerviño 4720, CABA</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl justify-center mx-auto text-center">
          <Image src="/san-isidro-2.png" width={297} height={237} alt="sanisidro2" className="rounded-lg m-2"/>
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">San Isidro - Fleming</p>
          <div>
            <p className="text-gray-400">Av. Cerviño 4720, CABA</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl justify-center mx-auto text-center">
          <Image src="/ramos.jpg" width={297} height={237} alt="ramos" className="rounded-lg m-2"/>
          <p>Sanatorio de la Trinidad</p>
          <p className="font-bold">Ramos Mejía</p>
          <div>
            <p className="text-gray-400">Av. Cerviño 4720, CABA</p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-xl justify-center mx-auto text-center">
          <Image src="/dupuytren.jpg" width={297} height={237} alt="dupuytren" className="rounded-lg"/>
          <p>Sanatorio</p>
          <p className="font-bold">Dupuytren</p>
          <div>
            <p className="text-gray-400">Av. Cerviño 4720, CABA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;