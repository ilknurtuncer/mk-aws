import Push from "../assets/pictures/undraw_Push_notifications_re_t84m.png";
import Delivery from "../assets/pictures/undraw_delivery_truck_vt6p.png";
import Contact from "../assets/pictures/undraw_Contact_us_re_4qqt.png";

const AwsWellAr = () => {
  return (
    <>
      <main className="container mx-auto px-2 py-2 bg-white">
        <div className="text-center mb-2 mt-8">
          <h2 className="text-3xl font-bold  font-sans text-blue-700 mb-4">
            AWS WELL-ARCHITECTED REVIEW
          </h2>
          <p className="text-xl font-bold text-gray-600">
            Maximize Efficiency, Security, and Reliability.
            <br />
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />

            <img src={Push} className="max-w-full h-auto" />
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              HARNESS THE POWER OF AWS EXPERTISE
            </h3>
            <p className="text-gray-900 font-semibold font-sans">
              Optimizing your AWS architecture is pivotal for ensuring your
              infrastructure is not only high-performing but also cost-effective
              and secure. Cloudifiers brings you the full benefit of AWS best
              practices with a comprehensive Well-Architected Review tailored to
              your specific needs.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              IN-DEPTH REVIEW
            </h3>
            <p>
              Our team conducts a thorough examination based on the AWS
              Well-Architected Framework. This includes a focused review on
              particular concerns or a comprehensive evaluation of your entire
              AWS setup, designed to assess and enhance your cloud
              architecture's efficiency.
            </p>
            <img src={Delivery} className="max-w-full h-auto" />
          </div>
          <div className="p-6 rounded-lg">
            <img src={Contact} className="max-w-full h-auto" />
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              DETAILED REPORTING
            </h3>
            <p>
              At the conclusion of our assessment, you will receive a detailed
              report that provides technical recommendations, strategies for
              process improvement, and actionable insights. These are all
              customized to ensure your business objectives are met and your
              infrastructure remains robust and agile.
            </p>
          </div>
        </section>
      </main>
      {/* main2 */}
      <main className="container mx-auto px-4 py-2 bg-gray-100 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-600 mb-4 mt-6">
            HOW DOES IT WORK?
          </h2>
          <p>
            Experience a streamlined review process with our AWS
            Well-Architected expertise.
          </p>
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
            <h3 className="text-2xl font-bold text-gray-600 mb-4">BOOK</h3>
            <p>
              Start your optimization journey by booking a review online,
              choosing between a focused or a comprehensive review. Our AWS
              certified solutions architects will then coordinate with you to
              schedule a detailed remote review session.
            </p>
            {/* <a
              href="#"
              className="inline-block mt-4 bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a> */}
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
              PRIORITIZE
            </h3>
            <p>
              We take the time to understand your business priorities, ensuring
              that the review is tailored to the areas that are most critical to
              you. This targeted approach allows us to concentrate our efforts
              where they will have the most impact.
            </p>
            {/* <a
              href="#"
              className="inline-block mt-4 bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a> */}
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
            <h3 className="text-2xl font-bold text-gray-600 mb-4">REVIEW</h3>
            <p>
              Our review is a collaborative process involving key stakeholders
              from your business. Reflecting your priorities, we assess your
              cloud architecture across the essential Well-Architected pillars,
              which include operational excellence, security, reliability,
              performance efficiency, cost optimization, and sustainability.
            </p>
            {/* <a
              href="#"
              className="inline-block mt-4 bg-gray-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a> */}
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
            <h3 className="text-2xl font-bold text-gray-600 mb-4">REPORT</h3>
            <p>
              After the review, you'll receive a comprehensive report that not
              only identifies areas of risk but also provides recommendations
              for technical or process improvements. These insights are crafted
              to align with your specific business context, guiding you towards
              an optimized and resilient cloud infrastructure.
            </p>
            {/* <a
              href="#"
              className="inline-block mt-4 bg-gray-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default AwsWellAr;
