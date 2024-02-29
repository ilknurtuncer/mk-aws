/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Push from "../assets/pictures/svg-b.png";
import Delivery from "../assets/pictures/partners_new.png";
import Contact from "../assets/pictures/rocht-ab-tullinge-kontakt-1.png";

const BuildAws = () => {
  return (
    <>
      {/* ===main1=== */}
      <main className="container max-w-7xl text-gray-500 mx-auto bg-white m-2 p-2">
        <div className=" px- py-2  mb-2 mt-10">
          <h2 className="max-w-auto text-4xl sm:text-6xl xl:font-bold font-semibold font-sans text-teal-500 mb-4 opacity-[0.9]">
            BUILD AWS INFRASTRUCTURE
          </h2>

          <h3 className="text-3xl max-w-2xl font-sans font-bold mb-4 text-gray-500">
            Accelerate Your Cloud Infrastructure with Expertise and Partnership
          </h3>
          <hr class="border-teal-400 border-[2px] dark:border-gray-700 mb-4"></hr>
          <p className="mb-4 xl:font-bold font-semibold text-2xl">
            Building a robust AWS infrastructure is pivotal to your cloud
            journey. Partner with us to gain access to top-tier engineering
            talent and a partnership that extends beyond mere construction to
            empowerment. Our approach ensures your team is integrated into the
            process, acquiring the skills and knowledge necessary to master your
            AWS environment.
          </p>
        </div>
        <section className="text-xl font-bold text-gray-500  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {/* =====a1==== */}
          <a
            href="#"
            className="text-lg shadow-lg h-80 shadow-teal-500  flex flex-col items-center bg-white border border-purple-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <article className="rounded p-2 h-full bg-teal-500"></article>

            <div className=" flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-gray-600 opacity-[0.9] text-2xl font-bold tracking-tight  dark:text-white">
                Why Choose Us?
              </h5>
              <p className=" mb-3 dark:text-gray-400">
                Collaborative Builds: We work alongside your team, not just for
                them, fostering a collaborative environment that ensures a deep
                understanding of the infrastructure from the ground up.
              </p>
            </div>
          </a>
          {/* ====a2===== */}
          <a
            href="#"
            className="text-lg shadow-lg h-80 shadow-teal-500 flex flex-col items-center bg-white border border-purple-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <article className="rounded p-2 h-full bg-teal-500"></article>

            <div className=" flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl text-gray-600 opacity-[0.9]  font-bold tracking-tight  dark:text-white">
                Continuity of Support
              </h5>
              <p className="mb-3 dark:text-gray-400">
                Completing your AWS build is just the beginning. Stay connected
                with ongoing support through our Support Subscription. We're
                here to ensure your infrastructure evolves with your business.
              </p>
            </div>
          </a>
          {/* ======a3===== */}
          <a
            href="#"
            className="text-lg shadow-lg h-80 shadow-teal-500 flex flex-col items-center bg-white border border-purple-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <article className="rounded p-2 h-full bg-teal-500"></article>
            {/* <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="Part3"
              alt=""
            /> */}
            <div className=" flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl text-gray-600 opacity-[0.9]  font-bold tracking-tight dark:text-white">
                Engage with Our AWS Specialists
              </h5>
              <p className=" dark:text-gray-400">
                Have a project in mind? Discuss your AWS infrastructure goals
                with our specialists. We'll help you envision and execute an
                infrastructure that's scalable, secure, and strategically
                aligned with your business objectives.
              </p>
            </div>
          </a>
        </section>
        {/* main2 */}
        <main className="px-2 py-2   mb-2 mt-8">
          <h2 className="text-4xl sm:text-6xl  xl:font-bold font-semibold font-sans text-teal-500 p-2 mb-4 mt-16 opacity-[0.9]">
            YOUR AWS PARTNER FOR GROWTH
          </h2>
          <p className="text-3xl font-sans font-bold  mb-4 p-2 ">
            Cloudifiers is your dedicated partner in optimizing AWS cloud
            solutions to enhance agility, accelerate innovation, and drive
            success for dynamic small and medium-sized enterprises.
          </p>
          <hr class="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
          <section className="mt-8 mb-8 text-gray-500 text-lg font-bold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <div className="flex justify-center items-center" />
              <img src={Push} className="max-w-full h-auto mt-4" />
              <h3 className="text-2xl font-bold font-sans text-teal-500 mb-2 mt-8">
                DEPLOY
              </h3>
              <p className="">
                Build a solid foundation on AWS. We assist you in creating a
                robust AWS infrastructure that prioritizes security,
                reliability, and operational efficiency, all tailored to fit
                your budget and growth projections. Let us help you lay down the
                groundwork that supports your business now and as it expands.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-2xl font-bold font-sans text-teal-500 mb-2 mt-4">
                MIGRATE
              </h3>
              <p>
                Seamless transition to the cloud. If you're moving from an
                on-premises setup or shifting from another cloud service, we've
                got you covered. Our migration strategies are designed to
                minimize downtime and leverage potential funding opportunities
                from AWS to optimize your move.
              </p>
              <img src={Delivery} className="max-w-full h-auto mt-8" />
            </div>
            <div className="p-6 rounded-lg">
              <img src={Contact} className="max-w-full h-auto mt-2" />
              <h3 className="text-2xl font-bold font-sans text-teal-500 mb-2 mt-14">
                UPGRADE
              </h3>
              <p>
                Enhance your AWS performance. Elevate your existing AWS platform
                with our guidance. We focus on enhancing performance, fortifying
                security, improving reliability, and refining cost management to
                ensure your AWS infrastructure evolves with your business.
              </p>
            </div>
          </section>
        </main>
      </main>
      {/* ====main3==== */}
      <main className="bg-[#90d3d7]">
        <main className="container text-lg text-gray-600 font-bold mx-auto mt-8 p-8 rounded-lg">
          <div className=" text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-600 opacity-[0.9] mb-4 mt-6">
              DISCOVER HOW WE CAN ENHANCE YOUR BUSINESS
            </h2>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <div className="flex justify-center items-center" />
              <svg
                className="h-40 w-40 text-gray-500"
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
              <h3 className="text-2xl font-bold text-gray-600 mb-4">
                CONSULTING PACKAGES
              </h3>
              <p>
                Tailored advice, engineering, and training designed to meet the
                unique needs of small and medium-sized businesses. Fixed-price
                solutions to optimize operations and elevate efficiency.
              </p>
              <a
                href="#"
                className="inline-block mt-14 bg-gray-500 hover:bg-teal-500 text-white font-bold py-2 px-4  rounded"
              >
                Learn More
              </a>
            </div>
            <div className="p-6 rounded-lg">
              <svg
                className="h-40 w-40 text-gray-500"
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
              <h3 className="text-2xl font-bold text-gray-600 mb-4 mt-6">
                GROWTH SOLUTIONS
              </h3>
              <p>
                Personalized AWS solutions that grow with your enterprise. Our
                services are customized to support and adapt to your business's
                expanding ambitions.
              </p>
              <a
                href="#"
                className="inline-block mt-16 bg-gray-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
            <div className="p-6 rounded-lg">
              <svg
                className="h-40 w-40 text-gray-500"
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
              <h3 className="text-2xl font-bold text-gray-600 mb-4">
                SUPPORT SERVICES
              </h3>
              <p>
                Reliable, ongoing support customized to your needs. Partner with
                us for dedicated assistance and expert AWS guidance to propel
                your business forward.
              </p>
              <a
                href="#"
                className="inline-block mt-16 bg-gray-500  hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
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

export default BuildAws;
