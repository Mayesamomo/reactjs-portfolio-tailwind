/* eslint-disable react/prop-types */
import { FaDownload } from 'react-icons/fa';

const Experience = ({ experiences }) => {
  return (
    <div>
        <h2 className="text-xl font-bold mt-6 mb-4 text-text text-center">Experience</h2>
       <ol className="relative border-l border-gray-200">
  {experiences.map((experience) => (
    <li key={experience.id} className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-text">
        <FaDownload className="w-2.5 h-2.5 text-text" />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-text">{experience.company} - {experience.position} <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2  px-2.5 py-0.5 rounded">{experience.date}</span></h3>
      <ul className="mt-2 list-disc list-inside">
        {experience.tasks.map((task, taskIndex) => (
          <li key={taskIndex} className="block mb-2 text-sm font-normal leading-none text-gray-700">{task}</li>
        ))}
      </ul>
    </li>
  ))}
</ol>
    </div>
   
  );
};

export default Experience;
