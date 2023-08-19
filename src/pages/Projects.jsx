import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    //resume link
    const resume = "https://drive.google.com/file/d/1MgDgK-Aztuy2_vER0L7p_ThTj1jnONOY/view?usp=drive_link";
    //pagination 
    const projectsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalProjects = projects.length;
    const lastProjectIndex = currentPage * projectsPerPage;
    const firstProjectIndex = lastProjectIndex - projectsPerPage;
    const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalProjects / projectsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
        <div>
            <div className="bg-white ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text md:text-5xl lg:text-6xl">
                        🚀 Unveiling My Digital Creations: Explore a Showcase of Web Wizardry! 🌐
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Step into a world of web development marvels, where design meets code in perfect harmony. Explore captivating frontend designs, robust backend architecture, and full-stack wonders that reflect my passion for crafting exceptional digital experiences. Let's dive into the magic behind these creations!
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-text hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Contact Me
                            <svg
                                className="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                        <Link
                            to={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-text rounded-lg border border-primary hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
            <div className='py-0 align-element' id='projects'>
                <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {currentProjects.map((project) => {
                        return <ProjectCard key={project.id} {...project} />;
                    })}
                </div>
                <div className="text-center my-5">
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`bg-primary text-text px-4 py-2 rounded-full font-medium ${currentPage === pageNumber ? 'active:scale-90 transition duration-100' : ''
                                }`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
