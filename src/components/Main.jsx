/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Push from "../assets/pictures/undraw_Push_notifications_re_t84m.png";
import Cost from "../assets/pictures/undraw_Transfer_money_re_6o1h.png";
import Contact from "../assets/pictures/undraw_Contact_us_re_4qqt.png";
import Solution from "../assets/pictures/undraw_Real_time_sync_re_nky7.png";
const Main = () => {
  return (
    <div>
      <main className="container  mx-auto px- py-2 bg-white">
        <div className="text-center px- py-2  mb-2 mt-8">
          <h2 className="text-3xl font-bold font-sans text-blue-700 mb-4">
            ELEVATE YOUR BUSINESS WITH CLOUDIFIERS
          </h2>
          <p className="font-serif mb-4 ">
            Your Gateway to Advanced Cloud Solutions.
            <br />
            Cloudifiers is committed to enhancing the IT capabilities of small
            and medium-sized <br /> UK businesses. Our mission is to demystify
            cloud technology, making it a powerful, <br /> cost-effective tool
            tailored to your business growth and operational efficiency.
          </p>
          <hr className="border-orange-500 border-[1.5px] dark:border-gray-700 "></hr>
          {/* <div className="bg-orange-500 h-1"></div> */}
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            <img src={Push} className="max-w-full h-auto" />
            <h3 className="text-2xl font-bold font-serif text-blue-700 mb-4">
              BESPOKE CLOUD STORAGE SOLUTIONS
            </h3>
            <p className="">
              Enter the cloud with confidence. Our tailored AWS Storage
              Solutions provide secure, scalable, and cost-effective options to
              store, manage, and access your data with ease – no matter where
              you are in your cloud journey.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              COST-EFFICIENCY EXPERTISE
            </h3>
            <p>
              Unlock savings with our Cost Optimization service. We help you
              understand and manage your cloud spending, ensuring every penny is
              invested wisely for maximum return and efficiency.
            </p>
            <img src={Cost} className="max-w-full h-auto" />
          </div>
          <div className="p-6 rounded-lg">
            <img src={Contact} className="max-w-full h-auto" />
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              PERFORMANCE OPTIMIZATION
            </h3>
            <p>
              Experience peak performance with our optimization strategies. We
              fine-tune your cloud resources for optimum efficiency, ensuring
              fast, reliable, and uninterrupted service delivery.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              COMPREHENSIVE SUPPORT
            </h3>
            <p>
              Our ongoing Support Services ensure that your cloud infrastructure
              keeps pace with the demands of your growing business. With
              Cloudifiers, you have a partner that's invested in your success
              every step of the way.
            </p>
            <img src={Solution} className="max-w-full h-auto" />
          </div>
        </section>
        {/* alt açıklama */}
        <div className="text-center border-l-8 border-blue-700 rounded-lg bg-orange-500 px- py-2  mb-2 mt-8">
          <p className=" text-gray-800 font-sans font-bold">
            Discover the Cloudifiers difference and how our expertise can
            revolutionize your business operations. <br /> Get in touch today to
            begin your journey to the cloud.
          </p>
          <div>
            <p className="font-bold text-blue-700 ">
              iletişim tel: <span className="text-black">0546 546####</span>{" "}
            </p>
          </div>
        </div>
      </main>
      {/* main2 */}
      <main className="container mx-auto px-4 py-2 bg-gray-100 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-600 mb-4 mt-6">
            DISCOVER HOW WE CAN HELP YOU.
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
              Advice, engineering, and training, solving common SaaS problems at
              a fixed price.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
            <br />
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              GROWTH SOLUTIONS
            </h3>
            <p>
              Complete AWS solutions, tailored to the unique needs of your SaaS
              business.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
              An ongoing relationship, providing access to our AWS expertise at
              any time.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
      <br />
    </div>
  );
};

export default Main;
