import React from "react";

const AboutUsFooter = () => {
    return (
        <div className=" w-full 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-2">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <h3 className=" text-2xl text-slate-800 ">Our Mission</h3>
                    <p className="font-normal text-base leading-6 text-gray-600 ">

At [Your Company Name], our mission is to leverage cutting-edge technologies and innovative approaches to deliver exceptional solutions in the realms of AWS services and full-stack web design. We are committed to pushing the boundaries of possibility, harnessing the power of AWS cloud infrastructure to create scalable, secure, and efficient systems. </p>

<h3 className=" text-2xl text-slate-800 ">AWS Expertise</h3>
<p className="font-normal text-base leading-6 text-gray-600 ">
We specialize in harnessing the full potential of Amazon Web Services (AWS) to provide robust and reliable solutions for our clients. From scalable cloud computing to storage solutions and machine learning capabilities, we utilize AWS services to optimize performance, streamline operations, and drive business growth.  </p>

<h3 className=" text-2xl text-slate-800 ">Full-Stack Web Design</h3>
<p className="font-normal text-base leading-6 text-gray-600 ">
In the fast-paced world of web development, we understand the importance of delivering seamless user experiences across all platforms. Our full-stack web design expertise enables us to craft dynamic, responsive, and visually stunning web applications tailored to meet the unique needs of each client. From front-end development using the latest frameworks and libraries to back-end infrastructure and database management, we ensure every aspect of your web presence is meticulously designed and flawlessly executed.</p>

<h3 className=" text-2xl text-slate-800 ">Client-Centric Approach</h3>
<p className="font-normal text-base leading-6 text-gray-600 ">
Above all, we prioritize the needs and goals of our clients. We work closely with each client to understand their vision, objectives, and challenges, allowing us to tailor our solutions to exceed expectations. Our dedication to client satisfaction drives every decision we make, ensuring that we deliver not just a product, but a transformative experience that empowers our clients to achieve their goals and thrive in today's digital landscape.</p>

                </div>
                <div className="w-full lg:w-7/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            
        </div>
    );
};

export default AboutUsFooter;
