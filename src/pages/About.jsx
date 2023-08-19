import { experiences } from "../data/experienceData";
import { educations } from "../data/educationData";
import Education from "../components/Education";
import { skills } from "../data/Skills";
import { data } from "../data/socialLinks";

import Experience from "../components/Experience";
import myImg from '../assets/About/michael.jpg'
import { Link } from "react-router-dom";
const Profile = () => {
    const resume = "https://drive.google.com/file/d/1MgDgK-Aztuy2_vER0L7p_ThTj1jnONOY/view?usp=drive_link";
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    {/* Left Column */}
                    <div className="col-span-4 sm:col-span-3">
                        {/* Profile Details */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img
                                    src={myImg}
                                    className="w-32 h-32 bg-gray-300 rounded-full mb-4"
                                    alt="Profile"
                                />
                                <h1 className="text-xl font-bold">Michael Momo</h1>
                                <p className="text-gray-600">Fullstack Developer</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <Link
                                        to="/contact"
                                        className="bg-text hover:bg-blue-600 text-white py-2 px-4 rounded"
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        to={resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                                    >
                                        Resume
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-white shadow rounded-lg p-6 mt-6">
                            <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                                Skills
                            </span>
                            <ul>
                                {skills.map((skill) => (
                                    <li className="mb-2" key={skill.id}>
                                        {skill.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-4 sm:col-span-9">
                        {/* About Me */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4 text-text">About Me</h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                finibus est vitae tortor ullamcorper, ut vestibulum velit
                                convallis. Aenean posuere risus non velit egestas suscipit.
                                Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                                in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                luctus risus rhoncus id.
                            </p>
                            {/* Social Media Links */}
                            <h3 className="font-semibold text-center mt-3 -mb-2 text-text">
                                Find me on
                            </h3>
                            <div className="flex justify-center items-center gap-6 my-6">
                                {data.map((item) => (
                                    <a
                                        key={item.id}
                                        className=" text-primary hover:text-text duration-300"
                                        aria-label={`Visit ${item.url}`}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mx-10">
                            {/* Experience */}
                            <Experience experiences={experiences} />

                            {/* education */}
                            <Education educations={educations} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
