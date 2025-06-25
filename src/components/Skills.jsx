import React from 'react';

// Icons for skills
import { FaReact, FaNodeJs, FaFigma, FaDatabase, FaServer } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiAdobexd } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: "React",
      icon: <FaReact className="w-8 h-8" />,
      description: "Building interactive user interfaces with modern React including hooks, context API and state management.",
      proficiency: 90
    },
    {
      id: 2,
      name: "Node.js",
      icon: <FaNodeJs className="w-8 h-8" />,
      description: "Server-side JavaScript runtime for building scalable network applications and APIs.",
      proficiency: 85
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <SiJavascript className="w-8 h-8" />,
      description: "Advanced ES6+ features, asynchronous programming, and DOM manipulation.",
      proficiency: 95
    },
    {
      id: 4,
      name: "UI/UX Design",
      icon: <FaFigma className="w-8 h-8" />,
      description: "Creating user-centered designs with focus on usability, accessibility and visual appeal.",
      proficiency: 80
    },
    {
      id: 5,
      name: "MongoDB",
      icon: <SiMongodb className="w-8 h-8" />,
      description: "NoSQL database management, schema design, and data modeling.",
      proficiency: 85
    },
    {
      id: 6,
      name: "Express",
      icon: <SiExpress className="w-8 h-8" />,
      description: "Building robust APIs and web applications with Node.js Express framework.",
      proficiency: 90
    },
    {
      id: 7,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-8 h-8" />,
      description: "Utilizing utility-first approach to create custom, responsive designs efficiently.",
      proficiency: 95
    },
    {
      id: 8,
      name: "RESTful API Design",
      icon: <FaServer className="w-8 h-8" />,
      description: "Designing and implementing RESTful services with proper resource modeling and HTTP methods.",
      proficiency: 85
    },
    {
      id: 9,
      name: "Database Design",
      icon: <FaDatabase className="w-8 h-8" />,
      description: "Creating efficient database schemas, relationships, and query optimization.",
      proficiency: 80
    },
    {
      id: 10,
      name: "Prototyping",
      icon: <SiAdobexd className="w-8 h-8" />,
      description: "Wireframing and interactive prototype creation for user testing and validation.",
      proficiency: 85
    }
  ];

  return (
    <section id="skills" className="bg-gray-900 py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
      <div className="absolute top-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full opacity-5 blur-[100px]"></div>
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-[100px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 text-sm tracking-widest uppercase font-medium mb-2">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 playfair-display">
            My Skills
          </h2>
          <div className="h-0.5 w-20 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Skills content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-20">
          <h3 className="text-xl text-white font-semibold mb-8 text-center">
            Additional Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["HTML5", "CSS3", "TypeScript", "Git", "Docker", "AWS", "Firebase", "Redux", "GraphQL", "Responsive Design", "SASS", "Material UI"].map((skill, index) => (
              <span 
                key={index} 
                className="px-5 py-3 bg-gray-800 text-white rounded-full text-sm border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-800/80 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill card component
const SkillCard = ({ skill }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
      {/* Progress bar on top */}
      <div className="w-full h-1 bg-gray-700">
        <div 
          className="h-full bg-yellow-400 transition-all duration-1000 ease-out" 
          style={{ width: `${skill.proficiency}%`, transitionDelay: '300ms' }}
        ></div>
      </div>
      
      <div className="p-6">
        {/* Icon and name */}
        <div className="flex items-center mb-4">
          <div className="mr-4 text-yellow-400 group-hover:text-yellow-300 transition-colors">
            {skill.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{skill.name}</h3>
          <div className="ml-auto text-yellow-400 text-sm font-bold">
            {skill.proficiency}%
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-sm">{skill.description}</p>

        {/* Small bars for visual effect */}
        <div className="mt-6 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 ${i < Math.round(skill.proficiency / 20) ? 'bg-yellow-400/70' : 'bg-gray-700'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;