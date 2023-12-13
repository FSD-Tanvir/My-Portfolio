/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6x3xbba",
        "template_xzabrx3",
        form.current,
        "OH6G-K-_ri1FsbAw6"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className=" py-4 md:py-12">
        <div className="container mx-auto px-4">
          <div className="xl:flex -mx-4">
            <div className="xl:w-10/12 xl:mx-auto px-4">
              <div className="xl:w-3/4 mb-4">
                <h1 className="text-3xl text-medium mb-4">
                  I would love to hear from you
                </h1>
                <p className="text-xl mb-2">
                  Please submit your information and I will get back to you.
                </p>
              </div>

              <div className="md:flex md:-mx-4 mt-4 md:mt-10">
                <div className="md:w-2/3 md:px-4">
                  {/* Form */}
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact-form"
                  >
                    <div className="sm:flex sm:flex-wrap -mx-3">
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          name="from_name"
                          type="text"
                          placeholder="Full Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-black input"
                          required
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="border-2 rounded px-3 py-1 w-full focus:border-black input"
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          name="to_name"
                          type="email"
                          placeholder="E-mail address"
                          className="border-2 rounded px-3 py-1 w-full focus:border-black input"
                          required
                        />
                      </div>
                      <div className="sm:w-1/2 px-3 mb-6">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="border-2 rounded px-3 py-1 w-full focus:border-black input"
                        />
                      </div>
                      <div className="sm:w-full px-3">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Your message here"
                          className="border-2 rounded px-3 py-1 w-full focus:border-black input"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-12">
                      <button
                        type="submit"
                        value="Send"
                        className="border-2 border-gray-500 rounded px-6 py-2 text-gray-500 hover:bg-gray-500 hover:text-white transition-colors duration-300"
                      >
                        Send a Message
                        <i className="fas fa-chevron-right ml-2 text-sm"></i>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
                  <div className="bg-indigo-100 rounded py-4 px-6">
                    <h5 className="text-xl font-medium mb-3">Help</h5>
                    <p className="text-gray-700 mb-4">
                      Need help or have any query? Don't hesitate, you can
                      directly shoot us an{" "}
                      <a
                        href="mailto:tanvirfsd1@gmail.com"
                        className="text-gray-500 border-b border-transparent hover:border-gray-500 inline-block"
                      >
                        email
                      </a>{" "}
                    </p>
                    <p className="text-gray-700">
                      You can move to{" "}
                      <a
                        href="#"
                        className="text-gray-500 border-b border-transparent hover:border-gray-500 inline-block"
                      >
                        FAQs
                      </a>{" "}
                      or{" "}
                      <a
                        href="#"
                        className="text-gray-500 border-b border-transparent hover:border-gray-500 inline-block"
                      >
                        Support
                      </a>{" "}
                      page to get more information about our site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
