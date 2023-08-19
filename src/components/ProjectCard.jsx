/* eslint-disable react/prop-types */
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const ProjectCard = ({ url, img, github, title, text }) => {
    return (
        <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-lg h-64'
            />
            <div className='capitalize p-8'>
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
                <div className='mt-4 flex gap-x-4'>
                    <Link to={url} 
                     target="_blank"
                     rel="noopener noreferrer">
                        <TbWorldWww className='h-8 w-8  text-primary hover:text-text duration-300' />
                    </Link>
                    <Link to={github}
                     target="_blank"
                     rel="noopener noreferrer">
                        <FaGithubSquare className='h-8 w-8 text-primary hover:text-text duration-300' />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
