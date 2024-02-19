import Image from 'next/image';
import React from 'react'

const HospitalCard = ({hospital}) => {
  return (
    <div className="mx-auto flex flex-col justify-center rounded-lg text-center shadow-xl">
        <div>

    <Image
      src={hospital.image}
      width={297}
      height={237}
      alt="ramos"
      className="m-2 rounded-lg"
      />
      </div>
    <h3>{hospital.name}</h3>
    <h3 className="font-bold">{hospital.place}</h3>
    <div className="mb-2 flex justify-center">
      <Image src="/location.svg" width={14} height={20} alt="pin" />
      <p className="ml-2 text-sm text-gray-400">
      {hospital.location}
      </p>
    </div>
  </div>
  )
}

export default HospitalCard;