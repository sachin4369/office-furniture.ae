import Link from "next/link";
import Image from "next/image";
import SocialShareIcon from "@/app/components/SocialShare/page";

const getStudentChairsData = async(id)=>{
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        let data = await fetch(`${apiUrl}/api/studentapi/${id}`);
        data = await data.json();
        return data.result;
    } catch (error) {
        console.error("not found", error)
    return null;
    }
}

const Page = async ({params})=>{
    try {
        let student = await getStudentChairsData(params.productid);
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
                    href="/products/student-chair-series"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Student Chair Series
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
                    {student.Name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col items-center bg-white pl-0 md:pl-20 border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 p-4">
          <div className="w-52">
            <Image
                className="object-cover"
                width={400}
                height={400}
                src={student.Url}
                alt={student.Name}
              />
            </div>
            <div className="flex flex-col justify-between leading-normal pl-0 md:pl-20">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {student.Name}
              </h2>
              <div className="font-normal text-sm text-gray-700 space-y-2">
                <p>Model No. : {student.ModelNo}</p>
                <p>Type : {student.Type}</p>
                <p>Fabric : {student.Fabric}</p>
                <p>Mechanism : {student.Mechanism}</p>
                <p>Armrest : {student.Armrest}</p>
                <p>Mechanism : {student.Mechanism}</p>
                <p>BodyColor : {student.BodyColor}</p>
                <p>Base Material : {student.BaseMaterial}</p>
                <p>Height Adjuster : {student.HeightAdjuster}</p>
                <p className="flex space-x-2 items-center">
                  Available Colors :{" "}
                  <span
                    title="Black"
                    className="w-4 h-4 bg-gray-700 rounded ml-1"
                  ></span>
                  <span title="Blue" className="w-4 h-4 bg-blue-600 rounded"></span>
                  <span
                    title="Green"
                    className="w-4 h-4 bg-green-500 rounded"
                  ></span>
                  <span title="red" className="w-4 h-4 bg-red-500 rounded"></span>
                  <span
                    title="Orange"
                    className="w-4 h-4 bg-orange-500 rounded"
                  ></span>
                  <span
                    title="Yellow"
                    className="w-4 h-4 bg-yellow-300 rounded"
                  ></span>
                </p>
                <div className="flex items-center">
                  Share on : &nbsp;
                  <SocialShareIcon />
                </div>
              </div>
            </div>
          </div>
            </>
        )
    } catch (error) {
        console.error("An error occurred:", error);
      return (<div>An error occurred while loading data.</div>);
    }
}

export default Page;