// import Time from "../assets/pictures/time.jpg";
import Cloud from "../assets/pictures/rise.jpg";
import Grup1 from "../assets/pictures/grup1.jpg";

const Security = () => {
  return (
    <>
      <main className="container  mx-auto px-2 py-2 bg-white">
        <div className="text-center px- py-2  mb-2 mt-4">
          {/* img and title */}
          <div className="flex justify-center items-center">
            <div className="">
              <img src={Grup1} className="mr-4 max-h-80 " />
            </div>
            <div>
              <h2 className=" text-fuchsia-800 text-4xl font-bold font-sans m-2">
                SECURITY
              </h2>
              <p className=" ml-4 text-gray-500 text-2xl font-sans font-bold ">
                Secure the core of your business
              </p>
            </div>
          </div>

          <hr className="border-fuchsia-800 border-[1.5px] dark:border-gray-700 "></hr>
          {/* <div className="bg-orange-500 h-1"></div> */}
        </div>
        {/* section1 */}
        <section className="text-gray-600 font-semibold  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold  text-fuchsia-800 mb-4">
              DESIGN WITH SECURITY IN MIND
            </h3>
            <p>
              In the digital landscape, security is paramount for every
              business, big or small. A breach can jeopardize not just data but
              your entire operation. That's why robust security measures are a
              fundamental necessity, not just an optional extra. It's about
              safeguarding your livelihood and ensuring continuity no matter
              what.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">
              AVOID LOST REVENUE
            </h3>
            <p>
              Security is your most profitable investment. The cost of a
              security breach extends beyond immediate losses. It can disrupt
              your operations and erode customer trust, leading to significant
              revenue declines. By prioritizing security, you protect not just
              your data, but also your revenue streams and business reputation.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">
              SYSTEM DESIGN
            </h3>
            <p>
              Build with confidence from the ground up. Leveraging AWS, we adopt
              a Security by Design philosophy, integrating industry-leading
              practices and the AWS Well-Architected Framework from the outset.
              This proactive stance ensures that your infrastructure is secure
              by default, protecting your assets from day one.
            </p>
          </div>
        </section>
        {/* section2 */}
        <section className="text-gray-600 font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            {/* <img src={Push} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold  text-fuchsia-800 mb-4">
              OPERATIONAL PRACTICES
            </h3>
            <p className="">
              Operational excellence means security first. We help instill a
              culture of security within your operations. This involves setting
              up rigorous security protocols, continuous monitoring, and regular
              reviews to ensure defenses remain impenetrable, keeping your
              business resilient against threats.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">
              REDUCE RECOVERY COSTS
            </h3>
            <p>
              Minimize the impact of breaches. A swift and effective response to
              security incidents can significantly lower the cost and impact of
              recovery. By preparing in advance, you can avoid the extensive
              costs associated with breach recovery, including regulatory fines
              and compensatory damages.
            </p>
            {/* <img src={Cost} className="max-w-full h-auto" /> */}
          </div>
          <div className="p-6 rounded-lg">
            {/* <img src={Contact} className="max-w-full h-auto" /> */}
            <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">
              REGULATORY COMPLIANCE
            </h3>
            <p>
              Navigate compliance with ease. Adhering to regulatory requirements
              doesn't have to be a burden. We provide expertise to ensure that
              your security posture aligns with industry regulations, helping
              you maintain compliance without sacrificing operational agility.
            </p>
          </div>
        </section>
        {/* alt açıklama main 2 ye taşındı. */}
      </main>
      {/* main2 */}
      <main className="container  mx-auto px-2 py-2 bg-white">
        <div className="text-center px-2 py-2  mb-2 mt-4">
          {/* img and title */}
          <div className="flex justify-center items-center">
            <img src={Cloud} className="max-h-80 " />
            {/* küçük ekranda img responsive'ni ayarla */}
            <div>
              <h2 className="text-4xl font-bold font-sans text-teal-500 m-2">
                FEATURED SERVICES
              </h2>
              <p className="mb-2 text-gray-500 text-3xl font-serif font-bold ">
                Your Trusted Partner in System Security
              </p>
              <p className="mb-2 text-gray-500 text-2xl font-sans font-semibold">
                Discover how The Scale Factory can help you to secure your
                systems, <br /> protect your data, and grow your business.
              </p>
            </div>
          </div>

          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
        </div>

        {/* section1 */}
        <section className="text-gray-600 font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <h3 className="text-2xl font-bold  text-teal-500 mb-4">
              SECURITY REVIEW
            </h3>
            <p>
              Safeguard your operations. Ensure that your AWS environments are
              fortified to meet the rigorous demands of compliance and industry
              standards. Our comprehensive security review identifies potential
              vulnerabilities, ensuring your infrastructure is resilient against
              threats.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              THREAT ASSESSMENT AND RESPONSE PLANNING
            </h3>
            <p>
              Stay ahead of potential threats. Our Threat Assessment service
              evaluates your system's susceptibility to potential security
              threats and helps you develop a robust response plan. We focus on
              early detection and strategic planning to ensure you can respond
              to and recover from any security event with minimal impact on your
              business.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              AWS WELL-ARCHITECTED REVIEW
            </h3>
            <p>
              Maximize efficiency and security. Gain insights from AWS experts
              on how to optimize your architecture for cost savings, improved
              efficiency, and enhanced security. Learn how to build a robust and
              reliable system that scales with your business needs.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">SUPPORT</h3>
            <p>
              Continuous support for uninterrupted growth. Keep your business
              ahead of the competition with a reliable AWS platform. Our
              dedicated support ensures that your systems are running smoothly,
              fostering an environment where your business can thrive.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Security;
