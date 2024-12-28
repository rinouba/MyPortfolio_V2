import Projects from './Projects';
import imageHome from "../images/undraw_website_27ju.svg"
import { motion } from 'framer-motion';

const Home = () => {

  return (
      <>
      <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
      <div className="min-h-screen bg-white dark:bg-primary-dark flex items-center">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-300 ">
              Hi, I am <span className="text-blue-500">Osama</span>
            </h1>
            <p className="mt-4 dark:text-gray-50 text-gray-900">
              A Front-End Developer
            </p>
            <button
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <i className="fas fa-download mr-2"></i>Download CV
            </button>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={imageHome} // Replace with an actual illustration link
              alt="Developer Illustration"
              className="w-3/4"
            />
          </div>
        </div>
      </div>
    <Projects />
    </motion.div>
      </>
  );
};

export default Home;
