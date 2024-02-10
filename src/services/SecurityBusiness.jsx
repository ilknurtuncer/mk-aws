/* eslint-disable jsx-a11y/alt-text */
import Grup from "../assets/pictures/Security-amico-1.png";
import Cloud from "../assets/pictures/top_right_bnt.png";


const SecurityBusiness = () => {
  return (
    <>
      <main className="container  mx-auto px-2 py-2 bg-white">
        <div className="text-center px- py-2  mb-2 mt-2">
          {/* img and title */}
          <div className="flex justify-center items-center">
            <div>
              <img src={Grup} className=" opacity-[0.9] mr-4 max-h-[400px]" />
            </div>
            <div>
              <h2 className=" text-teal-500 text-7xl font-bold font-sans">
                SECURITY
              </h2>
              <p className=" ml-4 text-gray-600 text-6xl font-serif font-bold mt-4 ">
                Guard your enterprise
              </p>
            </div>
          </div>
          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
        </div>

        {/* section1 */}
        <section className="text-gray-700 font-semibold text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-4xl font-bold  text-teal-500 mb-4">
              DESIGN WITH SECURITY IN MIND
            </h3>
            <p>
              In today's digital landscape, security is not an option—it's
              essential. Our comprehensive security measures protect your entire
              operation, not just data, ensuring business continuity and
              safeguarding your enterprise's future.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-teal-500 mb-4">
              AVOID LOST REVENUE
            </h3>
            <p>
              Treat security as your smartest investment. Beyond immediate
              losses, breaches can erode customer trust and revenue. Prioritize
              security to safeguard not just your data but also your business's
              financial health and reputation.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-4xl font-bold text-teal-500 mb-4">
              SYSTEM DESIGN
            </h3>
            <p>
              Our Security by Design philosophy means building secure from the
              start. Utilizing AWS and its Well-Architected Framework, we ensure
              your infrastructure is protected from the outset, safeguarding
              your assets consistently.
            </p>
          </div>
        </section>
        {/* section2 */}
        <section className="text-gray-700 font-semibold text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-3xl font-bold  text-teal-500 mb-4">
              OPERATIONAL PRACTICES
            </h3>
            <p className="">
              We champion security-first operational excellence. Our rigorous
              protocols and continuous oversight fortify your operations,
              building a resilient defense against threats, ensuring business
              continuity.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-teal-500 mb-4">
              REDUCE RECOVERY COSTS
            </h3>
            <p>
              An effective response to security incidents can drastically reduce
              recovery costs. Preparing in advance allows you to mitigate
              recovery expenses, including potential regulatory fines and
              related damages.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-3xl font-bold text-teal-500 mb-4">
              REGULATORY COMPLIANCE
            </h3>
            <p>
              Effortless regulatory navigation aligns your security posture with
              industry standards, ensuring compliance without compromising
              operational fluidity.
            </p>
          </div>
        </section>
        {/* alt açıklama main 2 ye taşındı. */}
      </main>
      {/* main2 */}
      <main className="bg-gray-100 container mx-auto px-2 py-2 mt-8 mb-8 rounded-lg">
        <div className=" text-center px-2 py-2  mb-2 mt-4">
          {/* img and title */}
          <div className="flex justify-center items-center mt-4 mb-4">
            <div className="max-w-4xl mr-10">
              <h2 className="text-6xl font-bold font-sans text-teal-500 m-2">
                FEATURED SERVICES
              </h2>
              <p className="mb-4 mt-5 text-gray-700 text-5xl font-serif font-bold ">
                Your Trusted Partner in System Security
              </p>
              <p className="mb-2 text-gray-600 text-4xl font-sans font-semibold">
                Discover how The Scale Factory can help you to secure your
                systems, protect your data, and grow your business.
              </p>
            </div>
            <div>
              <img src={Cloud} className=" max-h-[400px] " />
            </div>
          </div>

          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
        </div>

        {/* section2 */}
        <section className=" text-gray-700 font-semibold text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <h3 className="text-3xl font-bold  text-teal-500 mb-4">
              SECURITY REVIEW
            </h3>
            <p>
              Enhance your AWS environment's defense against evolving threats
              with our detailed security reviews, aligning with compliance and
              standards.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-teal-500 mb-4">
              THREAT ASSESSMENT AND <br /> RESPONSE PLANNING
            </h3>
            <p>
              Proactively mitigate risks with our threat assessment, creating
              robust plans for quick and effective security incident responses.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-teal-500 mb-4">
              AWS WELL-ARCHITECTED REVIEW
            </h3>
            <p>
              Leverage AWS expertise to refine your system for peak efficiency,
              security, and scalability, ensuring a resilient architecture for
              growth.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-teal-500 mb-4">SUPPORT</h3>
            <p>
              Benefit from uninterrupted operational excellence with our
              steadfast support, ensuring your AWS systems contribute to your
              business’s success.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SecurityBusiness;
