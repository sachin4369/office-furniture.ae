"use client"

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Catalog = () => {
    const router = useRouter();
    
  return (
      <section className="text-center md:px-12 lg:text-left max-w-screen-xl mx-auto">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12 md:col-span-7 items-center order-2 md:order-1">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] text-center">
                  <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                    Download to explore our 
                    <span className="text-primary ml-3 dark:text-primary-400">
                     Product Catalog
                    </span>
                  </h1>
                  <button
                    type="button"
                    className="inline-block text-center rounded bg-sky-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={()=>router.push('/images/regent-catalog-2023.pdf')}
                  >
                    Download Catalog
                  </button>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 items-center order-1  md:order-2 my-8 md:my-0">
                <Image src="/images/rsc-catalog-new.jpg" alt="Download Catalog" width={630} height={864} className="rotate-[3deg] mx-auto md:mx-0 w-80 md:w-full rounded-lg shadow-lg" />
              </div>
            </div>
        </div>
      </section>
  );
};

export default Catalog;
