import Link from "next/link";
import Image from "next/image";

const getLoungeChairData = async ()=> {
  let data = await fetch("http://localhost:3000/api/loungeapi/");
  data = await data.json();
  return data;
}

const LoungeChairSeries = async ()=> {
  const loungeChair = await getLoungeChairData();

  return(
    <>
      <nav className="flex mt-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
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
                href="/products"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Products
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
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
                Lounge Chairs
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-semibold my-5">Lounge Chairs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loungeChair.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-5"
          >
            <Image
              className="rounded-t-lg h-40 mx-auto object-fit" 
              width={160}
              height={100}
              src={item.Url} 
              alt={item.Name} />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.Name}
            </h2>
            <p className="font-normal text-gray-700 space-y-1 flex flex-col mb-4 text-sm">
              <span>{item.ModelNo}</span>
              <span>{item.Type}</span>
              <span>{item.Armrest}</span>
              <span>{item.Fabric}</span>
            </p>
            <Link
              href={`/products/lounge-chair-series/${item.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Click here for more details
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default LoungeChairSeries;