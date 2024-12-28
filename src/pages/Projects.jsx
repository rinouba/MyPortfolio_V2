import { FaGithub, FaGlobe } from "react-icons/fa";
import { data } from "../data/projects";

const Projects = () => {
  return (
    <div className="w-5/6 mx-auto flex justify-evenly gap-10 flex-wrap">
      {data.map(({ id, name, image, skills, liveDemo, GithubLink }) => {
        return (
          <div
            className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden w-[300px] p-4 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            key={id}
          >
            {/* Image Section */}
            <div className="relative group">
              <img
                src={image}
                alt="Project preview"
                className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                {name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {skills}
              </p>
            </div>
            {/* Footer Section */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 dark:border-gray-600">
              <a
                href={GithubLink}
                className="text-gray-800 hover:text-indigo-600 text-2xl transition-transform duration-300 hover:scale-125 dark:text-gray-200 dark:hover:text-indigo-400"
              >
                <FaGithub />
              </a>
              <a
                href={liveDemo}
                className="hover:scale-125 text-2xl text-gray-800 transition-transform duration-300 dark:text-gray-200 dark:hover:text-indigo-400 hover:text-indigo-600"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
