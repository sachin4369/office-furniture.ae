import React from "react";
import Image from "next/image";

const TrendingProducts = () => {
  return (
    <section className="text-center md:px-12 lg:text-left max-w-screen-xl mx-auto">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5 items-center">
            <Image
              src="/images/trending-products.jpg"
              alt="Trending Products"
              width={630}
              height={364}
              className="rotate-[3deg] rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-12 md:col-span-7 items-center">
            <div className="block text-center rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-ml-14 backdrop-blur-[30px]">
              <h1 className="mt-2 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                Trending Products <br />
                <span className="text-primary">range for your all need</span>
              </h1>
              <a
                className="mb-2 inline-block rounded bg-sky-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/products"
                role="button"
              >
                View all Trending Produts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
