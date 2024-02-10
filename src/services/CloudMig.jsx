
/* eslint-disable jsx-a11y/alt-text */


import Time from "../assets/pictures/time.jpg";
import Cloud from "../assets/pictures/rise.jpg";


const CloudMig = () => {
  return (
    <>
      <main className="container  mx-auto px-2 py-2 bg-white">
        <div className="text-center px- py-2  mb-2 mt-4">
          {/* img and title */}
          <div className="flex justify-center items-center">
            <div>
              <img src={Cloud} className="max-h-[400px] " />
            </div>
            <div>
              <h2 className="text-7xl font-bold font-sans text-teal-500 m-4 mt-8">
                CLOUD MIGRATION
              </h2>
              <p className="text-gray-500 text-6xl font-sans font-bold ">
                Migrate & Expand
              </p>
            </div>
          </div>

          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
          {/* <div className="bg-orange-500 h-1"></div> */}
        </div>

        {/* section1 */}
        <section className="font-semibold text-2xl text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-3xl font-bold  text-teal-500 mb-4">
              BUSINESS BENEFITS
            </h3>
            <p>
              Tap into market agility and cost savings with our targeted cloud
              migration plans, unlocking growth and streamlining operations.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-teal-500 mb-4">AGILITY</h3>
            <p>
              Increase development speed and market responsiveness with our
              cloud transition, giving your business a competitive edge.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-3xl font-bold text-teal-500 mb-4">SECURITY</h3>
            <p>
              Advance your operation's security with AWS's robust tools,
              significantly reducing incidents and securing data post-migration.
            </p>
          </div>
        </section>
        {/* section2 */}
        <section className="font-semibold text-2xl text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-3xl font-bold  text-teal-500 mb-4">
              COST EFFICIENCY
            </h3>
            <p className="">
              Optimize spending and enhance value with our scalable cloud
              solutions, designed to align with your business's financial
              strategy.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-teal-500 mb-4">
              RELIABILITY
            </h3>
            <p>
              Gain superior reliability and uptime, ensuring business continuity
              and customer satisfaction with our resilient cloud solutions.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-3xl font-bold text-teal-500 mb-4">
              GLOBAL REACH
            </h3>
            <p>
              Expand effortlessly worldwide, utilizing AWS's global network to
              enhance performance and comply with data laws, giving your
              business a global platform.
            </p>
          </div>
        </section>
        {/* alt açıklama main 2 ye taşındı. */}
      </main>

      {/* main2 */}
      <main className="container mx-auto bg-[#fbf4eb] rounded-lg">
        <div className="text-center opacity-[0.9] border-l-8 border-orange-600 rounded-lg bg-[#f7992d] py-3  mb-2 mt-8"></div>

        {/* div1 */}
        <div className="text-center px-4 py-2  mb-2 mt-4">
          {/* img and title */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={Time}
              className="opacity-[0.9] max-h-80 mb-4"
              alt="Time Image"
            />
            <div>
              <h2 className="text-6xl font-bold font-sans text-teal-500 mb-4 mt-8">
                FEATURED SERVICES
              </h2>
              <p className=" text-gray-500 text-4xl max-w-4xl font-sans font-bold ">
                Empower your business's cloud evolution with our tailored
                consulting and dedicated support.
              </p>
            </div>
          </div>
        </div>

        <section className="font-semibold text-2xl text-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-4 p-4">
          <div className="p-6 rounded-lg mb-8">
            <h3 className="text-3xl font-bold text-gray-500 mb-4">
              MIGRATION ASSESSMENT
            </h3>
            <p>
              Shape your cloud strategy with our expert guidance, ensuring a
              migration that aligns with your business objectives and maximizes
              AWS advantages.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-500 mb-4">
              INFRASTRUCTURE OPTIMIZATION
            </h3>
            <p>
              Fortify your operations with a resilient AWS infrastructure,
              optimized for growth and security within a well-planned budget.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-500 mb-4">
              DEDICATED SUPPORT
            </h3>
            <p>
              Keep your operations seamless and customer-focused with our
              proactive cloud support, driving satisfaction and retention
              through optimal performance.
            </p>
          </div>
        </section>
      </main>
      <br />
    </>
  );
};

export default CloudMig;
