import { Carousel } from "flowbite-react";
// eslint-disable-next-line no-unused-vars
import LogoImage from "../assets/pictures/img8.jpg";
import LogoImage1 from "../assets/pictures/img3.jpg";
import LogoImage2 from "../assets/pictures/img2.jpg";
import LogoImage3 from "../assets/pictures/img7.jpg";
import LogoImage4 from "../assets/pictures/img4.jpg";
import "../index.css";

function Component() {
  return (
    <div className="relative h-screen">
      <Carousel pauseOnHover className="carousel-slide border-0 rounded-none">
        {/* Carousel Slide 1 */}
        <div className="flex h-full w-full items-center justify-center object-cover relative ">
          <div className="absolute flex flex-col items-center justify-center bottom-0 right-40 left-40 p-20 ">
            <h1 className="text-left text-red-700 text-opacity-80 text-7xl font-extrabold  mb-8">
              Empowering Your Cloud Journey
            </h1>
            <p className=" text-cyan-700 font-bold text-3xl hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. <br /> Let us guide you through a seamless and secure
              digital transformation.
            </p>
            {/* <a
              href="tel:123456789"
              className="text-red-500 text-xl mt-4 p-1 rounded hover:underline hidden sm:inline-block"
            >
              Call us: (123) 456-789
            </a> */}
          </div>
          <img src={LogoImage} alt="..." className="w-full h-full" />
        </div>

        {/* Carousel Slide 2 */}
        <div className="flex h-full w-full items-center justify-center object-cover relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
          <div className="absolute flex flex-col items-center justify-center top-[200px] right-40 left-40 p-20">
            <h1 className="text-center text-green-400  text-6xl font-extrabold  mb-8">
              Tailored AWS Solutions for Optimal Performance
            </h1>
            <p className="text-white font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. Let us guide you through a seamless and secure digital
              transformation.
            </p>
            {/* <a
              href="tel:123456789"
              className="text-red-500 text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 p-1 rounded hover:underline hidden sm:inline-block"
            >
              Call us: (123) 456-789
            </a> */}
          </div>
          <img src={LogoImage3} alt="..." className="w-full h-full" />
        </div>

        {/* Carousel Slide 3 */}
        <div className="flex h-full w-full items-center justify-center object-cover relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
          <div className="absolute flex flex-col items-center justify-center mt-10 left-0 p-14 w-1/2">
            <h1 className="text-left text-teal-400 text-opacity-90 text-9xl sm:text-5xl md:text-6xl lg:text-9xl font-extrabold mb-4 sm:mb-6 lg:mb-8">
              Secure Your Data, Fortify Your Business
            </h1>
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl hidden sm:block ">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. Let us guide you through a seamless and secure digital
              transformation.
            </p>
            {/* <a
              href="tel:123456789"
              className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 p-1 rounded hover:underline hidden sm:inline-block"
            >
              Call us: (123) 456-789
            </a> */}
          </div>
          <img src={LogoImage1} alt="..." className="w-full h-full" />
        </div>

        {/* Carousel Slide 4 */}
        <div className="flex h-full w-full items-center justify-center object-cover relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
          <div className="absolute flex flex-col mr-4 ml-2 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-64 mb-2 w-1/2 right-10 top-8 pt-10">
            <h1 className="text-left text-amber-500 text-opacity-80 text-8xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 lg:mb-8 pt-16 ">
              Full-Stack Design
            </h1>
            <p className=" text-white font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl hidden sm:block pt-28 ">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. Let us guide you through a seamless and secure digital
              transformation.
            </p>
            {/* <a
              href="tel:123456789"
              className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 p-1 rounded hover:underline hidden sm:inline-block"
            >
              Call us: (123) 456-789
            </a> */}
          </div>

          <img src={LogoImage2} alt="..." className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0"></div>
        </div>

        {/* Carousel Slide 5 */}
        <div className="flex h-full w-full items-center justify-center object-cover relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
          <div className="absolute flex flex-col mr-4 ml-2 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-64 mb-2 w-1/2 right-0 bottom-[100px]">
            <h1 className="text-left text-red-600 text-opacity-80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8">
              Optimize Your Cloud Spending
            </h1>
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl hidden sm:block">
              Discover unparalleled expertise in AWS Infrastructure and Cloud
              Migration. Let us guide you through a seamless and secure digital
              transformation.
            </p>
            {/* <a
              href="tel:123456789"
              className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 p-1 rounded hover:underline hidden sm:inline-block"
            >
              Call us: (123) 456-789
            </a> */}
          </div>

          <img src={LogoImage4} alt="..." className="w-full h-full" />
        </div>
      </Carousel>
    </div>
  );
}

export default Component;
