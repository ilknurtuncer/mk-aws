
/* eslint-disable jsx-a11y/alt-text */
import ağ3 from "../assets/images/Bulut9.jpg";
import ağ1 from '../assets/images/Bulut10.jpg'
import ağ2 from "../assets/images/Bulut11.jpg";



const AwsWellAr = () => {
  return (
    <>
      <main className="font-sans container mx-auto max-w-7xl px-2 py-2 bg-white">
        <div className="text-center mb-8 mt-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sans text-teal-500 opacity-[0.9] mb-6">
            AWS WELL-ARCHITECTED REVIEW
          </h2>
          <p className="mb-8 text-4xl sm:text-5xl font-bold font-sans text-gray-500">
            Maximize Efficiency, Security, and Reliability.
            <br />
          </p>
          <hr class="border-teal-500 border-[1.5px] dark:border-gray-700 "></hr>
        </div>
        {/* section */}
        <section className="text-lg font-bold font-sans text-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 opacity-[0.9]">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <img src={ağ3} className="max-w-full h-auto mb-4 opacity-[0.9]" />
            <h3 className="text-2xl text-teal-500 font-bold   mb-4">
              HARNESS THE POWER OF AWS EXPERTISE
            </h3>
            <p>
              Boost infrastructure with Cloudifiers for peak performance, cost
              savings, and security. Benefit from a bespoke AWS Review that
              enhances and aligns with your business needs.
            </p>
          </div>
          <div className="p-6 rounded-lg mt-4">
            <h3 className="text-2xl text-teal-500 mb-4">IN-DEPTH REVIEW</h3>
            <p>
              Delve into your AWS infrastructure with our expert team. Whether
              addressing specific challenges or evaluating your entire setup,
              our review aims to refine and power up your cloud architecture.
            </p>
            <img src={ağ2} className="max-w-full h-auto mt-6 " />
          </div>
          <div className="p-6 rounded-lg">
            <img src={ağ1} className="max-w-full h-auto mb-4" />
            <h3 className="text-2xl text-teal-500 mb-4">DETAILED REPORTING</h3>
            <p>
              Concluding our assessment, we present a report rich in technical
              guidance, strategic process enhancements, and bespoke insights-all
              to align with your business goals and fortify your
              infrastructure’s agility and strength.
            </p>
          </div>
        </section>
        {/* alt açıklama-iletişim */}
        {/* <div className="text-center border-l-8 border-teal-500 rounded-lg bg-[#fea10c] px- py-2  mb-2 mt-8">
          <p className=" text-gray-800 font-sans font-bold">
            Discover the Cloudifiers difference and how our expertise can
            revolutionize your business operations. <br /> Get in touch today to
            begin your journey to the cloud.
          </p>
          <div>
            <p className="font-bold text-teal-600 ">
              iletişim tel: <span className="text-black">0546 546####</span>{" "}
            </p>
          </div>
        </div> */}
      </main>
      {/* main2 */}
      <main className="bg-gray-100 container mx-auto max-w-7xl px-2 py-2 mt-8 mb-8 rounded-lg">
        <div className=" text-center px-2 py-2  mb-2 mt-4">
          {/* img and title */}
          <div className="flex justify-center items-center mt-4 mb-4">
            <div className="mr-10">
              <h2 className="text-4xl sm:text-5xl font-bold font-sans text-teal-500 m-2 opacity-[0.9]">
                HOW DOES IT WORK?
              </h2>
              <p className="mb-4 mt-5 text-gray-500 text-3xl sm:text-4xl font-sans font-bold ">
                Experience a streamlined review process with our AWS
                Well-Architected expertise.
              </p>
            </div>           
          </div>

          <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>
        </div>

        {/* section2 */}
        <section className=" text-gray-600 font-bold text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 opacity-[0.9]">
          <div className="p-6 rounded-lg">
            <div className="flex justify-center items-center" />
            <h3 className="text-2xl font-bold  text-teal-500 mb-4">BOOK</h3>
            <p>
              EInitiate your AWS enhancement by scheduling an online review.
              Choose the scope and let our certified architects plan a thorough
              remote session with you.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">
              PRIORITIZE
            </h3>
            <p>
              Understanding your business's core needs is our priority. Our
              review focuses sharply on critical areas, ensuring impactful and
              targeted improvements.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">REVIEW</h3>
            <p>
              Our collaborative review brings together your key stakeholders and
              our AWS specialists to thoroughly assess and uplift your cloud
              architecture’s most vital aspects.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-500 mb-4">REPORT</h3>
            <p>
              Post-review, we furnish a comprehensive report pinpointing risks
              and opportunities, furnishing you with tailored advice to navigate
              towards an optimized, future-ready cloud setup.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AwsWellAr;
