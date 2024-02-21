import { FaMedium } from "react-icons/fa6";


const contactMethods = [
  {
    icon: (
      <FaMedium className=" text-2xl" />
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   strokeWidth={1.5}
      //   stroke="currentColor"
      //   className="w-6 h-6"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      //   />
      // </svg>
    ),
    title: "Mastering AWS RDS Certificate Rotation: A DevOps Guide to Proactive Problem-Solving",
    desc: "In the complex landscape of AWS RDS, adaptability is essential. A recent incident involving a certificate update underscores the importance of agility and the human element in the field of DevOps...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@drkurtmehmet/mastering-aws-rds-certificate-rotation-a-devops-guide-to-proactive-problem-solving-b7c58ae0454b",
    },
  },
  {
    icon: (
      <FaMedium className=" text-2xl" />
    ),

    title: "React Folder Structure",
    desc: "The folder structure matters in many ways; it eases understanding, refactoring, and sustainability. In this article, I’ll show how we should manage our react app’s folder struct...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/react-folder-structure-6dcb7e4645c6",
    },
  },
  {
    icon: (
      <FaMedium className=" text-2xl" />
    ),

    title: "ReactJS — Redux",
    desc: "Many developers getting started with React have at least heard of Redux or are already developing with Redux...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/reactjs-redux-71147a4d32db",
    },
  },
  {
    icon: (
      <FaMedium className=" text-2xl" />
    ),

    title: "In this article, we will see the differences between an Array and an Array of Objects in JavaScript....",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/difference-between-array-and-array-of-objects-in-javascript-afde8d60416d",
    },
  },
  {
    icon: (
      <FaMedium className=" text-2xl" />
    ),

    title: "Top JavaScript Concepts to Know Before Learning React",
    desc: "If you want to learn React — or any JavaScript framework — you’ll first need to understand the fundamental JavaScript methods and concepts...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/top-javascript-concepts-to-know-before-learning-react-d1bf0a0fc254",
    },
  },
  
 
];
const Insıght = () => {
return (
  <section className="py-14">
    <div className=" max-w-screen-xl  px-4 text-gray-600  md:px-8 ">
      <div className="max-w-md">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Let’s connect
        </h3>
        <p className="mt-3">
          We’re here to help and answer any question you might have, We look
          forward to hearing from you .
        </p>
      </div>
      <div>
        <ul className=" inline-block mt-12 items-center   lg:mt-0">
          {contactMethods.map((item, idx) => (
            <li
              key={idx}
              className=" border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
            >
              <div className=" border rounded justify-center text-gray-700">
                {item.icon}
              </div>
              <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                {item.title}
              </h4>
              <p>{item.desc}</p>
              <a
                href={item.link.href}
                className=" items-center text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium"
              >
                {item.link.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
}
export default Insıght;
