// import About from "../assets/pictures/hakkimizda.png";

const AboutUs = () => {
  return (
    <>
      <main className="container mx-auto">
        <div className="text-xl font-semibold py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl  font-extrabold text-teal-500">ABOUT US</h2>
            <p className="mt-2 text-2xl font-bold text-gray-500">
              Expert Cloud Solutions by MK Consultancy.
            </p>
            <hr className="border-teal-400 border-[1.5px] dark:border-gray-700 "></hr>  
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-teal-500">
                Tradition of Innovation and Expertise
              </h3>
              <p className="mt-2 text-gray-600">
                As a trademark of MK Consultancy (UK) Ltd, established in 2016,
                Cloudifiers is the embodiment of our commitment to deliver
                state-of-the-art cloud solutions. We specialize in AWS-based
                services, focusing on equipping small and medium-sized UK
                businesses with the tools and strategies to thrive in today's
                digital ecosystem.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-teal-500">
                Certified AWS Architects at Your Service
              </h3>
              <p className="mt-2 text-gray-600">
                Our team is our pride—a group of certified AWS Solutions
                Architects, each bringing a specialized set of skills to our
                consultancy. Our clients benefit from this deep reservoir of
                knowledge, ensuring that every AWS solution we deliver is built
                on a foundation of certified expertise and tailored to the
                highest standards of efficiency and security.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-teal-500">
                Bespoke AWS Services
              </h3>
              <p className="mt-2 text-gray-600">
                We offer a suite of AWS services crafted to the unique
                requirements of your business. From optimizing your cloud
                storage solutions to fine-tuning your IT infrastructure for peak
                performance, our goal is to enhance your operational
                capabilities while keeping a keen eye on cost-effectiveness.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-teal-500">
                Committed to Operational Excellence
              </h3>
              <p className="mt-2 text-gray-600">
                Our mission extends beyond providing services; it's about
                fostering enduring partnerships that support your ongoing
                growth. As part of MK Consultancy, Cloudifiers is dedicated to
                ensuring that your transition and continuous operation in the
                cloud are as seamless and productive as possible. We stand by
                our clients every step of the way, ensuring that their cloud
                journey is marked by success.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
