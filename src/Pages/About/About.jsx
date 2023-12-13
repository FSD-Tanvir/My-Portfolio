import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/DMjY8tk/about.jpg"
            className="max-w-[280px] sm:max-w-xl lg:max-w-sm xl:max-w-xl  lg:h-[350px] xl:h-[400px] rounded-lg shadow-2xl object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold">About Me</h1>
            <p className="py-6">
              I'm Tanvir Hasan, a passionate developer on a journey to explore
              the vast world of code and craft digital wonders. With a keen eye
              on innovation and a vision to make a positive impact, my mission
              is to leverage technology to create solutions that enhance and
              simplify the way we interact with the digital realm. <br /> <br />
              My technology journey revolves around the MERN stack (MongoDB,
              Express.js, React, Node.js), and I find joy in building robust and
              scalable applications. From database management with MongoDB to
              server-side scripting with Node.js , crafting dynamic user
              interfaces with React , and ensuring smooth server operations with
              Express.js the MERN stack encapsulates the essence of my
              development endeavors.
            </p>
            <div className="mt-10 mb-5">
              <Link
                to={"/contact"}
                className="border-2 px-4 py-3 font-medium text-xl  bg-gray-500  cursor-pointer  hover:bg-black rounded-lg text-white"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
