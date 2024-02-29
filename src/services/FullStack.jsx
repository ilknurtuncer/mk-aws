/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */


// import developer from "../assets/pictures/developer.jpg";
import developer from "../assets/pictures/time2.jpg";
import Time from "../assets/pictures/time.jpg";

const FullStack = () => {
  return (
    <>
      {/* main1 */}
      <main className="container max-w-7xl mx-auto px-2 py-2 bg-white">
        <div className="text-center  py-2  mb-2 mt-2">
          {/* img and title */}
          <div className="flex justify-center items-center flex-col sm:flex-row">
            <div>
              <img src={developer} className=" opacity-[] mr-4 max-h-[360px]" />
            </div>
            <div>
              <h2 className=" text-teal-500 text-4xl sm:text-5xl font-bold font-sans opacity-[0.9]">
                FULLSTACK-WEB DEVELOPMENT
              </h2>
              <p className=" ml-4 text-yellow-400 text-3xl sm:text-5xl font-sans font-bold mt-4 max-w-4xl">
                Creating User-Friendly Digital Interfaces That Drive Engagement
              </p>
            </div>
          </div>
          <hr className="border-teal-500 border-[1.5px] dark:border-gray-700 mt-4 "></hr>
        </div>
      </main>

      {/* main2 */}
      <main className="bg-white container max-w-7xl mx-auto ">
        <main className=" text-lg font-bold bg-white text-gray-600 mx-auto px-2 py-2">
          {/* section1 */}
          <section className=" font-bold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="p-[66px] rounded-[50%] text-center border-x-4 border-y-2 border-teal-500 shadow-gray-600 shadow-xl  ">
              <div className="flex justify-center items-center" />
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                ENGAGING DESIGNS
              </h3>
              <p>
                Crafting first impressions online. We design intuitive, engaging
                websites that embody your brand and smooth the path to customer
                conversion
              </p>
            </div>
            <div className="p-[66px] rounded-[50%] text-center border-x-4 border-y-2 border-teal-500 shadow-gray-600 shadow-xl">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                UNIVERSAL ACCESS
              </h3>
              <p>
                Seamless browsing on all devices. Our responsive designs ensure
                a flawless user experience, regardless of how or where your site
                is accessed.
              </p>
            </div>
            <div className="p-[66px] rounded-[50%] text-center border-x-4 border-y-2 border-teal-500 shadow-gray-600 shadow-xl">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                SEO & SPEED
              </h3>
              <p>
                Visually stunning and easily found. Our design process
                incorporates SEO and swift load times to elevate visibility and
                user retention.
              </p>
            </div>
            <div className="p-16 rounded-[50%] text-center border-x-4 border-y-2 border-teal-500 shadow-gray-600 shadow-xl">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                USER EXPERIENCE FOCUSED
              </h3>
              <p>
                Creating inviting online spaces. We focus on user-friendly
                designs with intuitive navigation, enhancing interaction and
                engagement.
              </p>
            </div>
            <div className="p-16 rounded-[50%] text-center border-x-4 border-y-2 border-teal-500 shadow-gray-600 shadow-xl">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                E-COMMERCE & LEADS
              </h3>
              <p>
                Tailored online sales and lead-gen solutions. Our designs drive
                conversions and cultivate potential clients with efficiency.
              </p>
            </div>
            <div className="p-16 rounded-[50%] text-center border-x-4 border-y-2 border-teal-500 shadow-gray-600 shadow-xl">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                CONTINUOUS EVOLUTION
              </h3>
              <p>
                Your site grows with your business. We offer continuous support
                and insights to keep your digital presence dynamic and aligned
                with market trends.
              </p>
            </div>
          </section>
        </main>
      </main>

      {/* main3 */}
      <main className="container mx-auto max-w-7xl bg-[#fbf4eb] rounded-lg">
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
              <h2 className="text-4xl sm:text-5xl font-bold font-sans text-teal-500 mb-4 mt-8">
                FEATURED SERVICES
              </h2>
              <p className=" text-zinc-600 text-3xl sm:text-5xl max-w-4xl font-sans font-bold ">
                Your Digital Transformation Partner
              </p>
            </div>
          </div>
        </div>

        <section className="font-bold text-xl  text-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-8 p-6">
          <div className="p-4 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              WEB DESIGN EXCELLENCE
            </h3>
            <p>
              Elevate your online presence. Our expertise ensures your website
              is a strategic, visually appealing gateway to customer conversion.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              USER EXPERIENCE ENHANCEMENT
            </h3>
            <p>
              Enhance visitor engagement. We prioritize intuitive navigation and
              interaction, ensuring visitors stay longer and return frequently.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              RESPONSIVE DESIGN INTEGRATION
            </h3>
            <p>
              Embrace device diversity. Our responsive design guarantees an
              optimal viewing experience across all platforms.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              VISIBILITY BOOST
            </h3>
            <p>
              Amplify your online presence. Our SEO and content strategies
              increase traffic and elevate search rankings.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              PERFORMANCE TUNING
            </h3>
            <p>
              Ensure rapid, reliable site access. We optimize technical
              performance for faster loading and smooth browsing.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              CONVERSION OPTIMIZATION
            </h3>
            <p>
              Convert more visitors. Our data-driven methods improve
              call-to-action effectiveness and user pathways.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default FullStack;
