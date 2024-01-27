import { Carousel } from 'flowbite-react';

function Component() {
  return (
    <div className=" relative h-screen ">
       <Carousel pauseOnHover>
       <div className="flex h-full w-full items-center justify-center object-cover relative">
  <div className='absolute flex flex-col items-center  justify-center right-40 left-40  p-28'>
    <h1 className=' text-left text-red-600 text-opacity-80 text-7xl font-extrabold mb-8'>
      Empowering Your Cloud Journey
    </h1>
    <p className='text-white font-bold text-3xl'>
      Discover unparalleled expertise in AWS Infrastructure and Cloud Migration. Let us guide you through a seamless and secure digital transformation.
    </p>
    <a href="tel:123456789" className=" text-red-500  text-xl mt-4 p-1  rounded hover:underline ">Call us: (123) 456-789</a>
  </div>
  <img src="https://images.pexels.com/photos/1192057/pexels-photo-1192057.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." className='w-full h-full' />
</div>


       
        <div className="flex h-full items-center justify-center object-cover">
        <div className='absolute flex items-center bg-zinc-600 bg-opacity-30 justify-center right-40 left-40 border-r-8 p-28'>
          <p className='text-white font-bold text-3xl  '>From Storage Solutions to Performance Optimization, our dedicated team ensures your AWS architecture is robust, secure, and cost-efficient.
            </p> 
        </div>
        
         <img src="https://hermes.dio.me/articles/cover/28e9b9e1-ee46-49a4-9c3d-3b30ba039eea.jpg" alt="..." className='w-full h-full' />
        </div>
        <div className="flex h-full w-full  items-center justify-center object-cover">
        <div className='absolute flex items-center bg-zinc-600 bg-opacity-30 justify-center right-40 left-40 border-r-8 p-28'>
          <p className='text-white font-extrabold text-4xl  '>Experience top-tier Security Solutions and Backup-Disaster Recovery plans tailored to protect your assets in the cloud."
            </p> 
        </div>
         <img src="https://images.pexels.com/photos/11044812/pexels-photo-11044812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className='w-full h-full' />
        
        </div>
        <div className="flex h-full w-full  items-center justify-center object-cover">
        <div className='absolute flex items-center bg-zinc-600 bg-opacity-30 justify-center right-40 left-40 border-r-8 p-28'>
          <p className='text-white font-extrabold text-4xl  '>Experience top-tier Security Solutions and Backup-Disaster Recovery plans tailored to protect your assets in the cloud."
            </p> 
        </div>
         
        <img src="https://e0.pxfuel.com/wallpapers/542/17/desktop-wallpaper-aws-launches-amazon-location-service-tech-business-news-amazon-web-services.jpg" alt="..." className='w-full h-full' />
        </div>
        
       
        
      </Carousel>
    </div>
  );
}

export default Component;

