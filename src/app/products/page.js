import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  return (
    <>
      <nav className="flex my-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 flex dark:hover:text-white"
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
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 flex">
                Product Page
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Product Page
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5">
            <Link href="/products/mesh-chair-series">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mesh Chair Series
              </h2>
            </Link>
            <p className="mb-3 font-normal text-gray-700 flex">
              Mesh chairs offer exceptional comfort and breathability. With their ergonomic design, they provide support for long hours of work, making them a popular choice for offices and home offices.
              <span>
                <Image src="/images/rsc105g.png" width={600} height={267} alt="Mesh chairs" />
              </span>
            </p>
            <a
              href="/products/mesh-chair-series"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Products
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5">
            <Link href="/products/visitor-chair-series">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Visitor Chair Series
              </h2>
            </Link>
            <p className="mb-3 font-normal text-gray-700 flex">
            Visitor chairs are the perfect addition to reception areas and meeting spaces. They combine style and comfort, welcoming guests and colleagues with ergonomic seating and a professional look
            <span>
                <Image src="/images/rsc847g.png" width={600} height={267} alt="Visitor chairs" />
              </span>
            </p>
            <a
              href="/products/visitor-chair-series"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Products
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5">
            <Link href="/products/visitor-chair-series">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Work Station Chair Series
              </h2>
            </Link>
            <p className="mb-3 font-normal text-gray-700 flex">
            Workstation chairs are designed for productivity, offering adjustable features and lumbar support. Ideal for office environments, they promote ergonomic well-being and enhance focus during long work hours.
            <span>
                <Image src="/images/rsc501g.jpg" width={400} height={267} alt="Work Station chairs" />
              </span>
            </p>
            <a
              href="/products/workstation-chair-series"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Products
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5">
            <Link href="/products/cafe-chair-series">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cafe Chair Series
              </h2>
            </Link>
            <p className="mb-3 font-normal text-gray-700 flex">
              Cafe chairs provide a stylish and cozy setting for leisurely moments. Their versatile design and materials create a welcoming ambiance, perfect for socializing, dining, or simply enjoying a coffee.
              <span>
                <Image src="/images/rsc984.jpg" width={350} height={267} alt="Cafe chairs" />
              </span>
            </p>
            <a
              href="/products/cafe-chair-series"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Products
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5">
            <Link href="/products/student-chair-series">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Student Chair Series
              </h2>
            </Link>
            <p className="mb-3 font-normal text-gray-700 flex">
            Student chairs are tailored for learning environments, offering ergonomic support and durability. These chairs encourage concentration, ensuring comfort during study sessions and educational activities.
            <span>
                <Image src="/images/rsc724.jpg" width={600} height={267} alt="Student chairs" />
              </span>
            </p>
            <a
              href="/products/student-chair-series"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Products
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5">
            <Link href="/products/cafe-table-series">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cafeteria Table Series
              </h2>
            </Link>
            <p className="mb-3 font-normal text-gray-700 flex">
            Cafeteria tables are functional and versatile, perfect for shared dining spaces. They promote social interaction, allowing people to enjoy meals, work, or converse in a communal setting.
            <span>
                <Image src="/images/rsc1202.jpg" width={400} height={267} alt="Cafeteria tables" />
              </span>
            </p>
            <a
              href="/products/cafe-table-series"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Products
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-5">
            <Link href="/products/lounge-chair-series">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Lounge Chair Series
              </h2>
            </Link>
            <p className="mb-3 font-normal text-gray-700 flex">
            Lounge chairs offer a blend of relaxation and style. With their comfortable design, these chairs are perfect for unwinding, reading, or adding a touch of luxury to any space.
            <span>
                <Image src="/images/rsc1015blk.png" width={400} height={267} alt="Lounge chairs" />
              </span>
            </p>
            <a
              href="/products/lounge-chair-series"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Products
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductPage;
