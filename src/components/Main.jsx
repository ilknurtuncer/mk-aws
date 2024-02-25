/* eslint-disable jsx-a11y/anchor-is-valid */

import Bulut5 from "../assets/images/Bulut5.jpg";
import Bulut from "../assets/images/Bulut.jpg";
import Bulut2 from "../assets/images/Bulut7.jpg";
import Bulut3 from "../assets/images/Bulut6.jpg";
import Bulut4 from "../assets/images/Bulut1.jpg";


const Main = () => {
  return (
    <>
      {/* main1 */}
      {/* <div className="bg-[#36b6abee]   h-2"></div> */}

      <main className="container text-xl  max-w-7xl mx-auto px-2 py-2 bg-white mt-4">
        <div className="text-center py-2 mb-2 mt-2 opacity-[0.9]">
          {/* img and title */}
          <div className="flex justify-center items-center flex-col sm:flex-row">
            <div>
              <h2 className=" text-teal-500 text-4xl sm:text-6xl font-bold font-sans ">
                ELEVATE YOUR BUSINESS WITH CLOUDIFIERS
              </h2>
            </div>
            <div>
              <img src={Bulut5} className="opacity-[]" />
            </div>
          </div>
          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
          <p className=" text-gray-600  xl:text-4xl font-sans font-bold mt-8 mb-8 ">
            Cloudifiers is committed to enhancing the IT capabilities of small
            and medium-sized UK businesses. Our mission is to demystify cloud
            technology, making it a powerful, cost-effective tool tailored to
            your business growth and operational efficiency.
          </p>
          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
        </div>
        {/* <div className="bg-orange-500 h-1"></div> */}
      </main>
      {/* main2 */}
      <main className="container max-w-7xl text-2xl font-semibold text-gray-700 mx-auto px-2 py-2 opacity-[0.9]">
        {/* section1 */}
        <section className="text-lg font-bold text-gray-600 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 rounded-lg mt-6 mb-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            <img src={Bulut} className="max-w-full h-auto mb-6" />
            <h3 className="text-xl text-teal-500 font-bold font-sans  mb-4">
              BESPOKE CLOUD STORAGE SOLUTIONS
            </h3>
            <p>
              Enter the cloud with confidence. Our tailored AWS Storage
              Solutions provide secure, scalable, and cost-effective options to
              store, manage, and access your data with ease–no matter where you
              are in your cloud journey.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-xl text-teal-500 font-bold  mb-4">
              COST-EFFICIENCY EXPERTISE
            </h3>
            <p>
              Unlock savings with our Cost Optimization service. We help you
              understand and manage your cloud spending, ensuring every penny is
              invested wisely for maximum return and efficiency.
            </p>
            <img src={Bulut2} className="max-w-full h-auto mt-8" />
          </div>
          <div className="p-6 rounded-lg">
            <img src={Bulut3} className="max-w-full h-auto" />
            <h3 className="text-xl text-teal-500 font-bold  mb-4">
              PERFORMANCE OPTIMIZATION
            </h3>
            <p>
              Experience peak performance with our optimization strategies. We
              fine-tune your cloud resources for optimum efficiency, ensuring
              fast, reliable, and uninterrupted service delivery.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-xl text-teal-500 font-bold  mb-4">
              COMPREHENSIVE SUPPORT
            </h3>
            <p>
              Our ongoing Support Services ensure that your cloud infrastructure
              keeps pace with the demands of your growing business. With
              Cloudifiers, you have a partner that's invested in your success
              every step of the way.
            </p>
            <img src={Bulut4} className="max-w-full h-auto" />
          </div>
        </section>
      </main>
      {/* main3 */}
      <main className="container max-w-7xl bg-stone-200 rounded-lg  text-gray-700 font-semibold mx-auto px-4 py-2 mb-8 opacity-[0.9]">
        <div className="text-center mb-8">
          <h2 className="text-4xl  font-bold text-zinc-600 mb-4 mt-6">
            DISCOVER HOW WE CAN HELP YOU
          </h2>
        </div>
        <section className="text-zinc-600 text-md font-bold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <svg
              className="h-40 w-40  text-zinc-600"
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
            <h3 className="text-2xl font-bold text-zinc-600  mb-4">
              EFFICIENCY EVALUATION
            </h3>
            <p>
              Discover how to enhance your operations with our Efficiency
              Evaluation, where we assess how to save on costs while improving
              the overall performance of your infrastructure.
            </p>
            <a
              href="#"
              className="inline-block mt-11 bg-zinc-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
          <div className="p-6 rounded-lg">
            <svg
              className="h-40 w-40 text-zinc-600"
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
            <h3 className="text-2xl font-bold text-zinc-600  mb-4">
              EXPENDITURE ANALYSIS
            </h3>
            <p>
              Dive deep into your spending patterns with our Expenditure
              Analysis service. We'll pinpoint areas where you can cut back
              without sacrificing quality or productivity.
            </p>
            <a
              href="#"
              className="inline-block mt-11  bg-zinc-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>

          <div className="p-6 rounded-lg">
            <svg
              className="h-40 w-40 text-zinc-600"
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
            <h3 className="text-2xl font-bold text-zinc-600  mb-2">
              RESOURCE OPTIMIZATION SUPPORT
            </h3>
            <p>
              Our Resource Optimization Support goes beyond mere advice. We
              provide ongoing assistance to ensure your operations are lean and
              your resources are utilized to their fullest potential.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-zinc-600  hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
      {/* <hr className="border-teal-800 border-[1.5px] dark:border-gray-700 "></hr> */}
      {/* <div className="bg-[#36b6abee]   h-2"></div> */}
    </>
  );
};

export default Main;
