

const Main = () => {
  return (
    <div>
      <main className="container mx-auto px-2 py-2 bg-white">
        <div className="text-center mb-2 mt-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            PASSIONATE ABOUT SCALING
          </h2>
          <p>
            Scaling businesses. Scaling infrastructure.
            <br />
            We've worked with SaaS companies like yours since 2009.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <img
              src="./assets/pictures/undraw_Push_notifications_re_t84m.png"
              className="max-w-full h-auto"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-4">DEPLOY</h3>
            <p>
              Build your brand new SaaS platform on AWS. We'll help you design
              for security, reliability, and ease of operations, all with your
              budget and future growth in mind.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">MIGRATE</h3>
            <p>
              Coming from an on-premises environment or another cloud platform?
              No problem! We'll help you design and execute your move, with
              access to migration funding from AWS.
            </p>
            <img
              src="./assets/pictures/undraw_delivery_truck_vt6p.png"
              className="max-w-full h-auto"
            />
          </div>
          <div className="p-6 rounded-lg">
            <img
              src="./assets/pictures/undraw_Contact_us_re_4qqt.png"
              className="max-w-full h-auto"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-4">UPGRADE</h3>
            <p>
              We'll help you get the most from your existing AWS platform,
              improving performance, security, reliability, and cost management.
            </p>
          </div>
        </section>
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
            {/* <img
            src="./assets/pictures/undraw_Working_remotely_re_6b3a.png"
            class="max-w-full h-auto"
          /> */}
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
            {/* <img
            src="./assets/pictures/undraw_Questions_re_1fy7.png"
            class="max-w-full h-auto"
          /> */}
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
            {/* <img
            src="./assets/pictures/undraw_Real_time_sync_re_nky7.png"
            class="max-w-full h-auto"
          /> */}
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
    </div>
  );
}

export default Main
