import Push from "../assets/pictures/undraw_Push_notifications_re_t84m.png";
import Delivery from "../assets/pictures/undraw_delivery_truck_vt6p.png";
import Contact from "../assets/pictures/undraw_Contact_us_re_4qqt.png";
import Connection from "../assets/pictures/undraw_Connection_re_lcud.png";
const BuildAws = () => {
  return (
    <>
      {/* ===main1=== */}
      <main className="container text-gray-700 mx-auto px- py-2 bg-white">
        {/* ####section#### 1 */}
        <div className=" px- py-2  mb-2 mt-10">
          <h2 className="text-4xl font-bold font-serif text-blue-600 mb-2">
            BUILD AWS INFRASTRUCTURE
          </h2>
          <p className="text-3xl text-gray-700 font-serif font-bold mb-2 ">
            Accelerate Your Cloud Infrastructure with Expertise and Partnership
          </p>
          <hr class="border-blue-400 border-[1.5px] dark:border-gray-700 mb-4"></hr>
          <p className="mb-4 font-semibold text-3xl">
            Building a robust AWS infrastructure is pivotal to your cloud
            journey. Partner with us to gain access to top-tier engineering
            talent and a partnership that extends beyond mere construction to
            empowerment. Our approach ensures your team is integrated into the
            process, acquiring the skills and knowledge necessary to master your
            AWS environment.
          </p>
        </div>
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {/* =====a1==== */}
          <a
            href="#"
            className="text-lg shadow-lg shadow-blue-400  flex flex-col items-center bg-white border border-purple-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <article className="rounded p-2 h-full bg-blue-500"></article>

            <div className=" flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                Why Choose Us?
              </h5>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Collaborative Builds: We work alongside your team, not just for
                them, fostering a collaborative environment that ensures a deep
                understanding of the infrastructure from the ground up. No
                Handover Hassles: With our model, your team becomes
                self-sufficient, eliminating the need for extensive handovers.
                You own the process and the product from day one. Tailored
                Expertise: Our AWS-certified engineers don't just build; they
                mentor and explain, leaving your team with not just a system,
                but the rationale behind it.
              </p>
            </div>
          </a>
          {/* ====a2===== */}
          <a
            href="#"
            className="text-lg shadow-lg shadow-blue-400 flex flex-col items-center bg-white border border-purple-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <article className="rounded p-2 h-full bg-blue-500"></article>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                Continuity of Support
              </h5>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Completing your AWS build is just the beginning. Stay connected
                with ongoing support through our Support Subscription. We're
                here to ensure your infrastructure evolves with your business.
              </p>
            </div>
          </a>
          {/* ======a3===== */}
          <a
            href="#"
            className="text-lg shadow-lg shadow-blue-400 flex flex-col items-center bg-white border border-purple-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <article className="rounded p-2 h-full bg-blue-500"></article>
            {/* <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="Part3"
              alt=""
            /> */}
            <div className=" flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                Engage with Our AWS Specialists
              </h5>
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                Have a project in mind? Discuss your AWS infrastructure goals
                with our specialists. We'll help you envision and execute an
                infrastructure that's scalable, secure, and strategically
                aligned with your business objectives.
              </p>
            </div>
          </a>
        </section>
        <div className="px- py-2  mb-2 mt-8">
          <h2 className="text-4xl font-bold font-sans text-indigo-600 mb-4 mt-16">
            Your AWS Partner for Growth
          </h2>
          <p className="text-2xl font-serif font-bold mb-4 ">
            The Scale Factory is your dedicated partner in optimizing AWS cloud
            solutions to enhance agility, <br /> accelerate innovation, and drive
            success for dynamic small and medium-sized enterprises.
          </p>
          <hr class="border-purple-400 border-[1.5px] dark:border-gray-700 "></hr>
          {/* <div className="bg-orange-500 h-1"></div> */}
        </div>
        <section className="text-md font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <img src={Push} className="max-w-full h-auto" />
            <h3 className="text-2xl font-bold font-serif text-indigo-600 mb-4">
              DEPLOY
            </h3>
            <p className="">
              Build a solid foundation on AWS. We assist you in creating a
              robust AWS infrastructure that prioritizes security, reliability,
              and operational efficiency, all tailored to fit your budget and
              growth projections. Let us help you lay down the groundwork that
              supports your business now and as it expands.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold font-serif text-indigo-600 mb-4">
              MIGRATE
            </h3>
            <p>
              Seamless transition to the cloud. If you're moving from an
              on-premises setup or shifting from another cloud service, we've
              got you covered. Our migration strategies are designed to minimize
              downtime and leverage potential funding opportunities from AWS to
              optimize your move.
            </p>
            <img src={Delivery} className="max-w-full h-auto" />
          </div>
          <div className="p-6 rounded-lg">
            <img src={Contact} className="max-w-full h-auto" />
            <h3 className="text-2xl font-bold font-serif text-indigo-600 mb-4">
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
        {/* alt açıklama */}
        <div className="text-center border-l-8 border-blue-700 rounded-lg bg-purple-400 px- py-2  mb-2 mt-8">
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
      {/* ====main2==== */}
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
              Advice, engineering, and training to overcome your unique
              challenges. Our consulting packages are crafted to solve specific
              problems faced by small and medium-sized businesses, offering
              solutions at a fixed price. Benefit from our expertise to
              streamline your operations and enhance efficiency.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
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
              Custom AWS solutions, designed for the growth trajectory of your
              business. Every small and medium-sized business has its own path.
              Our growth solutions are personalized, ensuring your AWS
              infrastructure scales as your business expands, supporting your
              goals every step of the way.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
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
              Continuous, dedicated support tailored for your business needs.
              Establish a partnership with a team that's committed to your
              business's continuous improvement. Our support services give you
              anytime access to AWS expertise, allowing you to fully utilize
              cloud technology to drive your business forward.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-500  hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
      <br />
    </>
  );
};

export default BuildAws;
