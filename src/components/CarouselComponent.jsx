import { Carousel } from "flowbite-react";

function Component() {
  return (
    <div className="relative h-screen">
    <Carousel pauseOnHover>
      {/* Carousel Slide 1 */}
      <div className="flex h-full w-full items-center justify-center object-cover relative">
        <div className="absolute flex flex-col items-center justify-center bottom-0 right-40 left-40 p-20">
          <h1 className="text-left text-red-600 text-opacity-80 text-7xl font-extrabold mb-8">
            Empowering Your Cloud Journey
          </h1>
          <p className=" text-gray-50 font-bold text-3xl hidden sm:block">
            Discover unparalleled expertise in AWS Infrastructure and Cloud Migration. Let us guide you through a seamless and secure digital transformation.
          </p>
          <a
            href="tel:123456789"
            className="text-red-500 text-xl mt-4 p-1 rounded hover:underline hidden sm:inline-block"
          >
            Call us: (123) 456-789
          </a>
        </div>
        <img
          src="https://images.pexels.com/photos/1192057/pexels-photo-1192057.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="..."
          className="w-full h-full"
        />
      </div>
  
      {/* Carousel Slide 2 */}
      <div className="flex h-full w-full items-center justify-center object-cover relative">
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 p-14 w-1/2">
          <h1 className="text-left text-red-600 text-opacity-80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 lg:mb-8">
            Empowering Your Cloud Journey
          </h1>
          <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl hidden sm:block">
            Discover unparalleled expertise in AWS Infrastructure and Cloud Migration. Let us guide you through a seamless and secure digital transformation.
          </p>
          <a
            href="tel:123456789"
            className="text-red-500 text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 p-1 rounded hover:underline hidden sm:inline-block"
          >
            Call us: (123) 456-789
          </a>
        </div>
        <img
          src="https://hermes.dio.me/articles/cover/28e9b9e1-ee46-49a4-9c3d-3b30ba039eea.jpg"
          alt="..."
          className="w-full h-full"
        />
      </div>
  
      {/* Carousel Slide 3 */}
      <div className="flex h-full w-full items-center justify-center object-cover relative">
        <div className="absolute flex flex-col items-center justify-center bottom-0 left-0 p-14 w-1/2">
          <h1 className="text-left text-red-400 text-opacity-80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8">
            Empowering Your Cloud Journey
          </h1>
          <p className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl hidden sm:block">
            Discover unparalleled expertise in AWS Infrastructure and Cloud Migration. Let us guide you through a seamless and secure digital transformation.
          </p>
          <a
            href="tel:123456789"
            className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 p-1 rounded hover:underline hidden sm:inline-block"
          >
            Call us: (123) 456-789
          </a>
        </div>
        <img
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="..."
          className="w-full h-full"
        />
      </div>
  
      {/* Carousel Slide 4 */}
      <div className="flex h-full w-full items-center justify-center object-cover relative">
        <div className="absolute flex flex-col mr-4 ml-2 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-64 mb-2 w-1/2 right-0">
          <h1 className="text-left text-red-600 text-opacity-80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8">
            Empowering Your Cloud Journey
          </h1>
          <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl hidden sm:block">
            Discover unparalleled expertise in AWS Infrastructure and Cloud Migration. Let us guide you through a seamless and secure digital transformation.
          </p>
          <a
            href="tel:123456789"
            className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 p-1 rounded hover:underline hidden sm:inline-block"
          >
            Call us: (123) 456-789
          </a>
        </div>

  <img
    src="https://e0.pxfuel.com/wallpapers/542/17/desktop-wallpaper-aws-launches-amazon-location-service-tech-business-news-amazon-web-services.jpg"
    alt="..."
    className="w-full h-full"
  />
</div>


      </Carousel>
    </div>
  );
}

export default Component;
