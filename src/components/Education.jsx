/* eslint-disable react/prop-types */

import { FaSchool } from 'react-icons/fa';

const Education = ({ educations }) => {
  return (
    <div>
         <h2 className="text-xl font-bold mt-6 mb-4 text-text text-center">Education</h2>
        <ol className="relative border-l border-gray-200">
      {educations.map((education) => (
        <li key={education.id} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-text">
            <FaSchool className="w-2.5 h-2.5 text-text" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-text">{education.school} {education.degree} <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2  px-2.5 py-0.5 rounded">{education.date}</span></h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-700">Released on January 13th, 2022</time>
          <p className="mb-4 text-base font-normal text-gray-500">{education.details}</p>
        </li>
      ))}
    </ol>
    </div>
  )
}

export default Education;
