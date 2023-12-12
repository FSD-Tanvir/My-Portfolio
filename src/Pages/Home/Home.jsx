/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="container mx-auto" >
        <div className="hero-content flex flex-col md:flex-row justify-between items-center ">
          <div className="">
            <h3 className="font-medium tracking-wider ">WELCOME TO MY WORLD</h3>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Hi, I’m <span className="text-sky-400">Tanvir </span>
            </h1>
            <h2 className=" text-3xl lg:text-4xl font-bold text-sky-400">
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-gray-600 text-lg mt-8">
            Dive into my projects, witness the enthusiasm, and join me on this exciting journey of exploration and growth. Let's innovate, learn, and thrive together in the dynamic world of coding!
            </p>

            <div className="mt-10">
              <div className="">
                <h4 className="font-medium tracking-wide text-gray-700 mb-6">
                  FIND WITH ME
                </h4>
                <div className="button flex gap-5">
                  <button className="btn_shadow">
                    <FaFacebookF />
                  </button>
                  <button className="btn_shadow">
                    <FaInstagram />
                  </button>
                  <button className="btn_shadow">
                    <FaLinkedinIn />
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="right">
            <div className="right_img bg-gradient-to-br from-gray-200 to-white shadow-md rounded-xl h-96 w-80 md:w-96 ">
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
