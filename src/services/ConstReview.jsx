
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import analysıs from "../assets/pictures/Notification.png";


const ConstReview = () => {
  return (
    <>
      {/* main1 */}
      <main className="text-center container  mx-auto ">
        {/* img and title */}
        <div className=" flex justify-center items-center flex-col sm:flex-row xl:gap-24 ">
          <div className="mt-10 p-4">
            <img src={analysıs} className=" max-h-[300px] max-w-[320px] p-2" />
          </div>
          <div className="p-2  ">
            <h2 className="text-4xl sm:text-6xl font-bold font-sans text-teal-500 m-4 opacity-[0.9]">
              COST OPTIMIZATION
            </h2>
            <p className="mb-4 text-gray-500 text-4xl sm:text-5xl font-sans font-bold ">
              Maximize Your Growth
            </p>
            <p className="mb-6 text-gray-500 text-4xl sm:text-5xl font-sans font-bold ">
              Minimize Your Expenses
            </p>
            <hr className="border-teal-400 border-[1.5px] dark:border-gray-700"></hr>
          </div>
        </div>
      </main>
      {/* main2 */}
      <main className=" container max-w-7xl text-lg font-bold  text-gray-600 mx-auto  py-2">
        <main className="rounded-lg">
          {/* section */}
          <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 opacity-[0.9]">
            <div className="p-6 ">
              <div className="flex justify-center items-center" />
              <h3 className="text-2xl font-bold  text-teal-500 mb-4">
                STREAMLINED COST INSIGHT
              </h3>
              <p>
                Achieve growth with precise cost control. Our analytics offer
                clarity on expenditures, ensuring strategic decisions for your
                small to medium-sized business without impacting performance.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                DETAILED SPEND TRACKING
              </h3>
              <p>
                Pinpoint every pound's journey for effective cost management.
                Our rigorous analysis across operations spotlights
                inefficiencies, realigning spend with your actual business
                needs.
              </p>
              {/* <img src={Cost} className="max-w-full h-auto" /> */}
            </div>
            <div className="p-6 rounded-lg">
              {/* <img src={Contact} className="max-w-full h-auto" /> */}
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                BUDGET MANAGEMENT
              </h3>
              <p>
                Establish robust spending controls to avoid overruns. Invest
                intelligently and manage finances in real-time, safeguarding
                your business against unforeseen expenses.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <div className="flex justify-center items-center" />

              {/* <img src={Push} className="max-w-full h-auto" /> */}
              <h3 className="text-2xl font-bold  text-teal-500 mb-4">
                RESOURCE ALLOCATION
              </h3>
              <p className="">
                Optimize costs through intelligent resource allocation. Match
                usage to business cycles for efficiency, ensuring you have
                resources when needed and avoid unnecessary expenditure.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                SCENARIO PLANNING
              </h3>
              <p>
                Equip your business for the future with our scenario planning
                tools, ensuring you can navigate changing business conditions
                and stay competitive.
              </p>
              {/* <img src={Cost} className="max-w-full h-auto" /> */}
            </div>
            <div className="p-6 rounded-lg">
              {/* <img src={Contact} className="max-w-full h-auto" /> */}
              <h3 className="text-2xl font-bold text-teal-500 mb-">
                BUILDING CASES FOR GROWTH
              </h3>
              <p>
                Develop compelling business cases with our cost optimization
                insights. Balance present expenses against future growth for
                sustainable UK market profitability.
              </p>
            </div>
          </section>
        </main>
      </main>

      {/* main3 */}
      <main className="mb-8">
        {/* <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr> */}
        <main className="container max-w-7xl text-g text-gray-500 font-bold mx-auto px-4 py-2 mb-2 mt- bg-zinc-100 rounded-lg">
          <div className=" text-center mt-8 mb-8">
            <h2 className="text-5xl font-bold text-gray-500  mb-4 mt-6">
              FEATURED SERVICES
            </h2>
            <p className="font-bold font-sans text-3xl text-gray-500 ">
              Strategic Cost Management for Long-Term Growth
            </p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <div className="flex justify-center items-center" />
              <svg
                className="h-36 w-36  text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <br />
              <h3 className="text-2xl font-bold text-gray-500  mb-4">
                EFFICIENCY EVALUATION
              </h3>
              <p>
                Enhance operations and save costs. Our Efficiency Evaluation
                identifies opportunities for improved performance without
                compromising quality.
              </p>
              <a
                href="#"
                className="inline-block mt-12 bg-gray-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
            <div className="p-6 rounded-lg">
              <svg
                className="h-36 w-36 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <polygon points="12 2 2 7 12 12 22 7 12 2" />{" "}
                <polyline points="2 17 12 22 22 17" />{" "}
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <br />
              <h3 className="text-2xl font-bold text-gray-500  mb-4">
                EXPENDITURE ANALYSIS
              </h3>
              <p>
                Our detailed Expenditure Analysis uncovers potential savings,
                allowing for cost-effective operation without sacrificing
                quality or productivity.
              </p>
              <a
                href="#"
                className="inline-block mt-12  bg-gray-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>

            <div className="p-6 rounded-lg">
              <svg
                className="h-36 w-36 text-gray-500"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />{" "}
                <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
              </svg>
              <br />
              <h3 className="text-2xl font-bold text-gray-500  mb-4">
                RESOURCE OPTIMIZATION SUPPORT
              </h3>
              <p>
                With our Resource Optimization Support, ensure your operations
                are efficient and every resource is fully leveraged for optimal
                performance.
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-gray-500  hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default ConstReview;
