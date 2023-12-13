/* eslint-disable react/no-unescaped-entities */
const Education = () => {
  return (
    <div className="container mx-auto">
      <h1 className="sm:text-lg w-5/6 lg:w-1/2 mx-auto font-medium sm:text-center mb-5 mt-5 text-justify">
        Starting my educational journey has been a transformative experience.
        I've discovered more about myself, grown personally, and committed to
        continuous learning. Here are the details.
      </h1>
      <hr className="border-t-4 border-gray-300 my-1 w-5/6  lg:w-1/2 mx-auto" />

      <div>
        <div className="w-5/6  lg:w-1/2 mx-auto my-6 border-t border-b border-r rounded">
          <div className="p-4 border-l-4 border-black rounded">
            <div className="m-2 text-xl font-bold">
              Bachelor of Science in Mathematics{" "}
            </div>
            <div className="m-2 pb-2  text-grey-darker border-b-2 border-grey-lighter ">
              Chittagong Govt. City Collage, Bangladesh
            </div>
            <div className="m-2 ">
              <span className="mr-2 pr-2 text-grey-darker border-r-2 border-grey-darker">
                July 2022 - Present
              </span>
            </div>
          </div>
        </div>
        <div className="w-5/6  lg:w-1/2 mx-auto my-6 border-t border-b border-r rounded">
          <div className="p-4 border-l-4 border-black rounded">
            <div className="m-2 text-xl font-bold">
              Higher Secondary School Certificate
            </div>
            <div className="m-2 pb-2 text-grey-darker border-b-2 border-grey-lighter">
              Islamia University Collage, Chittagong
            </div>
            <div className="m-2 flex flex-wrap gap-2">
              <span className="mr-2 pr-2 text-grey-darker border-r-2 border-grey-darker">
                July 2018 - April 2020
              </span>
              <span className="mr-2 pr-2 text-grey-darker border-r-2 border-grey-darker">
                GPA: 4.92 out of 5.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
