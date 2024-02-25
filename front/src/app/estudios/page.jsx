import { Footer } from "../components/footer"
const listEstudios = [
    { doctor: "Dr. Roman Reigns", especialidad: "Neurologo", doctorImg: "/docPozo.svg", descripcion: "Resonancia magnética cerebral", estudioImg:  " https://s3-alpha-sig.figma.com/img/77fc/67b5/8bbc60279ca3d84ae84bfeb88590ee0d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDILrjkAWXs51518VpHDw7APrkhPIxVkFrdv1dODwYzuAtHZXFMgRbDhHdWgsBIXDJ-NLS3OUidK~ZYnzJHKDWdXBaSsCss2bLYhgO31HhWmNPgi3PIkZSt8wn32JZ7lqBxfE0MIlppqRzTgDbVXJOWib-Vsvq90p2aggkO7ZkTW5zpDIdbKSWiDfMS2dxOPwCm-9QNYCnVdDCcWQMjor728z4Yx6caIhLZpfx53PAuqsVl6vBiW3PfLUSJUIuLksV-4eH2J1buQXTH5Fhd-L8xBZTjkxYhbT-C3195dyO2yC1HlBgTXdlO33OxAaumxqUmfJCJshdMdS5nzU6ORqg__"},
    { doctor: "Dr. Aisha Takya", especialidad: "Neurologa", doctorImg: "/docPeña.svg" , descripcion: "Angiografía por TC",  estudioImg:  "https://s3-alpha-sig.figma.com/img/18b2/d329/a7713e6ecfde9803e8c620b3a9add8b3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oN9hPNrisecMxi2-9q2TNHTCqzgcHGkPasPjUVjU~M5w5uIR6l5IKSljrfpUUt9XuQGyUcTDvdOPlODMu9caMeBJXswRqz2dPJxHTsAzt9pvJxShj-xDtP9ZDo0u42Gp3onwNPKbvBGhPEzBUtyv7NL23STTdwhywE8RcEgURumzrz~IAcNvUiqVMYBvDZHzJBIk0EbLzHwImX-76Yr1AsHAaYgs306He762iExSMF1Y24c2cacBKHyt33t4iS9kX8Qc4BX49qdVUw5E~bH-WWUCf1LyMvuu4plg4QNdjVqvNV9refA4oE5PmiK9X80XSkgWszwLnVxiSCCthPCKWw__"},
    { doctor: "Dr. Alejandro Rayos", especialidad: "Radiólogo", doctorImg: "/docEstevez.svg" , descripcion: "Tomografía computarizada",  estudioImg:  "https://s3-alpha-sig.figma.com/img/cef2/8337/a3bd141ad3790ebe03e33924717e0858?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Revx5SbYF8xTwEkpE2sfLqBpC2MUJbzebGXSxqcvsjoQRudW6m1cuiMYCYG1X0hp8ayEgAHgeAsgXiSxgsA~lBzV5HI8przsbW1bsWVTtb2EC3BJwNrycG0gXTNR7uJz4DHDhe0EUFV~qSF5ZrbGcxtE1oTI7fbn2yHQ-2tdqiodVhS89exvv7pf1xoBkUK-0rmlkZCzbkFoYSw2-3mikvm37i0iHOngsLmzeLYeiTeRG68Z95ZM9qd1kkw~VOX~9VKNcluy9MVLDKciTdBTOoy7RnB4iN38gkdzsphnOC5Kkg-3MHJOaK~Q8BseSfmp7xsYMpVPb2MJHdVhAGKtpQ__"},
    { doctor: "Dr. Manuela Salguetti", especialidad: "Cardióloga", doctorImg: "/docVilla.svg", descripcion: "Electrocardiograma",  estudioImg:  "https://s3-alpha-sig.figma.com/img/d08f/b167/968afdf0414e3eef3995a8438040cfa3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WInZWYPv1rlHgLXa6-q2KuCNNcK8cZ3Z5JlUq6ruTZXZqchlPM70G6LGQFSdNZbLA54lJJUyXqNaA4hU-LXd1rKMN2BnAmvEy7FLG-MkpgDQcEKp2BrCSJ0R7MwZW-nuf48aSiS38H0RNyAQWntBA2bs2ZSNfzenFs9mtII8Q96hVGQHE6Rvu9ARbfbevKOvPNEjqh2ibvuf8DSdqLTg~OAHkSOXYu~cCl1mT-TAIpzHVEjZYuYDNafmYf7f0HzsdvUCjS0eoqoKLxd2TdQYymufJdaQqDiRXGc8lu7NYZ3U9UkgvitU4Iw~nHHa2MT0AFzgqmQj0JB8EkhnI-FN~A__"},
    { doctor: "Dr. Andres Ottoneli", especialidad: "Dermatología", doctorImg: "/docPassini.svg", descripcion: "Resonancia magnética cerebral",  estudioImg:  "https://s3-alpha-sig.figma.com/img/89b1/da29/b0f51c46b863c654bff164c5171a16e8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M45MMIQAXJ61OVctiIbyXPRwY4cSdvb~q9~OmgubPPwlyh9qsk9tkulAol424mmHos5ealzwjLFrhxAiGVl19fbUronY-2laDNzgQtz-HY5bGQo~lKvAechyKuDvWg~9qkV4IaR5mwHXCvv3seSBynRo7X9w46st5GtUGrjLCZXOdy1oR8jczbhmELm0Yzi1tSgA~Uv6bA2R-nlbQIj1z8krCEWYoW7UH3vABRsu5TIJrClIYMaFEyiTUQkUZQdeEjc~sObrMkzD9QDyJXWV5lU-yJM-94uVSCGtUN2PkHdM5Y6ksuRrySC~VhDK9uy9IO4hQFh6WwmsFoKvARpAqw__"},
]
export default function  Estudios(){
    return <>
    <div className="text-black max-w-[1295px] m-auto mt-8 bg-[#fff] max-xl:w-[90%]">
        <div className="mt-8 mb-8 flex flex-col gap-8">
            <h3 className="text-gray-500 text-xl font-semibold ">Estudios medicos</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 w-full">
                {listEstudios.map((estudio, position) => 
                <div key={position} className="flex flex-col items-center estudios-center gap-2 w-[283px]">
                    <div className="flex flex-col justify-center item-center gap-4 bg-[rgb(248,248,248)] p-4 rounded-2xl h-[337px]">
                        <div className='flex gap-3'>
                                <img className="rounded-lg" src={estudio.doctorImg} alt={estudio.descripcion} width={'60px'} height={"60px"}/>
                            <div className="flex justify-center flex-col">
                                <p className="text-sm">{estudio.especialidad}</p>
                                <h3 className="font-bold">{estudio.doctor}</h3>
                            </div>
                        </div>
                        <p className="text-sm">{estudio.descripcion}</p>
                        <div className="rounded-xl border-x-[4px] border-y-[10px] bg-black border-black">
                            <img className="rounded-xl border-x-[2px] border-y-[2px] border-black w-[339px] h-[153px] object-cover " src={ estudio.estudioImg} alt={estudio.descripcion}/>
                        </div>

                        
                    </div>
                    <div className=" text-center p-6 flex flex-col gap-4">
                        <button className=" flex p-3 justify-between gap-8 rounded-md border-2 ">
                            <div className="flex gap-4 ">
                           
                                <img src={'/docIcon.svg'} />
                                Descargar
                            </div>  
                            <img src={'/download.svg'} />


                        </button>
                    </div>
                </div>)}
            </div>
        </div>
        </div>
        <Footer></Footer>
    </>
}