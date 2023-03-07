import './Home.css';

export default function Home() {
    return (
        <section id="home" className="home">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                    Willow Hughes
                </h1>
                <h2 className="title-font sm:text-3xl text-2xl mb-6 font-medium leading-relaxed">
                    Full Stack Software Engineer
                </h2>
                <div className="flex justify-center">
                <a
                    href="#projects"
                    className="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg">
                    Projects
                </a>
                <a
                    href="#skills"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    Skills
                </a>
                <a
                    href="#contact"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    Contact
                </a>
              </div>
            </div>
          </div>
          <div className="triangle-lgr"></div>
          <div className="triangle-smr"></div>
        </section>
      );
}
