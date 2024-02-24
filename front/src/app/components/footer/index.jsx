import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#415DF9]  to-[#1745E8] p-8 pl-4 pr-4 text-transparent text-white">
      <div className="mb-8 mt-8 flex justify-around max-md:flex-col">
        <div>
          <Link href="/">
            <img src={"/logoFooter.svg"} alt="logoFooter" width={"100%"} />
          </Link>
        </div>
        <div className="max-md:mt-4">
          <h2 className="font-bold">Recursos</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Política y privacidad{" "}
            </Link>
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Preguntas frecuentes
            </Link>
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Contacto
            </Link>
          </div>
        </div>
        <div className="max-md:mt-4">
          {" "}
          <h2 className="font-bold">Servicios</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Sobre nosotros
            </Link>
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Sucursales
            </Link>
          </div>
        </div>
        <div className="max-md:mt-4">
          <h2 className="font-bold">Social</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Github
            </Link>
            <Link href={"/"} className="opacity-70  hover:opacity-90">
              Linkedin
            </Link>
          </div>
        </div>
        <div className="max-md:mt-4">
          <h2 className="font-bold">¿Necesitás ayuda?</h2>
          <div className="mt-2 flex flex-col gap-2">
            <Link
              href={"/login"}
              className="flex items-center  gap-2 rounded-lg border-[1px]  border-[#576eef] bg-gradient-to-t from-[#1745E8] to-[#06207C] p-6  pb-[0.3rem] pt-[0.3rem] hover:opacity-90"
            >
              <img src="/whatsaap.svg" alt="whatsaap" />
              Whatsaap
            </Link>
            <Link
              href={"/login"}
              className="flex items-center  gap-2 rounded-lg border-[1px]  border-[#576eef] bg-gradient-to-t from-[#1745E8] to-[#06207C] p-6 pb-[0.3rem] pt-[0.3rem] hover:opacity-90"
            >
              <img src="/help.svg" alt="help" />
              Ayuda
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t-[1px]  border-t-[#fff] pt-4">
        <p>Derechos reservados</p>
        <div className="flex items-center  gap-4">
          <Link href={"https://linkedin.com"}>
            <img src="/linkedin.svg" alt="linkedin" />
          </Link>
          <Link href={"https://github.com"}>
            <img src="/github.svg" alt="github" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
