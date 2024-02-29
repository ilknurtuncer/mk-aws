import { FaMedium } from "react-icons/fa6";

const contactMethods = [
  {
    icon: <FaMedium className=" text-4xl border rounded-full p-1 " />,
    title:
      "Mastering AWS RDS Certificate Rotation: A DevOps Guide to Proactive Problem-Solving",
    desc: "In the complex landscape of AWS RDS, adaptability is essential. A recent incident involving a certificate update underscores the importance of agility and the human element in the field of DevOps...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@drkurtmehmet/mastering-aws-rds-certificate-rotation-a-devops-guide-to-proactive-problem-solving-b7c58ae0454b",
    },
  },
  {
    icon: <FaMedium className=" text-4xl border rounded-full p-1 " />,

    title:
      "Terraform vs. AWS CDK: A Story of Two Titans in Infrastructure as Code",
    desc: "Once upon a time in the digital kingdom, two mighty tools emerged, destined to shape the realm of Infrastructure as Code (IaC): Terraform, the seasoned magician from the house of HashiCorp, and AWS CDK,...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@yemreaydeniz1/terraform-vs-aws-cdk-a-story-of-two-titans-in-infrastructure-as-code-673bea729316",
    },
  },
  {
    icon: <FaMedium className=" text-4xl border rounded-full p-1" />,

    title: "React Folder Structure",
    desc: "The folder structure matters in many ways; it eases understanding, refactoring, and sustainability. In this article, I’ll show how we should manage our react app’s folder struct...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/react-folder-structure-6dcb7e4645c6",
    },
  },
  {
    icon: <FaMedium className=" text-4xl border rounded-full p-1 " />,

    title: "ReactJS - Redux",
    desc: "Many developers getting started with React have at least heard of Redux or are already developing with Redux...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/reactjs-redux-71147a4d32db",
    },
  },
  {
    icon: <FaMedium className=" text-4xl border rounded-full p-1 " />,

    title:
      "In this article, we will see the differences between an Array and an Array of Objects in JavaScript....",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/difference-between-array-and-array-of-objects-in-javascript-afde8d60416d",
    },
  },
  {
    icon: <FaMedium className=" text-4xl border rounded-full p-1 " />,

    title: "Top JavaScript Concepts to Know Before Learning React",
    desc: "If you want to learn React - or any JavaScript framework - you’ll first need to understand the fundamental JavaScript methods and concepts...",
    link: {
      name: "learn more...",
      href: "https://medium.com/@ilknurtuncer67/top-javascript-concepts-to-know-before-learning-react-d1bf0a0fc254",
    },
  },
];
const Insıght = () => {
  return (
    <section className="py-14 container max-w-7xl mx-auto">
      <div className="  font-bold text-gray-500  px-4  md:px-8 ">
        <div className="max-w-xl p-4 ml-10 ">
          <h3 className="text-teal-500 text-6xl font-semibold ">
            Let’s connect
          </h3>
          <p className="mt-3 text-2xl">
            We’re here to help and answer any question you might have, We look
            forward to hearing from you.
          </p>
        </div>
        <hr className="border-teal-300 border-[1.5px] dark:border-gray-700 mb-8"></hr>
        <div className="container max-w-7xl mx-auto">
          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8  lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className=" border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
              >
                <div className=" p-2 text-gray-700">{item.icon}</div>
                <h4 className=" p-3 text-gray-600 opacity-[0.9] text-3xl font-medium xl:text-3xl">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
                <a
                  href={item.link.href}
                  className=" items-center text-md text-teal-400 duration-150 hover:text-red-500 font-medium"
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
};
export default Insıght;
