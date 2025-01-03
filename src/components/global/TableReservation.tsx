"use client";

import { Zap } from "lucide-react";
import Image from "next/image";

import reservation from '../../../public/reservation.png'

import reservationline from '../../../public/reservationine.png'


export default function TableReservation() {
  return (



    <div>

<div className="w-full max-w-7xl mx-auto py-4 rounded-[20px] ">
    <div className="grid md:grid-cols-2 gap-6 items-start">
<div className="relative h-[480px] w-full overflow-hidden">
  <Image
    src={reservation} 
    alt="Reservation" 
    className="absolute inset-0 object-cover w-full h-full  rounded-[20px] filter brightness-95"
    layout="fill" 
    objectFit="cover" 
  />
</div>
  

      <div className="flex flex-col space-y-6">
      

 

          <div className="bg-[#83ea00]  p-8 text-[#171717] relative   rounded-[20px] py-[50px] px-[50px] pb-[57px]  mb-[10px]">
  <p className="text-2xl mb-2">Advantages</p>
  <h2 className="text-[56px] font-bold leading-tight mb-4">
    Online<br />
    table<br />
    reservation
  </h2>
  
  <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
    <svg 
      className="w-6 h-6" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M13 10V3L4 14h7v7l9-11h-7z" 
      />
    </svg>
  </div>
</div>


          
          <div className="bg-[#f5f4f6] rounded-[20px]">
            <div className="relative">
              <Image
                src={reservationline}
                alt="Reservation Line"
                width={280}
                height={300}
                className="absolute top-0 right-0  object-contain z-0"
              />
              <div className="relative z-10 p-8">
                <h3 className="text-3xl font-bold mb-4 text-[#171717]">
                  Find your table for any occasion
                </h3>
                <button className="mt-4 px-8 py-3 border-2   border-black rounded-full hover:bg-black text-[#171717] transition-colors duration-300 text-lg">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>












    </div>








  




  );
}