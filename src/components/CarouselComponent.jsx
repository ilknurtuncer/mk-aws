import { Carousel } from "flowbite-react";
import LogoImage from "../assets/carousel/img8.jpg";
import LogoImage1 from "../assets/carousel/pexels-visual-tag-mx-2566573.jpg";
import LogoImage2 from "../assets/carousel/img2.jpg";
import LogoImage3 from "../assets/carousel/img7.jpg";
import LogoImage4 from "../assets/carousel/img4.jpg";
import "../index.css";

function Component() {
  return (
    <div className="relative h-screen">
      <Carousel pauseOnHover className="carousel-slide border-0 rounded-none">
        {/* Carousel Slide 1 */}
        <div className="relative h-full">
          <img
            src={LogoImage}
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute  flex flex-col justify-center items-center text-center bottom-0 right-40 left-40 p-20 sm:px-4 ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-teal-400">
              Empowering Your Cloud Journey
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. <br /> Let us guide you through a seamless and secure
              digital transformation.
            </p>
          </div>
        </div>

        {/* Carousel Slide 2 */}
        <div className="relative h-full">
          <img
            src={LogoImage3}
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-60 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-teal-400">
              Tailored AWS Solutions <br /> for Optimal Performance
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. <br /> Let us guide you through a seamless and secure
              digital transformation.
            </p>
          </div>
        </div>

        {/* Carousel Slide 3 */}
        <div className="relative h-full">
          <img
            src={LogoImage1}
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-60 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-teal-400">
              Secure Your Data, Fortify Your Business
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. <br /> Let us guide you through a seamless and secure
              digital transformation.
            </p>
          </div>
        </div>

        {/* Carousel Slide 4 */}
        <div className="relative h-full">
          <img
            src={LogoImage2}
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-60 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center left-10 bottom-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-teal-400">
              Full-Stack Design
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. <br /> Let us guide you through a seamless and secure
              digital transformation.
            </p>
          </div>
        </div>

        {/* Carousel Slide 5 */}
        <div className="relative h-full">
          <img
            src={LogoImage4}
            alt="..."
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-60 z-0"></div>
          <div className="absolute  flex flex-col justify-center items-center text-center text-white px-4  right-5 bottom-40">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-teal-500">
              Optimize Your Cloud Spending
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. <br /> Let us guide you through a seamless and secure
              digital transformation.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Component;
