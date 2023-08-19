import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import {projects} from '../data/projects';
import { Link } from 'react-router-dom';
const RecentProjects = () => {
    const topProjects = projects.slice(0, 3); //only show 3 projects 
  return (
    <section className='py-20 align-element' id='projects'>
    <SectionTitle text='Recent Projects' />
    <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
      {topProjects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </div>
   <div className="text-center">
   <Link to="/projects" 
   className="text-center bg-primary text-text px-4 py-2 rounded-full font-medium active:scale-90 transition duration-100">
  Explore Projects</Link>
   </div>
  </section>

  )
}

export default RecentProjects