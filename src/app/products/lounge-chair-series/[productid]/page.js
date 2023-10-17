import Link from "next/link";
import React from "react";
import SocialShareIcon from "@/app/components/SocialShare/page";

const getLoungeChairData = async (id) => {
  try {
    let data = await fetch(`http://localhost:3000/api/loungeapi/${id}`);
    data = await data.json();
    return data.result;
  } catch (error) {
    console.error("not found", error)
    return null;
  }
};

const Page = async ({ params }) => {
  const lounge = await getLoungeChairData(params.productid);
  console.log(lounge);
  return(
    <>
      <nav className="flex mt-5 mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href="/products/lounge-chair-series"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Lounge Chair Series
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                {lounge.Name}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 p-4">
        <div className="w-96">
            <img
            className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-auto hover:scale-125"
            src={lounge.Url}
            alt={lounge.Name}
            />
        </div>
        <div className="flex flex-col justify-between leading-normal">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {lounge.Name}
          </h2>
          <div className="font-normal text-sm text-gray-700 space-y-2">
            <p>
                Model No. : {lounge.ModelNo}
            </p>
            <p>
                Type : {lounge.Type}
            </p>
            <p>
                Armrest : {lounge.Armrest}
            </p>
            <p>
                Seat Material : {lounge.SeatMaterial}
            </p>
            <p>
                Frame Material : {lounge.FrameMaterial}
            </p>

            <p className="flex space-x-2 items-center">
                Available Colors : <span title="Black" className='w-4 h-4 bg-gray-700 rounded ml-1'></span><span title="Blue" className='w-4 h-4 bg-blue-600 rounded'></span><span title="Green" className='w-4 h-4 bg-green-500 rounded'></span><span title="red" className='w-4 h-4 bg-red-500 rounded'></span><span title="Orange" className='w-4 h-4 bg-orange-500 rounded'></span><span title="Yellow" className='w-4 h-4 bg-yellow-300 rounded'></span>
            </p>
            <div className="flex items-center">
                Share on : &nbsp;<SocialShareIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;