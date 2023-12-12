const Projects = () => {
  return (
    <div className="container mx-auto flex gap-10">
      {/* project 1 */}
      <div className="hero-content bg-sky-100 antialiased text-gray-900 rounded-lg flex-1">
        <div className="w-full">
          <img
            src="https://i.ibb.co/2S3nVKr/study-hub.png"
            alt=" random img"
            className="h-96 w-full object-cover object-top   rounded-lg shadow-md"
          />
          <div className="relative   -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                Study-hub
              </h4>
              <div className="flex justify-between py-2">
                <a
                  href="https://study-hub-fa95a.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm border border-sky-400  hover:bg-sky-300">
                    Live Demo
                  </button>
                </a>
                <a
                  href="https://github.com/FSD-Tanvir/study-hub-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm border border-sky-400  hover:bg-sky-300">
                    See Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project 2 */}
      <div className="hero-content bg-sky-100 antialiased text-gray-900 rounded-lg flex-1">
        <div className="w-full">
          <img
            src="https://i.ibb.co/2jwpxcm/gagetbaari.png"
            alt=" random img"
            className="h-96 w-full object-cover object-top   rounded-lg shadow-md"
          />
          <div className="relative   -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                gagetbari
              </h4>
              <div className="flex justify-between py-2">
                <a
                  href="https://gagetbaari.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm border border-sky-400  hover:bg-sky-300">
                    Live Demo
                  </button>
                </a>
                <a
                  href="https://github.com/FSD-Tanvir/brand-shop-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm border border-sky-400  hover:bg-sky-300">
                    See Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project 3 */}
      <div className="hero-content bg-sky-100 antialiased text-gray-900 rounded-lg flex-1">
        <div className="w-full">
          <img
            src="https://i.ibb.co/0ssLcTs/eventist.png"
            alt=" random img"
            className="h-96 w-full object-cover object-top   rounded-lg shadow-md"
          />
          <div className="relative   -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                eventist
              </h4>
              <div className="flex justify-between py-2">
                <a
                  href="https://eventist-48f83.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm border border-sky-400  hover:bg-sky-300">
                    Live Demo
                  </button>
                </a>
                <a
                  href="https://github.com/FSD-Tanvir/event-management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm border border-sky-400  hover:bg-sky-300">
                    See Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
