import Link from "next/link"
export function TempalteCartDashBoard({imgSvg, title}) {
    return <Link href={"/"} className="text-black flex items-center justify-between p-4 border-[1px] border-[#ddd] rounded-lg w-[400px] h-[112px] shadow-[0_0_5px_1px_#ddd] hover:scale-105">
        <div className="flex gap-4 items-center">
            <img src={imgSvg} alt={title} />
            <h2 className="text-xl text-[#111928]">{title}</h2>
        </div>
        <div>
            <img src="/arrow-right.svg" alt="arrowRight" />
        </div>
    </Link>
}

export function TempalteCartService({imgSvg, title,description}) {
    return <div href={"/"} className="text-center text-black flex flex-col gap-4  items-center justify-between p-4 border-[1px] border-[#ddd] rounded-lg w-[301px] h-[190px] shadow-[0_0_5px_1px_#ddd] ">
        <div className="flex  items-center justify-center  w-[76px] h-[76px] bg-[#01519026] rounded-full ">
            <img src={imgSvg} alt={title} />
        </div>
        <div>
        <h2 className="font-semibold text-[#111928]">{title}</h2>
        <p className="text-[0.8rem]">{ description}</p>
</div>
    </div>
}