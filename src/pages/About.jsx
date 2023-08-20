import { experiences } from "../data/experienceData";
import { educations } from "../data/educationData";
import Education from "../components/Education";
import { skills } from "../data/Skills";
import { data } from "../data/socialLinks";

import Experience from "../components/Experience";
import myImg from "../assets/About/michael.jpg";
import { Link } from "react-router-dom";
const Profile = () => {
  const resume =
    "https://drive.google.com/file/d/1MgDgK-Aztuy2_vER0L7p_ThTj1jnONOY/view?usp=drive_link";
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
                Greetings, It is with great privilege that I present myself,
                Michael Momo, as a distinguished web developer of formidable
                proficiency. With a profound reverence for the intricacies of
                digital architecture, I stand resolute in my commitment to
                crafting online landscapes that harmonize functionality,
                aesthetics, and innovation. A Legacy of Expertise: For over 2
                years, my journey through the dynamic realm of web development
                has been guided by an unwavering dedication to mastery. My
                professional odyssey has been enriched by an immersive
                exploration of diverse coding languages, frameworks, and
                paradigms. This rigorous devotion has granted me a profound
                understanding of the interplay between art and engineering in
                the digital sphere. The Symphony of Creativity and Precision:
                Each line of code I inscribe carries within it the symphony of
                creativity and precision, yielding digital manifestations that
                transcend utility and morph into captivating experiences. My
                discerning eye for design aesthetics is intrinsically entwined
                with my proficiency in algorithmic elegance, resulting in web
                solutions that transfix the senses and elevate user engagement.
                Vanguard of Technological Progression: Embracing the incessant
                flux of technological innovation, I remain steadfast at the
                vanguard of industry progression. My embrace of cutting-edge
                tools and avant-garde methodologies empowers me to sculpt
                websites that epitomize the zenith of modern digital artistry.
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
