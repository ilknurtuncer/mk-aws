
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
            <div className="">
              <img src={Cloud} className="max-h-80 " />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-sans text-teal-500 m-4 mt-8">
                CLOUD MIGRATION
              </h2>
              <p className="text-gray-500 text-xl font-sans font-bold ">
                Migrate with confidence and grow your business.
              </p>
            </div>
          </div>

          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
          {/* <div className="bg-orange-500 h-1"></div> */}
        </div>
        {/* section1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold  text-teal-500 mb-4">
              BUSINESS BENEFITS
            </h3>
            <p>
              Unlock potential, reduce overhead, and accelerate your path to
              market with our specialized cloud migration strategies for small
              and medium-sized businesses.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">AGILITY</h3>
            <p>
              Adapt quickly and accelerate growth. By migrating to the cloud,
              your business can increase the pace of development and deployment,
              ensuring you stay ahead in a competitive market. Benefit from
              faster product launches and streamlined operations, cutting
              time-to-market significantly.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold text-teal-500 mb-4">SECURITY</h3>
            <p>
              Protect your business with advanced security. The strength of AWS
              security lies in its comprehensive tools that safeguard your
              operations. Experience a noticeable reduction in security
              incidents post-migration, giving you peace of mind and protecting
              your valuable data assets.
            </p>
          </div>
        </section>
        {/* section2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold  text-teal-500 mb-4">
              COST EFFICIENCY
            </h3>
            <p className="">
              Maximize your budget with smart spending. Transitioning to the
              cloud can lead to considerable savings. Our approach focuses on
              optimizing your infrastructure costs, ensuring you get the most
              value from every dollar spent with scalable solutions that match
              your business size and needs.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              RELIABILITY
            </h3>
            <p>
              Depend on robust and resilient operations. Cloud solutions offer
              superior reliability over traditional setups. Anticipate fewer
              disruptions and quicker recovery times, which translates to better
              service continuity for your customers and fewer lost opportunities
              for your business.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              GLOBAL REACH
            </h3>
            <p>
              Expand your presence effortlessly. Leverage AWS's extensive global
              network to deploy applications closer to your customers, enhancing
              performance and adhering to data sovereignty requirements. This
              global footprint can empower your business to operate with a
              worldwide reach.
            </p>
          </div>
        </section>
        {/* alt açıklama main 2 ye taşındı. */}
      </main>
      {/* main2 */}
      <main className="container mx-auto bg-[#fbf4eb] rounded-lg">
        <div className="text-center opacity-[0.9] border-l-8 border-orange-600 rounded-lg bg-[#f7992d] py-3  mb-2 mt-8">
          {/* <p className=" text-gray-900 font-sans font-bold">
            Discover the Cloudifiers difference and how our expertise can
            revolutionize your business operations. <br /> Get in touch today to
            begin your journey to the cloud.
          </p>
          <div>
            <p className="font-bold text-orange-600 ">
              iletişim tel: <span className="text-black">0546 546####</span>{" "}
            </p>
          </div> */}
        </div>
        <div className="flex justify-center items-center mb-8">
          <img src={Time} className="opacity-[0.9] max-h-80 " />
        </div>
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap8">
          <div className=" p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              FEATURED SERVICES
            </h3>
            <p>
              We're dedicated to empowering your small or medium-sized business
              on every step of the cloud journey with our customized consulting
              and support packages.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              MIGRATION ASSESSMENT
            </h3>
            <p>
              Design your cloud future with precision. Collaborate with our
              cloud experts to craft a migration strategy that fits your unique
              business needs. Understand the full scope of benefits that AWS
              migration can offer your enterprise, from agility to cost savings.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              INFRASTRUCTURE OPTIMIZATION
            </h3>
            <p>
              Build a resilient foundation. Establish a robust AWS
              infrastructure that supports the growth and dynamism of your
              business. Benefit from the best practices in cloud operations and
              security, all structured within a predictable budget.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              DEDICATED SUPPORT
            </h3>
            <p>
              Enhance your customer experience. Keep your business ahead of the
              curve by ensuring your cloud platform is always at peak
              performance. Our support helps you attract and retain customers by
              delivering consistent, reliable service.
            </p>
          </div>
        </section>
      </main>
      <br />
    </>
  );
};

export default CloudMig;
